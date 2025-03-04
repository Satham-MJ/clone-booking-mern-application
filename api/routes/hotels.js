const {
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleHotel,
  getAllHotel,
  countByCity,
  countByType,
} = require("../controllers/hotelController");
const createError = require("../utils/error");
const { verifyAdmin } = require("../utils/verifyToken");
const router = require("express").Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
// UPDATE
router.put("/:id", verifyAdmin, updateHotel);
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

router.get("/:id", getSingleHotel);
// GET ALL
router.get("/", getAllHotel);

module.exports = router;
