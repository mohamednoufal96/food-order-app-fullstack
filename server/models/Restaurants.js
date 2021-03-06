// import the mongoose
const mongoose = require("mongoose");

// create a schema
const Schema = mongoose.Schema;

// declare fields present in the mongodb collection
const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    location_id: {
        type: Number,
        required: true,
    },
    city_id: {
        type: Number,
        required: true,
    },
    locality: {
        type: String,
        required: true,
    },
    thumb: {
        type: Array,
        required: true,
    },
    aggregate_rating: {
        type: Number,
        required: true,
    },
    rating_text: {
        type: String,
        required: true,
    },
    min_price: {
        type: Number,
        required: true,
    },
    contact_number: {
        type: Number,
        required: true,
    },
    cuisine: {
        type: Array,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    mealtype_id: {
        type: Number,
        required: true,
    },
});

// create a model using the schema and connent to MongoDB and export the model
module.exports = mongoose.model("Restaurants", RestaurantSchema, "restaurants");
