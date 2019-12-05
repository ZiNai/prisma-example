import * as express from "express";
import * as morgan from "morgan";
import { router } from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(router);

app.get("/articles", (req, res) => {
  res.json({}).status(200);
});

app.listen(3000, () => console.log("[SERVER] is up and running on 3000 ..."));
export { app };
