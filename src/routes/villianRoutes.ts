import { Router } from "express";
import { deleteVillian, addVillian, getVillian, updateVillian } from "../controllers/villianControllers";

const villianRoutes = Router();

villianRoutes.delete("/deleteVillian/:id", deleteVillian);
villianRoutes.get("/getVillian/:id", getVillian);
villianRoutes.post("/addVillian", addVillian);
villianRoutes.put("/updateVillian/:id", updateVillian);

export default villianRoutes;
