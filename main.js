// // let input=prompt("Enter a Message");
// console.log(input);
// let convert="";
// let charCode="";
// for(let i=0;i<=input.length;i++){
//     // let char=input[i];
//     if(input[i]>="A" && input[i]<="Z"){
//          charCode=((input[i].charCodeAt(0)-65 +3) %26)+65;
//          convert+=String.fromCharCode(charCode)
//     }
//     else if(input[i]>="a" && input[i]<="z"){
//         charCode=((input[i].charCodeAt(0)-97 +3) %26)+97;
//         convert+=String.fromCharCode(charCode)
//    }
//    else if(input[i]==" "){
//     // charCode=((input[i].charCodeAt(0)-97 +3) %26)+97;
//     // convert+=String.fromCharCode(charCode)
//     convert+=" ";
// }
// else if(input[i]>="0" && input[i]<="9"){
//     charCode=((input[i].charCodeAt(0)-48) %10)+48;
//     convert+=String.fromCharCode(charCode)
// }

// }
// console.log(convert);
function Cipher(){
    let plain=document.getElementById("plain").value;
    let convert="";
    let charCode="";
    for(let i=0;i<=plain.length;i++){
    // let char=input[i];
    if(plain[i]>="A" && plain[i]<="Z"){
         charCode=((plain[i].charCodeAt(0)-65 +3) %26)+65;
         convert+=String.fromCharCode(charCode)
         document.getElementById("cipher").innerHTML=convert;
         
    }
    else if(plain[i]>="a" && plain[i]<="z"){
        charCode=((plain[i].charCodeAt(0)-97 +3) %26)+97;
        convert+=String.fromCharCode(charCode)
        document.getElementById("cipher").innerHTML=convert;
   }
   else if(plain[i]==" "){
    // charCode=((plain[i].charCodeAt(0)-97 +3) %26)+97;
    // convert+=String.fromCharCode(charCode)
    convert+=" ";
    document.getElementById("cipher").innerHTML=convert;
}
else if(plain[i]>="0" && plain[i]<="9"){
    charCode=((plain[i].charCodeAt(0)-48) %10)+48;
    convert+=String.fromCharCode(charCode)
    document.getElementById("cipher").innerHTML=convert;
}
    // let result=plain;
    // console.log(result);

    // document.getElementById("cipher").innerHTML=result;

    }

}