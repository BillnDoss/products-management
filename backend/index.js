const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const cors = require("cors");

mongoose
    .connect("mongodb://localhost:27017/jwt_with_products")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

const corsHandler = cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: true,
});

app.use(corsHandler);

app.use("/users", userRoutes);
app.use("/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
