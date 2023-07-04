const checkPermission = require("./checkPermission");
const { createJWT, isTokenValid, attachCookiesToResponse } = require("./jwt");
const createToken = require("./createToken");
const communication = require("./communication")

module.exports = {
  createJWT,
  createToken,
  checkPermission,
  isTokenValid,
  attachCookiesToResponse,
  communication
};
