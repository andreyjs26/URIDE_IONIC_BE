# URIDE_IONIC_BE
BackEnd in NodeJs using Express js , Sequalizer Js and Postgres Sql

## Includes:
* Json Web Token authentication
* Password encryption
* CRUD Passengers
* CRUD Cars
* CRUD Drivers

## Missing:
* Migrate to Heroku

## For Run:
* npm run start:dev

## Migrations:
* sequelize db:migrate
* sequelize db:migrate:undo:all

## Other dependencies:
* npm install bcrypt --save
* npm install jsonwebtoken --save
* npm install --save sequelize-cli

##  Heroku:
* heroku create
* heroku local
* git push heroku master
* heroku ps:scale web=1
* heroku open
* heroku logs --tail
* heroku run node
* heroku addons:create heroku-postgresql:hobby-dev
