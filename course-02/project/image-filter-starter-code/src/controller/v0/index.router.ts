import { Router } from "express";
import { FilteredImageRouter } from "./filteredimage/route/filteredimage.router";

const router: Router = Router();

// only / because the sample request is required to be on /
router.use("/", FilteredImageRouter);

export const IndexRouter: Router = router;
