
  // const x=10;
  // console.log(x)
  
    
    // var x=30;
    // var last_name="sai";
    // var z="50";
    // var a=z%y;(x>)
    // var a=(!(y>x));
    // var b=(!(x>y));

    

    // console.log(last_name); 
    // console.log(instanceof(x));
    // console.log(b);
    // console.log(c);
    // document.write(x); 
//   document.querySelector("#div").innerHTML="<h1>web development</h1>";
  // window.alert(x);
//   window.prompt(x);  

  
    // let y="replace the number";
    // console.log(y)
    // document.write(y);
    // document.querySelector("#demo").innerHTML=y;
    // document.getElementById("#demo").innerHTML=y;
    // window.alert(y);
    // window.confirm(y);

  
    // const z="your form submitted";
    // console.log(z)
  // document.write(z);
  // document.querySelector("#demo").innerHTML=z;
  // window.alert(z);

  
// js operator
// Arthematic operators
// var y=40;
// var z=20;
// var a=y+z;
// console.log(a);

// assignment operators
// var a=40;
// var b=5;
// var c=a+b;
// console.log(c);

  // comparison operators
    // var a=40;
    // var b=50;
    // console.log(a==b);
    //  console.log(a<=b);

    // logical operators
    // and operator
    // var x=90;
    // var y=40;
    // console.log(x>y&&x<y);
    // console.log(x>y&&x>y);
    // console.log(x<y&&x>y);
    // console.log(x>y&&x<y);
     
    // string operators
    // var a="2";
    // var b=3;
    // var c=4;
    // console.log(a+b+c);
    // console.log(a-b+c);
     
    // type operators
    // var a=10;
    // console.log(typeof(a));
    
    //  bitwise operators
    //  var a=40;
    //  var b=50;
    //  console.log(a&b);
    //  console.log(a|b);
    //  console.log(~a); 



    //  js datatypes
    // const x=40;
    // const y="50";
    // console.log(x+y);

    // const x=40;
    // const y="50";
    // console.log(x-y);
    

    // const x="web";
    // const y=50;
    // console.log(x-y);

    // const x="40";
    // const y="50";
    // console.log(x==y);

    // const x="40";
    // const y=40;
    // console.log(x===y);

  //   const x="";
  // console.log(typeof(x));

  // const obj ={ name: "sai", rollnum:30 ,education:"degree"};
  // console.log(obj);
  // console.log(obj.education);
   
  // array datatype
  // const array =["web","development","digital","marketing"];
  // console.log(array);

    
// js functions
// function myFunction(x,y){
//   return console.log(x+y);
// };
// myFunction(2,3);


  // const x=5;
  // const y=6;
  // function devi(){
  //   return console.log(x+y);
  // }
  // devi();

  
  // error function
  // function myFunction(){
  //   const x = 4;
  // }
  // console.log(x);
  // myFunction();
   
  // function sai(x,y){
  // return console.log((x<y)?"true":"false");
  // }
  // sai(5,4);

  //  button function
   const hidehead = document.querySelector(".heading");
   function myFunction(){
     return hidehead.classList.toggle("heading-hide");
   }
  
  // // js events
 
  // const icon =document.querySelector(".icon");
  // const password=document.querySelector(".password");
  // icon.addEventListener("click",function passwordClick(){
  //   icon.classList.toggle("fa-eye");
  //   icon.classList.toggle("fa-eye-slash");
  //   console.log("hhhhf");
  //   password.type=password.type==="password"?"text":"password"
  // })
  
  // // form hide
   const formHide=document.querySelector(".form-hide");
   function myFunction(){
   return formHide.classList.toggle("form-hide-active");
   }


  //  array methods 
   
  // push method
  const array=[ "web","development","app","mobile","ios","digital","marketing"];
  const array1=array.push("software");
   console.log(array);
//   //  pop method
//   const array2=array.pop();
//    console.log(array);
//   //  shift method
//   const array3=array.shift();
//    console.log(array);
//   //  unshift method
//  const array4=array.unShift("software");
//     console.log(array);
//     // splice method
//     const array5=array.splice( 2,1,"developer","window");
//     console.log(array);
//     // slice method
   const array6=array.slice(2,5);
   console.log(array6);
   const array7=array.slice(2);
   console.log(array7);
    // tostring method
    const array8=array.toString();
    console.log(array8);
    // join method
    const array9=array.join("*");
    console.log(array9);
  //  max and min method
  const sai=[4,65,28,75,95,23,13,109,356,893,4784];
    console.log(Math.max.apply (null,sai));
    console.log(Math.min.apply(null,sai));
   
  // // cards
  // let cards="";
  // objArray.map(function myFunction(item)){
  //   cards+='<div>
  //   <h1>$(item.name)</h1>
  //   <h4>$(item.age)</h4>
  //   <h>$(item.des)</h1>
  // }
  // const ronaldo=[{id:1,title:Image1, img :"image-13.jfif",price:10000/-,RATING  }]
