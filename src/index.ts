import express from "express";
import cors from "cors";
import heroeRoutes from "./routes/heroeRoutes";
import villianRoutes from "./routes/villianRoutes";
const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(heroeRoutes);
app.use(villianRoutes);

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
