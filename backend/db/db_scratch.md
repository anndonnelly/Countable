npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all

heroku login
git push heroku
heroku run npm run sequelize db:migrate
heroku run npm run sequelize db:seed:all
