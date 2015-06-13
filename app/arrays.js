exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var location;
    var indexChecked;

    for (indexChecked = 0; indexChecked < arr.length; indexChecked++) {
      if (item === arr[indexChecked]) {
        location = indexChecked;
         break;
      }
    }
    if (typeof location === 'undefined') {
      location = -1;
    }
    return location;
  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var newArray;

    newArray = arr.filter(function(el) {
    return (el !== item);
  });

    return newArray;
  },

  removeWithoutCopy : function(arr, item) {


    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
