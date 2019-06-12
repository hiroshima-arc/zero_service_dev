import Amplify, { API } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

let apiName = "api94d27614";
let path = "/items";
let myInit = {
  // OPTIONAL
  headers: {}, // OPTIONAL
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  queryStringParameters: {
    // OPTIONAL
    name: "param"
  }
};
API.get(apiName, path, myInit)
  .then(response => {
    console.log(response);
    // Add your code here
  })
  .catch(error => {
    console.log(error.response);
  });
