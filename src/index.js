require("./connection");

//Operations
const {
  saveCallback,
  savePromise,
  saveAsyncAwait,
} = require("./operations/save");

const { find, findOne } = require("./operations/find");

const { updateOne } = require("./operations/update");

//Models
const Product = require("./models/Product");
const User = require("./models/User");

/*saveCallback(Product, {
  name: "Smartphone",
  description: "Smartphone Samsung Galaxy S30",
  price: 340,
  categories: ["Tech", "Smartphones"],
});

savePromise(Product, {
  name: "Laptop",
  description: "Laptop lenovo",
  price: 500,
  categories: ["Tech", "Laptops"],
});

saveAsyncAwait(User, {
  username: "pepitoLopez",
  password: "1234",
}).catch((err) => {
  console.log("--- Mongoose Error: ", err.message);
});

saveAsyncAwait(Product, {
  name: "Lavadora",
  price: 500,
  categories: ["Hogar", "Cocina"],
});

find(Product, { categories: ["Hogar", "Cocina"] });

updateOne(
  User,
  { password: "contraseñaMaxima" },
  { password: "myPass" }
);*/

User.deleteMany({ password: "passwordSecure" }).then((result) => {
  console.log("--- Result: ", result);
});
