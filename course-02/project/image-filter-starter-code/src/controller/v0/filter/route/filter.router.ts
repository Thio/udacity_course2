import { Router, Request, Response } from "express";
import { filterImageFromURL, deleteLocalFiles } from "../../../../util/util";

const router: Router = Router();

router.get("/filteredimage", async (req: Request, res: Response) => {
  const imageUrl: string = req.query.image_url;
  if (imageUrl) {
    filterImageFromURL(imageUrl).then(response => {
      res.sendFile(response);
      res.on("finish", function() {
        deleteLocalFiles([response]);
      });
    });
  } else {
    res.status(404).send("Please provide an image url as a query parameter");
  }
});

// Root URI call
router.get("/", async (req: Request, res: Response) => {
  res.send("Try /filteredimage?image_url={url}");
});

export const FilterRouter: Router = router;
