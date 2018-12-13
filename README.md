Enjoy this view demo in [https://mmartan-view.herokuapp.com/](https://mmartan-view.herokuapp.com/)
and API demo in [https://mmartan-api.herokuapp.com/](https://mmartan-api.herokuapp.com/api/v1/products?page=1&limit=10).

## mmartan - Project Details

Simple ReactJS project for mmartan consuming a Rest API in Nodejs and Typescript for product listing, pagination, search and select products per page.

You can clone this API project with:
````
git clone https://github.com/marcoslourinho/mmartan-api.git
````

and View with:
````
git clone https://github.com/marcoslourinho/mmartan-view.git
````

### `Local configuration`
Follow the instructions to config and install on your local machine:

## Database Settings

1. Access [https://mlab.com/](https://mlab.com/) and create a account.
2. Create a new free enviroment **mmartan**.
3. Create a new collection **products**.
4. Access users option and add a new database user.
5. Access **mmartan-api/src/config/.env** and set your enviroment variables

Access your initial seeds in API Project

````
cd mmartan-api/seed
````

And import initial datas with:

````
 mongoimport -h <YourHost> -d mmartan -c products -u <YourUser> -p <YourPassword> --file products.json
````

and database is online and ready to your development procedures!

**Obs:** *You can use local database with MongoDB if you need.* :)


## API Settings

1. Make sure your environment variables in the **.env** file are correctly configured

2. Install project dependencies:

````
npm install
````

3. To run the project on http://localhost:3000 use

````
nodemon
````

and your REST API is ready to your development procedures!

Obs: To access the backend features, you can replace the baseURL with **"https://mmartan-api.herokuapp.com/api/v1"** in *mmartan-view/src/services/api.js* to access resources in production or use **"http://localhost:3000/api/v1"** to consume the local API.


## View Settings

1. Access project:
````
cd mmartan-view
````

2. Install project dependencies:
````
npm install
````

3. To run the project on http://localhost:3001 use
````
npm start
````

**And your local project is Done!** :)

