function checkForUnmatched(string, symbol1, symbol2) {
    
//    console.log("Checking for Unmatched "+symbol1+symbol2);
    
    var bracketsStack = [];
    var error = '';
    
    let characterArray = string.split('');
    
    for(let i = 0 ; i < characterArray.length ; i++) {
        
        if(characterArray[i] == symbol1) {
            bracketsStack.push(characterArray[i]);
        } else if(characterArray[i] == symbol2) {
            
//If the stack is empty, there is no open bracket to match a closed bracket - push an error:
            if(bracketsStack.length == 0) {                
                return symbol2;
            } else {
                bracketsStack.pop(); 
            }
                
        }
    }
    
//If a bracket was found that never got closed, the stack is non-empty at the end of the line - push an error:
    if(bracketsStack.length != 0) {
        
        return symbol1;
        
    }
    
    return false;
}
