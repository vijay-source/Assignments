function ifelse()
{
    var a=200;
    var b=(Number(prompt("Enter the value")));
   
    if(a>b)
    {
       document.write("The value of a is greater than b");  
    }
    else if (a>1000)
    {
        alert("The vale of a is greater than 1000"+a);
    }

    else 
    {
        document.writeln("Exit the loop");
    }
}