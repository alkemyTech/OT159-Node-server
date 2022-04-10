const db = require("../database/models");

const isOwnership = async (req, res, next) => {
  const { id } = req.params;
  const user = await db.User.findOne({ where: { id: id } });
  const token = req.headers["authorization"];
  const decoded = await jwt.verify(token, process.env.SECRET);
  const userTokenId = await db.User.findOne({ where: { id: decoded.id } });
  if (id === userTokenId || user.roleId === "1" ) {
    next();
  } else {
    res.status(403).json({ msg: "Access denied" });
  }
};

module.exports = isOwnership;
