/**
 * Calulation of the risk of a patient
 * @param age
 * @param priority
 * @return number
 **/
const calculus = require('./calculus');

exports.riskCalculation = (age, priority) => {
    try {
    const factor = age * priority;
    return (age >= 41 && age <= 100)?calculus.getResult(factor, 100, 5.3): calculus.getResult(factor, 100, 0);
    }catch(err) {throw err}
};