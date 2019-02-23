require('@google-cloud/debug-agent').start();
const { Client } = require('pg');
const priority= require('./calculation/calculationPriority');
const risk = require('./calculation/calculationRiks');

//Connect to the databae
const connectionName = process.env.INSTANCE_CONNECTION_NAME || INSTANCE_CONNECTION_NAME;
const dbUser = process.env.SQL_USER || SQL_USER;
const dbPassword = process.env.SQL_PASSWORD ||SQL_PASSWORD ;
const dbName = process.env.SQL_NAME || SQL_NAME;
const dbhost = '35.224.35.221';

let  connectionData = {
    connectionName: connectionName,
    user: dbUser,
    database: dbName,
    password: dbPassword,
    host: dbhost
};
const client = new Client(connectionData);
client.connect();


//response
let response = {
    status: null,
    message: null,
    data: r.rows[0],
    appVersion: '1.0',
    hostname: dbhost,
    instanceId:null,
    codeVersion:null,
    requestId:null
};

///Calculate priority, risk and Save Patient into the database
exports.calculationPriorityRisk = (req, res) => {

    let patient =req.body;

    let msgBadRequet = validation.errorValidations(patient);
    if(msgBadRequet){
        response.message = msgBadRequet;
        response.data = e;
        res.status(400).send(response);
    }

    patient.priority = priority.priorityCalculation(patient);
    patient.risk = risk.riskCalculation(patient.age, patient.priority);

    let textQuery ='INSERT INTO hsp_patients (medical_history,' +
        '  name,' +
        '  age,' +
        '  weight_height,' +
        '  smoker,' +
        '  year_smoker,' +
        '  on_diet,' +
        '  arrival_dt,' +
        '  priority,' +
        '  risk,'+
        '  creation_user' +
        ') VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *';
    let values = [patient.name, patient.age, patient.weight_height, patient.smoker,patient.year_smoker,
    patient.on_diet, new Date(), patient.priority, patient.risk];

    client.query(textQuery, values)
        .then(r => {
            response.message = messages.patients.success;
            response.data = r.rows[0];
            res.status(200).send(response);
        })
        .catch(e => {
            response.message = messages.patients.error;
            response.data = e;
            res.status(500).send(response);
        })
};