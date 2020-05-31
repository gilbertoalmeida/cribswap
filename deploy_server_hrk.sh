#! /bin/bash
yarn build:server
heroku container:login
heroku container:push --app=tranquil-badlands-58172 web
heroku container:release --app=tranquil-badlands-58172 web