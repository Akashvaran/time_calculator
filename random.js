let gn1=document.getElementById('gn1').innerHTML=Math.round(Math.random() * 999);
let gn2=document.getElementById('gn2').innerHTML=Math.round(Math.random() * 999);
let check =()=>{
    let num3 =gn1+gn2
    let output=document.getElementById('output').value;
    if(output==num3){
        document.getElementById('message').innerHTML="correct answer"
    }else{
        document.getElementById('message').innerHTML='wrong answer';
    }

    
}

document.getElementById('btnid').addEventListener('click',check)