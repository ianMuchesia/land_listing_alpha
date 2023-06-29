const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};


const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);



const attachCookiesToResponse = ({ res, user }) => {
    const token = createJWT({ payload: user });
  
    const twoDays = 1000 * 60 * 60 * 24*2;
  
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + twoDays),
      secure:  true,//process.env.NODE_ENV !== 'production',
      signed: true,
      sameSite:"none", //because of different hosting environment
    });
  };


  module.exports = {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
  };
  
  