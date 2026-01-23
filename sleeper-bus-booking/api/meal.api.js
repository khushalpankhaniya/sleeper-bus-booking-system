import express from "express";
import { fetchMeals } from "../handlers/meal.handler.js";

const router = express.Router();

router.get("/", fetchMeals);

export default router;
