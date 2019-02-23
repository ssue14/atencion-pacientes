/**
 * Validation of the patient data
 * @param patient
 * @return message
 **/
const messages = {
    patients: {
        error :   'El Paciente no se ha registrado correctamente',
        requiredData : 'Debe completar los datos requeridos [historia del paciente, nombre, edad]',
        invalidField: 'Campo invalido'
    }
};
exports.errorValidations = (patient) => {
    try {
        let message;
        if(!patient || !patient.medical_history || !patient.name || !patient.age) {
            message = messages.patients.requiredData;
        } else if (patient.smoker && !patient.year_smoker || patient.year_smoker <=0) {
            message = messages.patients.invalidField;
        }
        return message;
    }
    catch(err) {throw err}
};
