const {
  createRoom,
  updateRoom,
  deleteRoom,
  getSingleRoom,
  getAllRoom,
} = require("../controllers/roomController");
const createError = require("../utils/error");
const { verifyAdmin } = require("../utils/verifyToken");
const router = require("express").Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updateRoom);
// DELETE
router.delete("/:id", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getSingleRoom);
// GET ALL
router.get("/", getAllRoom);

module.exports = router;
