<h3>GYMPOINT</h3>
Project made to manage students of a gym.
The project is made in javascript with Node.

You have a CRUD of: students,plans,enrollments and help orders.


## Tool Used

* Express
* Sucrase + Nodemon;
* ESLint + Prettier + EditorConfig;
* Sequelize (Using PostgreSQL);
* JWT Auth (jsonwebtoken)
* Docker
* BcryptJS
* bee-queue
* nodemailer
* Yup

Database:
* Redis for email
* PostGress for default storage


## Routes
You can see all the available routes in src/routes.js, here are some examples:

- routes.get('/')
  `This is the test route to the server`
  
- routes.post('/sessions')
```
This is the login route, accepts a email and a password
"email": "teste@gympoint.com.br",
"password" : "test123"
This request will send back a jwt token, this token will be needed for all the requestions above.
```

- routes.post('/students')

```
This will create a new student
	"name" : "Test",
	"email" : "teste@gympoint.com.br",
	"age" : 21,
	"weight" : 70,
	"height" : 1.80
```

- routes.put('/students')

```
This route will update student data
{
	"name" : "Tester",
	"email" : "teste@gmail.com",
	"id" : 11
}
```


## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/Wenderson-P/gympoint-backend
    $ cd gympoint-backend
    $ yarn install
    
    <h3>You must change the .env file </h3>
    
## Web Version
  
  [Gympoint-Web](https://github.com/Wenderson-P/gympoint-web)
