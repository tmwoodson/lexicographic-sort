
// Return a custom comparator function to be passed into Array.prototype.sort
var makeComparator = function(ordering) {

  // For each character specified in the ordering, build a map of characters that are greater than it.
  // The result, compMap, is a map of maps.
  var compMap = {};
  compMap[''] = {}; // empty string is less than any other character

  _.each(_.range(ordering.length), function(index) {
    var nextChar = ordering.charAt(index);

    // Each key already in the map is less than the current character
    _.each(compMap, function(map, key) {
      map[nextChar] = true;
    });
    compMap[nextChar] = {};
  });
 
  // return comparator function
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
 
    // If they don't, use the comparator map.
    return compMap[char1].hasOwnProperty(char2) ? -1 : 1;
  };
};


var lexSort = function(array, ordering) {
  return array.sort(makeComparator(ordering));
};