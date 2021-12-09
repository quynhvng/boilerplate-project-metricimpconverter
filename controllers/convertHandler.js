function ConvertHandler() {
  
  this.getNum = function(input) {
    return input.match(/^\d+(\.\d+)?(\/\d+(\.\d+)?)?(?=[A-Za-z])/);
  };
  
  this.getUnit = function(input) {
    return input.match(/(?<=\d)[a-z]+$/i).toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    const units = {
      'gal': 'l',
      'l': 'gal',
      'lbs': 'kg',
      'kg': 'lbs',
      'mi': 'km',
      'km': 'mi'
    }
    if (!Object.keys(units).includes(initUnit.toLowerCase())) {
      console.log('Invalid unit');
      return;
    } else return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const fullUnit = {
      'gal': 'gallon',
      'l': 'liter',
      'lbs': 'pound',
      'kg': 'kilogram',
      'mi': 'mile',
      'km': 'kilometer'
    }
    if (!Object.keys(units).includes(unit.toLowerCase())) {
      console.log('Invalid unit');
      return;
    } else return fullUnit[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let returnNum = initNum;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        returnNum *= galToL;
        break;
      case 'l':
        returnNum /= galToL;
        break;
      case 'lbs':
        returnNum *= lbsToKg;
        break;
      case 'kg':
        returnNum /= lbsToKg;
        break;
      case 'mi':
        returnNum *= miToKm;
        break;
      case 'km':
        returnNum /= miToKm;
        break;
      default:
        console.log('Invalid unit');
        return;
    }
    return {
      returnNum: returnNum,
      returnUnit: this.getReturnUnit(initUnit);
    };
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    initUnit = this.spellOutUnit(initUnit.toLowerCase());
    returnUnit = this.spellOutUnit(returnUnit.toLowerCase());
    initUnit += (initNum == 1) ? '' : 's';
    returnUnit += (returnNum == 1) ? '' : 's';
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
