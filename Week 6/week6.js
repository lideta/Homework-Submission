Q1
function vehicle (vcolor,vcode,vyear){
if (vcode==1){
  if(vyear>0){
    console.log(vcolor,"used","car")
  }
  else if(vyear==0){
    console.log(vcolor,"new","car")
  }
}
  else if(vcode==2){
  if(vyear>0){
    console.log(vcolor,"used","motorbike")
  }
  else if(vyear==0){
    console.log(vcolor,"new","motorbike")
  }
 }
}
 vehicle ("red",1,1);

      Q2
function vehicle (vcolor,vcode,vyear){
  if (vcode==1){
    if(vyear>0){
    console.log(vcolor,"used","car")
  }
  else if(vyear==0){
    console.log(vcolor,"new","car")
  }
  else{
    console.log("negative number")
  }
}
else if(vcode==2){
  if(vyear>0){
    console.log(vcolor,"used","motorbike")
  }
  else if(vyear==0){
    console.log(vcolor,"new","motorbike")
  }
}
  else if(vcode==3){
    if(vyear>0){
      console.log(vcolor,"used","caravan")
    }
    else if(vyear==0){
      console.log(vcolor,"new","caravan")
    }
  }
 else if(vcode==4){
   if(vyear>0){
     console.log(vcolor,"used","bike")
   }
   else if(vyear==0){
     console.log(vcolor,"new","bike")
   }
 }
 else if(vcode==5){
   if(vyear>0){
     console.log(vcolor,"used","ship")
   }
   else if(vyear==0){
     console.log(vcolor,"new","ship")
   }
 }
}
 vehicle ("silver",5,0);
 
Q2 by switch expression
 function veichael(color,code,year){
   switch (code){
     case 1:{
       switch (year){
         case 0:{
           console.log(color,"New")
           break;
         }
         case 1:{
           console.log(color,"used")
           break;
         }
       }
       console.log("car")
       break;
     }
     case 2:{
       console.log("motor Bike")
       break;
     }
   }
 }
 veichael("red",1,1)
Q3
var lecturers = {Yousuf:"Git Bash",
                 Rajaie:"HTML&CSS",
                 Saad:"JavaScript",
                 Syeda:"Coordinater1",
                 Rabia:"Coordinator2"};
console.log(lecturers.Yousuf)
