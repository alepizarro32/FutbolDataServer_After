const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const https = require("https");


const getMatchs = async function (id){
    let data
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "X-Auth-Token": "d19215cf941e46cbb3cc83fd68f58ec3"
       }
    let url = "https://api.football-data.org/v2/competitions/CLI/matches";
       await fetch(url, { 
         method: "GET",
         headers: headersList
       }).then(res => res.json()).then(results => data= results.matches)
       return data;
}

const dataComp = async function(id){
    let data;
    let comp;
    data = await getMatchs(id);
    comp ={
        }
    return comp
    }


const matchHelper = {
    callApi: async function(id){
        let data;
        data = await getMatchs(id);
        //console.log(data)
        return data
    }
};

module.exports = matchHelper