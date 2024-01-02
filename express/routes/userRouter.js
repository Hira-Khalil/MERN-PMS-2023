const userController = require("../controllers/userController");
const router = require("express").Router();
const { trainee } = require("../middleware")
const { instructor } = require("../middleware")

router.post("/createUser", userController.createUser);
router.get("/getAllUsers", userController.getAllUsers);
router.delete("/deleteUser", userController.deleteUser);
router.put("/updateUser", userController.updateUser);
router.post("/onBoarding", userController.onBoarding);



module.exports = router;