
import { Router } from "express";
import { createPerson, login } from "../controller/controller";

const router = Router();

router.post("/create", (req, res) => {
    createPerson(req, res);
});

router.post("/login", (req, res) => {
    login(req, res);
});

export default router;