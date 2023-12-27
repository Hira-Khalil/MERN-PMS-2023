const userController = require("../controllers/userController");
const router = require("express").Router();
const { trainee } = require("../middleware")
const { instructor } = require("../middleware")

router.post("/createUser", instructor, userController.createUser);
router.get("/getAllUsers", trainee, userController.getAllUsers);
router.delete("/deleteUser", userController.deleteUser);
router.put("/updateUser", userController.updateUser);



module.exports = router;