var makeComparator = function(ordering) {

  // For each character specified in the ordering, build a map of characters that are greater than it.
  // The result, compMap, is a map of maps.
  var compMap = {};
  _.each(_.range(ordering.length), function(outerIndex) {
    var lesserCharacter = ordering.charAt(outerIndex);
    compMap[lesserCharacter] = {};
    _.each(_.range(outerIndex + 1, ordering.length), function(innerIndex) {
      var greaterCharacter = ordering.charAt(innerIndex);
      compMap[lesserCharacter][greaterCharacter] = true;
    });
  });

  return function(str1, str2) {
    var highIndex = Math.min(str1.length, str2.length);
    var index = 0;
    var char1 = str1.charAt(index);
    var char2 = str2.charAt(index);

    // While characters match, there's no use in comparing them.
    // We stop when we reach the end of the shorter string, or when the
    // corresponding characters don't match.
    while (index <= highIndex && char1 === char2) {
      index++;
      char1 = str1.charAt(index);
      char2 = str2.charAt(index);
    }
 
    // If the strings match completely
    if (char1 === char2) {
      return 0;
    }
 
    // If they don't, use the comparator map. Empty strings are less than any other character.
    if ( (compMap[char1].hasOwnProperty(char2) || char1 === '') && char2 !== '') {
      return -1;
    }
    return 1;
  }
};


var lexSort = function(array, ordering) {
  return array.sort(makeComparator(ordering));
};