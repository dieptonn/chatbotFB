require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const route = require("./routes");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 8000;
const upload = multer();

app.use(
  cors({
    origin: "http://localhost:3000", // Thêm nguồn gốc của frontend ở đây
    methods: "POST", // Chỉ cho phép phương thức POST
  })
);
app.use(upload.none());


app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
