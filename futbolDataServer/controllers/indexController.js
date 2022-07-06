const { render } = require('ejs');
const fs = require('fs');
const path = require('path');
const dataUpdater = require ('../helpers/dataUpdater')
const matchesUpdater = require ('../helpers/matchesUpdater')
const  prompt = require('prompt');


/*
const productsFilePath = path.join(__dirname, '../data/products-GreenHome.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
function getAllProducts(){
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));}
    
const ultimoID = {new: function(){return products[products.length-1].id + 1}}
*/

//415418  415425 415422 415416
let idMatch = 415418;

const indexController = {
      index: async function (req,res,next){
        const data = await dataUpdater.callApi(idMatch);
        res.render('index')
      },
      selectMatch: async function (req,res,next){
        const data = await matchesUpdater.callApi(idMatch);
        res.render('selectMatch',{matches:data})
      },
      writeData: async function (req,res,next){
        console.log(req.body.match)
        
        await dataUpdater.callApi(req.body.match);
        res.redirect('/')
      }

    }

module.exports = indexController;