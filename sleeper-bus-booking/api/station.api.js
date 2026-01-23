import express from "express";
import { fetchStations } from "../handlers/station.handler.js";

const router = express.Router();

router.get("/", fetchStations);

export default router;
