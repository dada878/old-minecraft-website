var click = 0;
var add = 1;
var exp = 0;
var up = document.getElementById('upgtound');
var getgift = "";
var gift1 = 0;
var gift2 = 0;
var gift3 = 0;
var upup = 10;

//random function
function getrandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function click_button()
{
    click+=Math.round(add+exp*0.01+(add*gift1*0.1));
    exp+=Math.round(add+(add*gift2*0.1));
    let getrandonunm = getrandom(1,100);
    if (getrandonunm==1) {
        let randomgift = getrandom(1,3);
        if (randomgift==1) {
            alert("觸發隨機事件\n獲得寶物:紅珍珠")
            gift1+=1;
            getgift+="紅珍珠(10%金幣加成) ";
        }
        else if (randomgift==2) {
            alert("觸發隨機事件\n獲得寶物:金魔瓶")
            gift2+=1;
            getgift+="金魔瓶(10%經驗值加成) ";
        }
        else if (randomgift==3) {
            gift3+=1;
            alert("觸發隨機事件\n獲得寶物:復甦之石")
            getgift+="復甦之石(提升獲得寶物機率) ";
        }
    }
    updata()
}

function upgtound_button()
{
    if (click >= add**2){
    click-=add**2;
    add+=1;
    updata()
    }
    else {
        alert("金幣不足")
    }
}

function upup_button() {
    if (click >= upup*10) {
        click -= upup*10
        upup*=upup;
        add=add*2;
    }
    updata()
}

function updata() {
    document.getElementById("show").innerHTML = "金幣: " + click;
    document.getElementById("exp").innerHTML = "經驗值: " + exp;
    document.getElementById("upgtound").innerHTML = "升級 (花費" + add**2+"元)";
    if (click >= add**2) {
        document.getElementById("upgtound").style['background-color'] = "rgb(30, 200, 100)";
    }
    else {
        document.getElementById("upgtound").style['background-color'] = "rgb(200, 30, 100)";
    }
    if (click >= upup*10) {
        document.getElementById("upup").style['background-color'] = "rgb(30, 200, 100)";
    }
    else {
        document.getElementById("upup").style['background-color'] = "rgb(200, 30, 100)";
    }
    document.getElementById("clicker").innerHTML = "賺錢 (能力值" + add+"點)";
    document.getElementById("upup").innerHTML = "淺力突破 (花費" + upup*10+"元)";
    if (getgift=="") {
        document.getElementById("gift").innerHTML = "寶物: 無" + getgift;
    }
    else {
        document.getElementById("gift").innerHTML = "寶物: " + getgift;
    }
    
}