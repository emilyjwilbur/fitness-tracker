const express = require("express");
// const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");


const PORT = process.env.PORT || 3005;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fit", { 
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require("./routes/api-routes"));



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT} !`);
});

