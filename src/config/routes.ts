import { Router } from "express";
import { DespesaController } from "../controllers/despesa.controller";

const router: Router = Router();

router.post("/cadastrar", new DespesaController().cadastrar);
router.get("/listar", new DespesaController().listar);
router.get("/visualizar", new DespesaController().visualizar)
export { router };
