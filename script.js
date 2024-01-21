//your JS code here. If required.
function foucusNext(inp){
	const nextInp = inp.nextElementSibling;
	if(nextInp){
		nextInp.focus();
	}
}
function focusPrevious(input) {
      const previousInput = input.previousElementSibling;
      if (event.key === 'Backspace' && previousInput) {
        previousInput.focus();
      }
    }