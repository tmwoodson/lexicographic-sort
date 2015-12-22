# Lexicographic Ordering

An implementation of a lexicographic sorting function, along with basic (passing) tests.

## Usage
- npm install
- Then open SpecRunner.html in a browser to see the tests pass.

## Runtime Analysis
- Generating the comparator function itself is a quadratic (~O(n^2)) operation, where n is the number of letters in the alphabet.
- Comparing two letters is a constant-time lookup, so comparing two strings is O(min(m,n)), where m and n are the lengths of those strings.
