import { Router } from "express";
import { deleteHeroe, addHeroe, getHeroe, updateHeroe } from "../controllers/heroeControllers";

const heroeRoutes = Router();

heroeRoutes.delete("/deleteHeroe/:id", deleteHeroe);
heroeRoutes.get("/getHeroe/:id", getHeroe);
heroeRoutes.post("/addHeroe", addHeroe);
heroeRoutes.put("/updateHeroe/:id", updateHeroe);

export default heroeRoutes;
