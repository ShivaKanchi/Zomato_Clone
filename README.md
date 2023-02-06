# Zomato Clone
Hello All this is my first MERN project


Its a Clone of Zomato Web page a online food delivery website.
This website has functionlity of signup and signin os user, user can visit different restaurants and give reviews on restaurants.
User can also givew reviews to a restaurant and also order foods and which is dynamic and automatically callculate the orders and redirects to a payment gateway.
This Data manipulation and usage is done through MongoDb.


## Backend Api:
https://zomato-clone-shiva.onrender.com/
## Tech Stack

**Client:** 
React, 
Redux, 
TailwindCSS

**Server:** 
Node, 
Express

## Packages

### Server:

Express

Dotenv

Mongoose

bcrypt

JsonWebToken

Passport & Passport-jwt(Authorization of token and Authentication)

joi npm(Validations for schema)

aws-sdk(To work with aws acc)

multer(To store images in ram while upload)

passport-google-oauth2 (For google authentication)

Nodemon

Bable(To use es6 features and to make code more optimized)




#### Client:


tailwind

@headlessui/react

axios (for backend connection)

swiper 

react-router-dom

react-rating-stars-component

leaflet & react-leaflet

classnames(for condtional statements)

react-simple-image-viewer

dayjs

react

redux-thunk

redux-logger(to view req and res in log)

redux-react
## Schema Reference and Api Reference

### Schema
User(_id,Review._id)

Restaurant(_id,menu.id,)

Menu(_id,Restaurant._id,Food...,Recommendations...)

Food(_id,Menu._id)

Order(User._id) [Local Storage]

Review(_id,Restaurant._id)

Image(RestaurantImg,MenuImg,FoodImg) 

### Api Reference

#### Sign IN

```http
  POSt /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. As a User |
| `password` | `string` | **Required**. As a User |

#### Sign Up

```http
  GET /auth/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| ` fullname `      | `string` | **Required**. User details |
| ` email `      | `string` | **Required**. To login  |
| ` password `      | `string` | **Required**. To login |

### Postman Document

https://documenter.getpostman.com/view/23530707/2s8Yt1qohG
...



