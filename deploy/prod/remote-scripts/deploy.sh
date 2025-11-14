#!/bin/bash
sudo -i
cd /root/scotterickson/deploy/prod/remote-assets
docker compose --env-file .env.prod -f docker-compose.prod.yaml up
docker system prune -f