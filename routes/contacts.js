const router = require("express").Router();
const { authorize } = require("../middlewares/checkRole");
const { contactsServiceGetAll } = require("../services/contactsService");

router.get("/", authorize, contactsServiceGetAll);

module.exports = router;
