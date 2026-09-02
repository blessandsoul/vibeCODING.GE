# syntax=docker/dockerfile:1.7
# Stage 1: Dependencies
# Built outside BuildKit because the VPS BuildKit npm resolver is unreliable.
# The tag is the shared package-lock SHA-256 prefix for this landing family.
FROM localhost:5000/landing-deps:4c3aadd82edc AS deps

# Stage 2: Build
FROM node:24-bookworm-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN --network=host npm run build

# Stage 3: Production runner
FROM node:24-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health',(r)=>{process.exit(r.statusCode===200?0:1)})"

CMD ["node", "server.js"]
