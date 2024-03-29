const { apiCall } = require("../api");
const graphql = require("../graphql");
const appsync = require("../appsync");
const storage = require("../storage");

export const servicePage = () => {
  if (document.getElementById("service")) {
    apiCall();
    graphql.query();
    graphql.queryWithParams({id: "1"});
    graphql.mutation();
    graphql.subscribe();
    appsync.create();
    appsync.query();
    appsync.subscribe();
    storage.put();
    storage.get();
    //storage.remove().public();
    //storage.remove().protected();
    //storage.remove().private();
    storage.list();
  }
};
