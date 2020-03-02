<p align="center"  >
    <a href="https://github.com/Wenderson-P/gympoint-web">
        <img src="https://user-images.githubusercontent.com/52503774/72694019-225a1300-3b12-11ea-8285-0afaa3e9d409.png" />
      </a>
    <h2 align="center"  >Gympoint</h2>
</p>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Wenderson-P/gympoint-backend"/>
        <img alt="Languages" src="https://img.shields.io/github/languages/count/Wenderson-P/gympoint-backend"/>
      <img alt="Repository size" src="https://img.shields.io/github/repo-size/Wenderson-P/gympoint-backend"/>
       <img alt="Code quality" src="https://img.shields.io/scrutinizer/quality/g/wenderson-p/gympoint-backend"/>
  </p>

## 📜 Table of Contents

* [About the Project](#-about-the-project)
  * [Made With](#-made-with)
  * [Routes](#-routes)
* [Getting Started](#getting-started)
  * [Requirements](#-requirements)
  * [Installation](#-installation)
* [Web Version](#-web-version)
* [Mobile Version](#-mobile-version)

## 🔎 About the project
This is the backend for a gym manager.The project is divided in Web and mobile  </br>

  The web version is for the gym admnistrators, they are able to:
  * Add, Edit and Delete students.   </br>
  * Add, Edit and Delete Plans.  </br>
  * Add, Edit and Delete Enrollments.   </br>
  * Answer Help Orders.  </br>
  
  The app is only for students, they can:
  * Check-in( one time per day, 5 times per week)
  * See profile
  * Make questions to instructors
  
  A email is sent when:
  * A new enrollment is made
  * A student makes a help-order
  * A instructor answer one help-order

## 🧰 Made with

-  [Node.js](https://www.nodejs.org)
-  [Express](https://expressjs.com/)
-  [Nodemon](https://nodemon.io/)
-  [Sucrase](https://github.com/alangpierce/sucrase)
-  [Docker](https://www.docker.com/docker-community)
-  [Sequelize](http://docs.sequelizejs.com/)
-  [PostgreSQL](https://www.postgresql.org/)
-  [node-postgres](https://www.npmjs.com/package/pg)
-  [Redis](https://redis.io/)
-  [MongoDB](https://www.mongodb.com/)
-  [Mongoose](https://mongoosejs.com/)
-  [JWT](https://jwt.io/)
-  [Multer](https://github.com/expressjs/multer)
-  [Bcrypt](https://www.npmjs.com/package/bcrypt)
-  [Youch](https://www.npmjs.com/package/youch)
-  [Yup](https://www.npmjs.com/package/yup)
-  [Bee Queue](https://www.npmjs.com/package/bcrypt)
-  [Nodemailer](https://nodemailer.com/about/)
-  [date-fns](https://date-fns.org/)
-  [Sentry](https://sentry.io/)
-  [DotEnv](https://www.npmjs.com/package/dotenv)

Database:
* Redis for email
* PostGress for default storage


## 🚩 Routes
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
	"email" : "teste@gympoint.com",
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

## Getting Started

## 📋 Requirements

For development, you will only need Node.js and a package manager like yarn or npm, installed in your environement.

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

## 🔌 Installation

    $ git clone https://github.com/Wenderson-P/gympoint-backend
    $ cd gympoint-backend
    $ yarn install
  
<h3>You must create a .env file! Use the .env.example as reference.</h3>
    
## 💻 Web Version
  
  [Gympoint-Web](https://github.com/Wenderson-P/gympoint-web)
  
## 📱 Mobile Version

  The mobile version is under development!
