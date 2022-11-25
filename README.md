# Zomato_Clone
A basic Food Delivery Website 

#Server:

-Packages:
Express
Dotenv
Mongoose
bcrypt
JsonWebToken
Passport & Passport-jwt(Authorization of token and Authentication)
joi npm(Validations for schema)
aws-sdk(to work with aws acc)
multer(to store images in ram while upload)
passport-google-oauth2 (for google authentication)

-DevPackages:
Nodemon
Bable(To use es6 features and to make code more optimized)


-API plan and scheming
--Schemas:
User*
Restaurant(_id,menu...,)
Menu(_id,Restaurant._id,Food...,Recommendations...)
Food(_id,Menu._id)
Order(User._id)
Review(_id,Restaurant._id)
Image(RestaurantImg,MenuImg,FoodImg)


#Client:

-packages
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
redux-thunk