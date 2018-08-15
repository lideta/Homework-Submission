var myObject = {input:"Selam Belete",
  output:"Hi how are you?, I'm fine, Great"}
console.log(myObject)

function replay(){
  var question = document.getElementById("input").value;
  if(question==myObject.input)
  {
    document.getElementById("output").value=myObject.output;
  }
  else{
  document.getElementById("output").value = "I don't understand that command.please enter another."
}

}
