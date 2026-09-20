#!/bin/bash

set -e

mkdir -p backups

docker compose exec -T postgres \
  pg_dump -U pulsevow pulsevow \
  > "backups/pulsevow-$(date +%Y-%m-%d-%H%M).sql"

echo "Database backup completed."