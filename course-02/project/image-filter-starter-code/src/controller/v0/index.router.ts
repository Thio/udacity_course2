import { Router, Request, Response } from "express";
import { FilterRouter } from "./filter/route/filter.router";

const router: Router = Router();

// only / because the sample request is required to be on /
router.use("/", FilterRouter);

export const IndexRouter: Router = router;
