#!/bin/bash
set -e

# Build dependent images
docker build -t blog-client:latest -f ./clients/blog/Dockerfile . --platform linux/amd64

# Build production images
docker build -t ghcr.io/sderickson/scotterickson-caddy:latest -f ./deploy/prod/Dockerfile.prod . --platform linux/amd64

# Note: sometimes need to run with --no-cache if cache got into a weird state from cancelling mid-build