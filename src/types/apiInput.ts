import {Request, Response} from "express-serve-static-core";

export type ApiInput = {
    req: Request,
    res: Response,
}