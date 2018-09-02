var myObject = [{input:"What is your name?", output:["I am John", "I am John Mnlik", "I am John Mnlik Jacob"]},
{input:"where are you from?", output:["I am from Ethiopia.","I am from Ethiopia, Addis Ababa.", "I am from the capital city of Ethiopia, Addis Ababa, Lideta."]},
{input:"tell me about HYF", output: ["HYF is the best organization in Canada (the world).", "The Staff members are well organized, hard worker, cooperative and Intelligent.", "They are doing their best to Settle immigrants."]}];
console.log(myObject)
function replay(){
  var question = document.getElementById("input").value;
  var randomeNumber = Math.floor((Math.random() * 3) + 0);
  var filterValue=null;
  var filteredArray=myObject.filter(function(myObject){
    if(myObject.input==question){
     return myObject.input
     }

     else return false;
   })
   console.log(filteredArray)
   if(filteredArray.length > 0)
   {
     if (document.getElementById('shortest').checked==true)
     {
       var short = filteredArray[0].output.sort(function(a,b) {return a.length-b.length})[0];
       document.getElementById("output").value=short;
     }
     else if(document.getElementById('longest').checked==true){
       var long = filteredArray[0].output.sort(function(a,b) {return b.length-a.length})[0];
       document.getElementById("output").value=long;
     }
     else {
       var random= filteredArray[0].output[randomeNumber];
       document.getElementById("output").value=random;

     }
   }
   console.log(filteredArray)


}
document.getElementById('submit').onclick=function(){replay()};
