var mocha = require("mocha")
var chai = require("chai");
var require = chai.require;

chai.should();

function addition(num1, num2){
    return num1 + num2;
}
function division(num1, num2){
    return num1 / num2;
}

describe("mathematical formulas", function(){

  var num = 4; 

  describe("addition", function(){
    it("should equal 10 when passing 6", function(){
      addition(num, 6).should.equal(10);
    })
    it("should not equal 14 when passing 9", function(){
      addition(num, 9).should.not.equal(9);
    })
  })
})