/**
 * Calculus..
 * @param value
 * @param dividedBy
 * @param thenSum
 * @return number
 **/
exports.getResult = (value, dividedBy, thenSum) => {
   try {
       let result = value / dividedBy;
       return result += thenSum;
   }catch(err) {throw err}
};