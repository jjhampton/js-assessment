exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  // the item parameter is the item that is being checked in the array
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
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    var item = arr.length - 1;
    arr.pop(item);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    var item = arr[0];
    arr.shift(item);
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert : function(arr, item, index) {
    arr.forEach(function(el, indexOfEl, array) {
      if (index === indexOfEl) {
        array.splice(indexOfEl, 0, item);
      }
    });
    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    arr.forEach(function(el, index, array) {
      if (el === item) {
        counter++;
      }
    });
    return counter;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
