//First, we pass in a letter 'a' as the argument to the function.
//Then, in the first parameter we target a-zA-z globally so it changes
//throughout the entire argument, regardless of how many letters exist.
//After that, in the second parameter we replace the entire string at the
//CharCode of x (which will represent each individual letter in the string),
//with the CharCode at the index of 0 (which will always be x) plus 1 index
//which will always be the next letter. So in this example it will console
//log "b". Happy coding!

function LetterChanges(str) {

    return str.replace(/[a-zA-Z]/g,function(x) {
    return String.fromCharCode(x.charCodeAt(0)+1); })
    });

  }
console.log(LetterChanges("a"));
