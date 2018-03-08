
// Object: Replicate https://rescale.github.io/interviews/
// - Only parse numbers
// - Space after 4th Number
// - Maximum input 16
// - Cursors goes back to after 4th number

(function(){
  // Get the input 
  let inputValue = document.querySelector('#input-value');

  function handleInput(e) {
    e.preventDefault();
    
    let input = e.target.value;
    let parsedInput = /(\d)/g;
    let replacer = "$1 ";
    let output = input.match(parsedInput, replacer) || [];
    let result = [];
    if (output.length > 0) {
      output.forEach((val, idx) => {
        result.push(val);
        if((idx+1)%4 === 0){
          result.push(" ");
        } 
      });
      if (result[result.length-1] === " ") {
        result.length = result.length-1;
      }
      e.target.value = result.slice(0,19).join("");
    }
  }

  // Listening for that element 
  inputValue.addEventListener("keyup", handleInput);

  })();
