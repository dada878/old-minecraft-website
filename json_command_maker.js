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
        command2.innerHTML = ((cmd_text.toString())).replaceAll(",","").replaceAll("\\n","<br>");
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
        alert("複製成功!");
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