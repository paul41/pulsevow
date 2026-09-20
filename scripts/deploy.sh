#!/bin/bash

set -e

echo "🚀 Deploying PulseVow..."

git pull origin main

docker compose build

docker compose up -d

docker compose exec -T server npx prisma migrate deploy

docker compose ps

echo "✅ PulseVow deployed successfully"