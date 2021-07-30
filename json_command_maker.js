//刪除的文字返回輸入區
//顏色表示
//預覽字體減小
//html增長

var command_text = [];
var cmd_text = [];

function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }
  
    catch(e){ return false;}
  
}

// if(isMobile()){
//     br = document.getElementById("br");
//     br.innerHTML = ("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>")
// }

function NameButton() {
    element = document.getElementById("input_name");
    text = element.value;
    element.value = "";
    output_text = '{"selector":"'+text  +'"}';
    cmd_text.push("Jack")
    show(output_text)
}

function ScoresButton() {
    element = document.getElementById("input_scores");
    element2 = document.getElementById("input_scores2");
    text = element.value;
    text2 = element2.value;
    element.value = "";
    element2.value = "";
    output_text = '{"score":{"name":"' + text +'","objective":"'+ text2 + '"}}';
    cmd_text.push("878")
    show(output_text)
}

function show(output_text) {
    var command = document.getElementById("cmd_text");
    var command2 = document.getElementById("cmd_text2");
    var list_valu = document.getElementById("setting").value;

    if (output_text != "back" && output_text != "dedall" ) {
        command_text.push(output_text);
    }
    if (output_text != "dedall") {
        command2.innerHTML = textchage((cmd_text.toString())).replaceAll(",","").replaceAll("\\n","<br>");
        if (list_valu == "set1") {
            command.innerHTML = 'execute @a ~~~ titleraw @s actionbar {"rawtext":['+command_text+']}';
        }
        else if (list_valu == "set2") {
            command.innerHTML = 'tellraw @a {"rawtext":['+command_text+']}';
        }
        else if (list_valu == "set3") {
            command.innerHTML = 'tellraw @p {"rawtext":['+command_text+']}';
        }
        else {
            command.innerHTML = '{"rawtext":['+command_text+']}';
        }
    }
    else{
        command2.innerHTML = "指令預覽處";
        if (list_valu == "set1") {
            command.innerHTML = 'execute @a ~~~ titleraw @s actionbar {"rawtext":['+command_text+']}';
        }
        else if (list_valu == "set2") {
            command.innerHTML = 'tellraw @a {"rawtext":['+command_text+']}';
        }
        else if (list_valu == "set3") {
            command.innerHTML = 'tellraw @p {"rawtext":['+command_text+']}';
        }
        else {
            command.innerHTML = '{"rawtext":['+command_text+']}';
        }
    }
    if (cmd_text.length==0) {
        command2.innerHTML = "指令預覽處";
    }
}

function titleraw() {
    var list_valu = document.getElementById("setting").value;
    show("back")
}

function TextButton() {
    element = document.getElementById("input_text");
    text = element.value;
    element.value = "";
    output_text = '{"text":"' + text +  '"}';


    cmd_text.push(text)
    show(output_text)
}

function back() {
    command_text.pop()
    cmd_text.pop()
    show("back")
}

function allded() {
    command_text = [];
    cmd_text = [];
    show("dedall")
}

function copyText(id) {
    var node = document.getElementById(id);
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        document.execCommand("copy");
        alert("指令複製成功!");
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        alert("指令複製成功");
    } else {
        alert('無法複製內容、瀏覽器不支援');       
    }
    window.getSelection().removeAllRanges();
}

function textchage(element_text) {
    text = element_text;
    textlist = (text.split("§"));
    for (i=1;i<textlist.length;i++) {
        if (textlist[i].substring(0,1)=="1") {
            textlist[i]='<p style="color:#0000AA;display:inline;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="0") {
            textlist[i]='<p style="color:#000000;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="2") {
            textlist[i]='<p style="color:#00AA00;display:inline;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="3") {
            textlist[i]='<p style="color:#00AAAA;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="4") {
            textlist[i]='<p style="color:#AA0000;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="5") {
            textlist[i]='<p style="color:#AA00AA;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="6") {
            textlist[i]='<p style="color:#FFAA00;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="7") {
            textlist[i]='<p style="color:#AAAAAA;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="8") {
            textlist[i]='<p style="color:#555555;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="9") {
            textlist[i]='<p style="color:#5555FF;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="a") {
            textlist[i]='<p style="color:#55FF55;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="b") {
            textlist[i]='<p style="color:#55FFFF;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="c") {
            textlist[i]='<p style="color:#FF5555;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="d") {
            textlist[i]='<p style="color:#FF55FF;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="e") {
            textlist[i]='<p style="color:#FFFF55;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="f") {
            textlist[i]='<p style="color:#FFFFFF;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="g") {
            textlist[i]='<p style="color:#DDD605;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
    }
    return (textlist.toString()).replaceAll(",","");
}