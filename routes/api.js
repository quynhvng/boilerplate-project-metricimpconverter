'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  
  app
    .route('/api/convert')
    .post(function (req, res) {
      const inputStr = req.query.input;
      const initNum = convertHandler.getNum(inputStr);
      const initUnit = convertHandler.getUnit(inputStr);
      const returnStr = convertHandler.convert(initNum, initUnit);
      const returnNum = returnStr.returnNum;
      const returnUnit = returnStr.returnUnit;
      const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      const result = {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string
      };
      res.json(result);
    })
};
