import jwt from "jsonwebtoken";
import UserScheema from "../models/UserScheema";
import { config } from "dotenv";

config({ path: ".env" });
const { ACCESS_TOKEN_SECRED, REFRESH_TOKEN } = process.env;

const generateAccessToken = (user) => {
    return jwt.sign({ user }, ACCESS_TOKEN_SECRED, { expiresIn: "20s" });
};

export const createPerson = async (req, res) => {
    const { fullName: name, mobile: phone } = req.body;
    await UserScheema.create({ name, phone });
    res.status(201).send("User Created")
}

export const login = async (req, res) => {
    const { un, pw } = req.body;
    if (un !== "akashvg" || pw !== "123") res.json({ error: true, msg: "login Failed" });
    const accessToken = generateAccessToken(un);
    const refreshToken = jwt.sign(un, REFRESH_TOKEN);
    const resObj = { error: false, accessToken, refreshToken }
    res.status(200).json(resObj);
}
