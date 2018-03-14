var errorText;
var lineNumber = 0;
var arrayOfLines = [];
var arrayOfErrors = [];
var bracketsStack=[];
var arrayOfLines = [];
var dud = "Try putting in some code...";


function checkForUnmatchedBrackets() {
    
    arrayOfErrors = [];
    
    console.log('Working');
    document.getElementById("errorP").innerHTML = 'Thinking';
    
    if(document.getElementById("textbox").innerHTML != ''){
        
        arrayOfLines = document.getElementById("textbox").value.match(/[^\r\n]+/g);
        
        if(arrayOfLines){
            for(lineNumber = 0; lineNumber < arrayOfLines.length ; lineNumber++) {
            let currentLine = arrayOfLines[lineNumber];

            checkForUnmatched(currentLine, '(', ')', lineNumber);
            checkForUnmatched(currentLine, '[', ']', lineNumber);
            checkForUnmatched(currentLine, '{', '}', lineNumber);
            }
            
            if(arrayOfErrors.length != 0) {
                errorText = "<p>"+arrayOfErrors.join(','+"</p><p>"+"</p>");
            } else {
                errorText = "No Errors Found";
            }
            
        } else {
            errorText = dud;
        }
        
    }
    
    
    
    document.getElementById("errorP").innerHTML = errorText;
}

function checkForUnmatched(string, symbol1, symbol2, lineNumber) {
    
    bracketsStack = [];
    
    let characterArray = string.split('');
    
    for(let i = 0 ; i < characterArray.length ; i++) {
        
        if(characterArray[i] == symbol1) {
            bracketsStack.push(characterArray[i]);
        } else if(characterArray[i] == symbol2) {
            
//If the stack is empty, there is no open bracket to match a closed bracket - push an error:
            if(bracketsStack.length == 0) {                
                arrayOfErrors.push('Unmatched "'+symbol2+'" on line ' + (lineNumber+1));
                break; 
            } else {
                bracketsStack.pop(); 
            }
                
        }
    }
    
//If a bracket was found that never got closed, the stack is non-empty at the end of the line - push an error:
    if(bracketsStack.length != 0) {
        
        arrayOfErrors.push('Unmatched "'+symbol1+'" on line ' + (lineNumber+1));
        
    }
        
    bracketsStack = [];
    
}