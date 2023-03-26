"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVillian = exports.getVillian = exports.addVillian = exports.deleteVillian = void 0;
const dbConnection_1 = __importDefault(require("../dbConnection/dbConnection"));
const uuid_1 = require("uuid");
const controllers = {};
const deleteVillian = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.json("Id was not specified");
    }
    else {
        try {
            console.log(id);
            const { rows } = yield dbConnection_1.default.query("DELETE FROM villians WHERE id = $1 RETURNING *", [id]);
            console.log(rows);
            if (rows.length > 0)
                res.json("Hereo has been successfully deleted");
            else
                res.json("No such heroe with id");
        }
        catch (err) {
            res.json("Bad Request");
        }
    }
});
exports.deleteVillian = deleteVillian;
const addVillian = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, alte } = req.body;
    const { rows } = yield dbConnection_1.default.query("INSERT INTO villians VALUES ($1, $2, $3) RETURNING name", [(0, uuid_1.v4)(), name, alte]);
    console.log(rows);
    if (rows) {
        res.json(`${name}, added successfully`);
    }
});
exports.addVillian = addVillian;
const getVillian = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { rows } = yield dbConnection_1.default.query("SELECT * FROM villians WHERE id = $1", [id]);
    if (!rows) {
        return res.status(404).json({
            message: "Super Hero Not Found",
        });
    }
    else {
        res.json(rows[0]);
    }
});
exports.getVillian = getVillian;
const updateVillian = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, alte } = req.body;
    if (!id) {
        res.json("Id was not specified");
    }
    else if (!name || !alte) {
        res.json("Data to update is not complete");
    }
    else {
        const { rows } = yield dbConnection_1.default.query("UPDATE villians SET name = $1, alte = $2 WHERE id = $3 RETURNING *", [name, alte, id]);
        res.json(rows);
        console.log(rows);
    }
});
exports.updateVillian = updateVillian;
exports.default = controllers;
