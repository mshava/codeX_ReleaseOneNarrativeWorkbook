
/*
var fs = require('fs');

module.exports = function(filePath){

  this.productNames = function(callback) {
    var filesInFolder = fs.readFileSync(filePath, "utf8");
      var rows = filesInFolder.split('\n');
       console.log("===>" + rows.length);

      var listOfProducts = [];
      var productMap = {};

    rows.forEach(function(row) {
     var productName = row.split(',')[1];

      if(productMap[productName]=== undefined){
        listOfProducts.push(productName);
        productMap[productName]=0;
      } 
    }
      callback(null, listOfProducts);
  }
  };
  */

var fs = require('fs');

module.exports = function(filePath){

  this.productNames = function(callback) {
    var filesInFolder = fs.readFileSync(filePath, "utf8");
      var rows = filesInFolder.split('\n');
       console.log("===>" + rows.length);

      var listOfProducts = [];
      var productMap = {};

    rows.forEach(function(row) {
     var productName = row.split(',')[1];

      if(productMap[productName]=== undefined){
        listOfProducts.push(productName);
        productMap[productName]=0;
      } 
    });
      callback(null, listOfProducts);
  }

  this.productsSold = function(callback){
    var filesInFolder = fs.readFileSync(filePath, "utf8");
      var rowsInFile = filesInFolder.split('\n');
         console.log(rowsInFile.length);

      /*var products = require("../products");
        var products = new Products("./files/products.csv");
         products.productsSold(function(err, products)
*/       
         var productSold = [];
         var productMap = {};

    rowsInFile.forEach(function(row){
     var fields = row.split(',');

     //for(var i = 0; i < products.length; i++){
           var currentProduct = fields[1];
           var productSld = fields[2];

           console.log("fields :" + JSON.stringify(fields));

        if(productMap[currentProduct] === undefined){
          productMap[currentProduct]=0;
        }
         productMap[currentProduct]= productMap[currentProduct] + Number(productSld);
        
    });

            console.log("--->" + JSON.stringify(productMap));
            callback(null, productMap);
  }
}





























