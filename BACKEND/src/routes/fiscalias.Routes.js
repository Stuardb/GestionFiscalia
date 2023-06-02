import { Router, response } from "express";
import {
  getFiscalias,
  createFiscalia,
  getFiscaliaById,
  updateFiscalia,
  deleteFiscalia,
} from "../controllers/fiscalias.Controller";

//const router = Router();

export const router = Router();

router.get("/fiscalias", getFiscalias);
router.post("/fiscalias", createFiscalia);
router.get("/fiscalias/:id", getFiscaliaById);
router.put("/fiscalias/:id", updateFiscalia);
router.delete("/fiscalias/:id", deleteFiscalia);

export default router;