#! /bin/bash
yarn build:server
docker build -t galmeidan/cribswap:latest .
docker push galmeidan/cribswap:latest
ssh root@167.172.172.234 "docker pull galmeidan/cribswap:latest && docker tag galmeidan/cribswap:latest dokku/cribswap:latest && dokku tags:deploy cribswap latest"