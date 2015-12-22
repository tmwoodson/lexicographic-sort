describe('Lexicographic Sort', function() {

  //declare stuff here that needs to be run once
  var result = true;
  function returnTrue () {
    return result;
  }

  beforeEach(function() {
    //add stuff here that needs to be run before every test

  });

  
  ///////////////////////////////////////
  // Test cases
  ///////////////////////////////////////

  it('should sort an array in normal alphabetical order', function(){
    var result = lexSort(['acb', 'abc', 'bca'], 'abc');
    expect(result).to.be.eql(['abc', 'acb', 'bca']);
  });

  it('should sort an array in an arbitrary lexicographic order', function(){
    var result = lexSort(['acb', 'abc', 'bca'], 'cba');
    expect(result).to.be.eql(['bca', 'acb', 'abc']);
  });

  it('should sort an array made up of only one letter', function(){
    var result = lexSort(['aaa', 'aa', ''], 'a');
    expect(result).to.be.eql(['', 'aa', 'aaa']);
  });

});