'use strict';
/* exported numVowels */
function numVowels(string) {
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelCount++;
    }
  }
  return vowelCount;
}
