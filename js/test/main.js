var expect = chai.expect;

describe("Main", function() {
  describe("constructor", function() {
    it("should have a data", function() {

      var main = new Main("data");
      
      expect(main.data).to.equal("data");
    });
  });
});