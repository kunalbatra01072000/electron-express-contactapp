(function () {
  'use strict';
  const express = require("express");
  const connectDB = require("./db");
  const app = express();
  const cors = require('cors');

  connectDB();
  app.use(express.json({ extended: false }));
  app.use(cors());

  // app.get("/", (req, res) =>
  //   res.json({ msg: "Welcome to contact keeper api..." })
  // );

  app.use("/api/users", require("./routes/users"));
  app.use("/api/auth", require("./routes/auth"));
  app.use("/api/contacts", require("./routes/contacts"));

  const PORT = process.env.PORT || 5000;  

 
  app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

  module.exports = app;
})();
