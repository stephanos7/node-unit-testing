var mocha = require("mocha")
var chai = require("chai");
var expect = chai.expect;

chai.should();

function addition(num1, num2){
    return num1 + num2;
}
function division(num1, num2){
    return num1 / num2;
}
function truthTest(){
  if(Math.random() > 0.5){
    return true;
  }else{
    return false;
  }
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
  describe("division", function(){
    it("should expect to be equal to 2 when divided by 2", function(){
      result = division(num, 2)
      expect(result).to.equal(2);
    })
    it("should expect to return a number", function(){
      result = division(num, 2);
      expect(result).to.be.a("number");
    })
    it("should expect to not return a string", function(){
      result = division(num, 2);
      expect(result).to.not.be.a("string");
    })
  })
  describe("truthTest", function(){
    it("should return a boolean", function(){
      result = truthTest();
      expect(result).to.be.a("boolean");
    })
    it("should not be a string", function(){
      result = truthTest();
      expect(result).to.not.be.a("string");
    })
  })
})