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

To seed data to DB
docker exec -it pulsevow-backend npx tsx prisma/seed.ts

Added ruleset to git repo

Things to know

1. Product overview
2. Tech stack
3. Repository structure
4. Local setup
5. Environment variables
6. Running the application
7. Routing
8. Authentication
9. API architecture
10. Component architecture
11. Design system
12. News/Event intelligence model
13. Git workflow
14. Deployment overview
15. Known issues
16. Current roadmap
17. Do/Don't rules
18. Important contacts