const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");
const cookieParser = require("cookie-parser");
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connect to mongoDB");
  } catch (error) {
    throw error;
  }
};

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen(process.env.PORT, () => {
  connect();
  console.log(`Connected to ${process.env.PORT}`);
});
