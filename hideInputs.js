<script>
    function refreshInputs(index) {
        
    document.getElementById("text1").style.visibility = 'hidden';
    document.getElementById("text2").style.visibility = 'hidden';
    document.getElementById("text3").style.visibility = 'hidden';

    if(index == 0)
	    document.getElementById("text1").style.visibility = 'visible';
        if(index == 1)
        	document.getElementById("text2").style.visibility = 'visible';
        if(index == 2)
            document.getElementById("text3").style.visibility = 'visible';
     }
</script>

<select id="selectOption" onChange="refreshInputs(this.selectedIndex)">
<option 
                                                                value="1">Option 
                                                                1</option>
                                                                <option 
                                                                value="2">Option 
                                                                2</option>
                                                                <option 
                                                                value="3">Option 
                                                                3</option>
                                                                </select>
                                                                <br>
                                                                <input 
                                                                type="text" 
                                                                id="text1" 
                                                                value="First 
                                                                text"><br>
                                                                <input 
                                                                type="text" 
                                                                id="text2" 
                                                                value="Second 
                                                                text"><br>
                                                                <input 
                                                                type="text" 
                                                                id="text3" 
                                                                value="Third 
                                                                text"><br>​
