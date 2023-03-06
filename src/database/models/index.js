const { User, UserSchema } = require("./user_models");
const { Product, ProductSchema } = require("./product_models");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
