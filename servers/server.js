const express = require("express");
const app = express();

const PORT = "3001";

// app.get("/data", (req, res) => {
//   const data = {
//     lastname: "dl",
//     firstname: "wlrma",
//   };
//   res.json(data);
// });

app.listen(PORT, () => {
  console.log(`Listeng on: http://localhost:${PORT}`);
});

export default app;
