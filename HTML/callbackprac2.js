function display(sum)
{
console.log(sum);
}




function calculator(a,b,callback)
{
    sum=a+b;
}
callback(sum);

calculator(10,20,display);