/**
 * Calulation of the priority of a patient
 * @param age
 * @param patient
 * @return priority
 **/
const calculus = require('./calculus');

exports.priorityCalculation = (patient) => {
    try {
        let priority = 0;
        let cont = 3;
        let agesRanges = [{from:1, to:5}, {from:6,to:12}, {from:13, to:15},{from:16, to:40}, {from:60, to:100}];
        let idxRange = agesRanges.findIndex(range => patient.age >=range.from && patient.age <= range.to);

        if(idxRange<cont && patient.weight_height>=0){
            priority = calculus.getResult(patient.weight_height,1, cont-idxRange);
        }else if(idxRange===3){
            priority = patient.smoker ? calculus.getResult(patient.year_smoker, 4, 2) : 2;
        }else if (idxRange===4 && patient.on_diet){
            priority = calculus.getResult(patient.age, 20, 4);
        }else {
            priority = calculus.getResult(patient.age, 30, 3);
        }
        return priority;
    }
    catch(err) {throw err}
};