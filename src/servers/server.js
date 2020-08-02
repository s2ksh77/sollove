import dotenv from "dotenv";
import "./db";
const express = require("express");
const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Express  Connected  :: ✅ http://localhost:${process.env.PORT}`);
});

export default app;
