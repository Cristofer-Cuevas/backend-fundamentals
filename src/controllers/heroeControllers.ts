import pool from "../dbConnection/dbConnection";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const controllers: Record<string, any> = {};

export const deleteHeroe = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        res.json("Id was not specified");
    } else {
        try {
            console.log(id);
            const { rows } = await pool.query("DELETE FROM heroes WHERE id = $1 RETURNING *", [id]);
            console.log(rows);
            if (rows.length > 0) res.json("Hereo has been successfully deleted");
            else res.json("No such heroe with id");
        } catch (err) {
            res.json("Bad Request");
        }
    }
};

export const addHeroe = async (req: Request, res: Response) => {
    const { name, alte } = req.body;

    const { rows } = await pool.query("INSERT INTO heroes VALUES ($1, $2, $3) RETURNING name", [uuidv4(), name, alte]);
    console.log(rows);

    if (rows) {
        res.json(`${name}, added successfully`);
    }
};

export const getHeroe = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { rows } = await pool.query("SELECT * FROM heroes WHERE id = $1", [id]);

    if (!rows) {
        return res.status(404).json({
            message: "Super Hero Not Found",
        });
    } else {
        res.json(rows[0]);
    }
};

export const updateHeroe = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { name, alte } = req.body;

    if (!id) {
        res.json("Id was not specified");
    } else if (!name || !alte) {
        res.json("Data to update is not complete");
    } else {
        const { rows } = await pool.query("UPDATE heroes SET name = $1, alte = $2 WHERE id = $3 RETURNING *", [name, alte, id]);
        res.json(rows);

        console.log(rows);
    }
};

export default controllers;
