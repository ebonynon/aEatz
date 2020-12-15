const process = require("process");

const URL = process.env.BASEURL;
var bURL = "https://stormy-depths-99062.herokuapp.com/v1";
//bURL: 'http://localhost:3080/v1'

if (URL) {
  bURL = URL;
}

export const environment = {
  baseURL: bURL,
};
