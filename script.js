// const myForm = document.getElementById("form1");
// const l = myForm.elements["bimari"].value;
// console.log(l)
const arr = ["abcdefghijklmnopqrstuvwxyz","0123456789","ABCDEFGHIJKLMNOPQRSTUVWXYZ","@#!$&*?","{-+-}^)("];

function get_password(e){
    let l = document.getElementById("p_length");
    let n = l.value;
    let w = document.getElementById("strength");
    let ans = "";
    let p = document.getElementById("password");
    if(l.value>60){
        p.innerHTML = "";
        return;
    }
    if(l.value<10 && w.value=="Uncrackable(min length = 10)"){
        p.innerHTML= "";
        return;
    }
    for(let i=0; i<n; i++){
        if(w.value=="Weak"){
            let random_idx = Math.floor(Math.random()*2);
            let random_char = arr[random_idx][Math.floor(Math.random()*(arr[random_idx].length))]
            ans += random_char;
        }else if(w.value=="Medium"){
            let random_idx = Math.floor(Math.random()*3);
            let random_char = arr[random_idx][Math.floor(Math.random()*(arr[random_idx].length))]
            ans += random_char;
        }else if(w.value=="Hard"){
            let random_idx = Math.floor(Math.random()*4);
            let random_char = arr[random_idx][Math.floor(Math.random()*(arr[random_idx].length))]
            ans += random_char;
        }else{
            let random_idx = Math.floor(Math.random()*5);
            let random_char = arr[random_idx][Math.floor(Math.random()*(arr[random_idx].length))]
            ans += random_char;
        }
    }
    p.innerHTML = ans;
    let final_task = document.getElementsByClassName("answer");
    let final_arr = Array.from(final_task);
    for (let x of final_arr){
        x.style.display = "inline";
    }
    final_arr[0].style.display = "flex";
    // final_arr[0].style.flex-wrap = "nowrap";
    final_arr[2].style.display = "inline-block";
    final_arr[2].style.display = "inline-block";
}

function validateForm(e){
    e.preventDefault();
    let l = document.getElementById('p_length');
    
    console.log(l);
    //console.log("printing stuff",l.value);
    if(l.value==""){
        let x = document.getElementById("length_err");
        x.innerHTML = "  *This field is required";
        return false;
    }
    else if(l.value<10){
        let w = document.getElementById("strength");
        console.log(w);
        if(w.value=="Uncrackable(min length = 10)"){
            let x = document.getElementById("length_err");
            x.innerHTML = "  *you can't create uncrackable password with this length.";
            let p = document.getElementById("password");
            p.innerHTML = ""
            return false;
        }else{
            return true;
        }  

    }else if(l.value>60){
        let x = document.getElementById("length_err");
        x.innerHTML = "  *Password length is too much.";
        return false;
    }else if(l.value>20){
        let x = document.getElementById("length_err");
        x.innerHTML = "  *This much big password is not recommended.";
        return true;
    }
    return true;
}


function removeEffects(){
    let x = document.getElementById("length_err");
    x.innerHTML="";
    let final_task = document.getElementsByClassName("answer");
    let final_arr = Array.from(final_task);
    for (let x of final_arr){
        x.style.display = "none";
    }

}

let btn = document.getElementById('button');
// validateForm()
btn.addEventListener("click",removeEffects);
btn.addEventListener("click",validateForm);
btn.addEventListener("click",get_password);
