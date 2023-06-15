
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

  // button function
  const hidehead = document.querySelector(".heading");
  function myFunction(){
    return hidehead.classList.toggle("heading-hide");
  }
  
  // js events
  const icon=document.querySelector(".icon");
  const password=document.querySelector(".password");
  icon.addEventListener("click",function passwordclick(){
    icon.classList.toggle("fa-eye");
    icon.classList.toggle( "fa-eye-slash");
    password.type=password.type==="password"?"text":"password"                                                                                                                                                                                                                                                                                                             "text": "password"
  }
  )
