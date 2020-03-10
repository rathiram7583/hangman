var word=['P','I','Z','Z','A'];
var input=document.getElementById("letter");
input.addEventListener('change',function(event)
{
    var result;
    
    
    var inputValue=input.value  
   // console.log(inputValue);
     switch(inputValue)
     {
        case'P':
            result="You are correct"
            break;
        case 'I':
            result="You are correct"
            break;
        case 'Z':
            result="You are correct"
            break;
        case 'A':
            result="You are correct"
            break;
        default:
            result="Wrong Answer";
            break;
            
    }
    
    document.getElementById("answer").innerHTML+=result ;


});
