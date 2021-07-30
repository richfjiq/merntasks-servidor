const express = require("express");
const { check } = require("express-validator");
const {
  crearProyecto,
  obtenerProyectos,
  actualizarProyecto,
  eliminarProyecto,
} = require("../controllers/proyectoController");

const auth = require("../middleware/auth");

const router = express.Router();

router.post(
  "/",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  crearProyecto
);

router.get("/", auth, obtenerProyectos);

router.put(
  "/:id",
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  auth,
  actualizarProyecto
);

router.delete('/:id', auth, eliminarProyecto)

module.exports = router;
