# Setup:
## Docker and PostgreSQL:
If you don't have it installed already, you'll need to [install Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).

Be sure to follow the [post-installation](https://docs.docker.com/engine/install/linux-postinstall/) steps too.

Copy the example.env, and fill in the variables to have sensible values. You can set your pgadmin credentials to whatever you like.
Default database user is `admin`, and the name of the db should be `hyperfixation`. Idk why you'd change it but I guess it's good to have configurability for future proofing.

Then, open a terminal in the repo, and `docker compose up`, and the compose file does some magic. It should run the `init.sql` script and create the database tables if they don't already exist (leaving them alone if they do!)

If you need to attach a terminal to the docker container directly (e.g. to run `pgsql` commands directly), then `docker compose exec database bash` for database container, or `docker compose exec pgadmin bash` for the pgadmin container. When you're inside the database container, you can run pgsql commands by firstly attaching to the database with `psql -U admin -d hyperfixation`. If you changed dthe default user from "admin" in the .env, change it to match that in the command. Same for the database name. You should be able to use pgsql commands now, like `\l` to list all DBs, `\c` to change DB (if for some reason you want to do that, but you shouldn't need to), and running regular ol' SQL statements. Note: you MUST have a semi-colon at the end of your SQL statements or they will NOT run!

To access pgadmin, to do database things within the web client, you can visit `localhost:5050` and log in with the credentials you specified in the .env file. In the left-hand sidebar, click Servers, then click on the hyperfixation db. Then you'll be prompted for a password for the admin user. It's the one you set in the .env file. Under Schemas > public > Tables, choose a table, then right click on it and click view/edit data, allowing you to (you guessed it) view and edit data.

## Using the local database:
When you start development, run `docker compose up` to ensure the database and pg-admin containers are running.
See below for troubleshooting 'port already in use' errors.

Make sure that when you run `npm run test ` or `npm run dev` that you see the message "Successfully connected to database." in console. This is the output from a verification function that checks the status of the database connection.

### Troubleshooting

#### "Port already in use" error when running `docker compose up`?
It probably didn't shut down properly last time.
Firstly try `systemctl stop postgresql`, and `docker compouse up` again.
If still having issues, `netstat -tnlp | grep 5432` to get the pid of
the postgres process. Then kill it with `sudo kill -9 <pid>`
(without the angle brackets of course).
Then `docker compose up` again.

#### The database didn't initialise when I first ran `docker compose up`?
Most likely a permissions issue (it should be globally executable).
`chmod 755 ./init.sql`
`rm -rf ./db-data/`
`docker compose up`
Hopefully should initialise now.

#### pgadmin isn't working :(
Most likely a perms/ownership issue.
From the root of the repo, outside the container, `chown -R 5050 ./pgadmin-data`.
OR
From within the pgadmin container, `chown -R pgadmin /pgadmin`.

#### Anything else
Try `docker compose down` and `docker compose up --build` to rebuild the containers.

# Unit tests
We have a small (so far) suite of unit tests for some of the database functionality. They can be run from `npm run dev` and any further tests you wish to write can be placed into the __tests__ dir to be automatically run with `npm run test`.


## Next Default README

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
