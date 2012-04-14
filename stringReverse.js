function revStringFunc(string) {
    retString = "";
    charToDelete = Math.floor(string.length/2);
        
	for (var i=1;i<=string.length;i++) {
		if(string.length-i != charToDelete)
        	retString += string[string.length-i];
    }
    
    return retString;
    }

alert(​revStringFunc("123")​​);​
