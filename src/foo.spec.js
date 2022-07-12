import foo from "./foo";


describe("Foo", function(){

	it("should be true", function(){
		expect(foo()).to.be.equal("test");
	});

})