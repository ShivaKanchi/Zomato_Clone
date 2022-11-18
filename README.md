# Zomato_Clone
A basic Food Delivery Website 

#Server:
-Packages:
Express
Dotenv
Mongoose

-DevPackages:
Nodemon
Bable(To use es6 features and to make code more optimized)

-API plan and scheming
--Schemas:
User*
Restaurant(_id,menu...,)
Menu(_id,Restaurant._id,Review._id...,Food...,)
Food(_id,Menu._id)
Order(User._id)
Review(_id,Restaurant._id)
Image(RestaurantImg,MenuImg,FoodImg)