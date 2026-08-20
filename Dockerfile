# syntax=docker/dockerfile:1.7
# Stage 1: Dependencies
FROM node:24-bookworm-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --network=host --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund --ignore-scripts \
      --fetch-retries=5 --fetch-retry-factor=2 \
      --fetch-retry-mintimeout=10000 --fetch-retry-maxtimeout=120000 \
      --maxsockets=1 --prefer-offline \
    && test -x node_modules/.bin/next

# Stage 2: Build
FROM node:24-bookworm-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

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
