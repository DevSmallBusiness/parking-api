const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const router = require("./routes/routes");

app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

app.listen(app.get("port"), () => {
	console.log(`Server listening on port ${app.get("port")}`);
});
