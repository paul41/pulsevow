docker run -d --name pulsevow-redis -p 6379:6379 redis:8-alpine


DEV docker run
docker compose -f docker-compose.local.yml up --build

check http://localhost   -UI
check http://localhost/api/health -Server


For migration:
docker exec -it pulsevow-backend npx prisma migrate deploy
docker exec -it pulsevow-backend npx prisma migrate status - 18 migrations found in prisma/migrations....Database schema is up to date!
docker exec -it pulsevow-backend npx prisma migrate dev --name add_user_preferences

To login to DB
docker exec -it pulsevow-postgres psql -U pulsevow -d pulsevow