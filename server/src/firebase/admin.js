const firebase = require("firebase-admin");

const credentials = require("./credentials.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://whiteboarddemo-a093d-default-rtdb.europe-west1.firebasedatabase.app",
});

module.exports = firebase;
