# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```
## Demo Users

There are 20 demo users, 10 standard and 10 regular. The info is similar for all the users, with the difference of one number from 1 to 10 that you add.

To login you use this base for standard users:

```
email: standardUser<ADD NUMBER>@demo.com
password: standardPass<ADD SAME NUMBER>
```
And this one for regular users:

```
email: regularUser<ADD NUMBER>@demo.com
password: regularPass<ADD SAME NUMBER>
```