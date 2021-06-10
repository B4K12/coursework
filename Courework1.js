const TODAY=function(day)
{
    switch(day)
{
    case "Monday":
        console.log("Today is a Monday");
        break;
    case "Tuesday":
        console.log("Today is a thuday");
        break;
    case "wednesday":
        console.log("Today is a Wednesday");
        break;
     case "Thursday":
         console.log("Today is a Thursday");
        break;
    case "Friday":
        console.log("Today is a Friday");
        break;
    default:
        console.log("Today is a Holiday");
        break;
}
if(day=="Monday")
{
    console.log("Today is a Monday");
}
else if(day=="Tuesday")
{
    console.log("Today is a thuday");
}
else if(day=="Wednesday")
{
    console.log("Today is a wednesday");
}
else if(day=="Thursday")
{
    console.log("Today is a Thursday");
}
else if(day=="Friday")
{
    console.log("Today is a Friday");
}
else
{
    console.log("Today is a Holiday");
}};
console.log(TODAY("Friday"));