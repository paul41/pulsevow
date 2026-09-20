#!/usr/bin/env bash

set -euo pipefail

# ==========================================
# Health Check Script
# ==========================================

API_URL="${API_URL:-http://localhost:5000/health}"
FRONTEND_URL="${FRONTEND_URL:-http://localhost}"
NGINX_URL="${NGINX_URL:-http://localhost}"

GREEN="\033[0;32m"
RED="\033[0;31m"
YELLOW="\033[1;33m"
NC="\033[0m"

PASS=0
FAIL=0

check() {
    local NAME="$1"
    local URL="$2"

    printf "%-30s" "$NAME"

    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL" || echo "000")

    if [[ "$STATUS" == "200" ]]; then
        echo -e "${GREEN}OK${NC}"
        ((PASS++))
    else
        echo -e "${RED}FAILED (${STATUS})${NC}"
        ((FAIL++))
    fi
}

echo "========================================="
echo " System Health Check"
echo "========================================="

check "Backend API" "$API_URL"
check "Frontend" "$FRONTEND_URL"
check "Nginx" "$NGINX_URL"

echo
echo "Checking Docker Containers..."

docker compose ps

echo
echo "========================================="
echo "Passed : $PASS"
echo "Failed : $FAIL"
echo "========================================="

if [[ "$FAIL" -gt 0 ]]; then
    exit 1
fi

echo -e "${GREEN}System is healthy.${NC}"