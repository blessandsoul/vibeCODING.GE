# syntax=docker/dockerfile:1.7
# The production Next runtime is built from a locally verified standalone output.
# Coolify only pulls this immutable release, avoiding VPS BuildKit font fetches.
FROM localhost:5000/vibecoding-app:05285c3b7447a75e6fe54ac0a62a9f36d2629a23-clean2

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health',(r)=>{process.exit(r.statusCode===200?0:1)})"
