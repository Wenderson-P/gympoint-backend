GYMPOINT

Projeto para gerenciar usuários de uma academia.
O projeto é feito totalmente em javascript.
Backend em node js, frontend com React e mobile com React Native.
Atualmente o backend está sendo desenvolvido.

Some Tools used in this project :
Express
Sucrase + Nodemon;
ESLint + Prettier + EditorConfig;
Sequelize (Using PostgreSQL);
JWT Auth

##Routes

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

- [x] Create update route in enrollments
- [x] Create a delete route in enrollments
- [x] Create a student checkin table
- [x] Create a student checkin route
- [x] Create help_orders table
- [x] Create help_orders post route
- [x] Create help_orders put route
- [x] Create help_orders get route
