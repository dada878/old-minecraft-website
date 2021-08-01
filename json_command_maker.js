var command_text = [];  //指令陣列
var cmd_text = [];  //預覽陣列

//輸入名稱
function NameButton() {
    element = document.getElementById("input_name");
    text = element.value;
    element.value = "";
    output_text = '{"selector":"'+text  +'"}';
    cmd_text.push("Jack")
    show(output_text)
}

//輸入分數
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

//畫面更新
function show(output_text) {
    var command = document.getElementById("cmd_text");  //指令文字
    var command2 = document.getElementById("cmd_text2");    //預覽文字
    var list_valu = document.getElementById("setting").value;   //取得類型設定

    //例外:刪除上個
    if (output_text != "back" && output_text != "dedall" ) {
        command_text.push(output_text);
    }
    //例外:全部刪除
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
    //正常情況
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

//當類型設定被切換
function titleraw() {
    var list_valu = document.getElementById("setting").value;
    show("back")
}

//添加文字
function TextButton() {
    element = document.getElementById("input_text");
    text = element.value;
    element.value = "";
    output_text = '{"text":"' + text +  '"}';


    cmd_text.push(text)
    show(output_text)
}

//刪除上個元素
function back() {
    command_text.pop()
    cmd_text.pop()
    show("back")
}


//全部刪除元素
function allded() {
    command_text = [];
    cmd_text = [];
    show("dedall")
}

//複製函數
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

//預覽文字處理、顏色轉換
function textchage(element_text) {
    
    // //用§l分割輸入的字串
    // textlist2 = (element_text.split("§l"));

    // //把每段分割出來的字串，將旁邊加上strong元素
    // for (i=1;i<textlist2.length;i++) {
    //     textlist2[i]='<strong>'+ (textlist2[i]) +'</strong>';
    // }

    // //從textlist2取得§r的位置並書入倒change_num
    // change_unm = textlist2.toString().indexOf("§r");
    // //如果textlist2中有§r
    // if (change_unm>=1) {
    //     //將已經左右邊用strong元素包住的陣列轉成文字
    //     textlist2_change=textlist2.toString()
    //     //取得§r之後的文字與元素
    //     get_reset_and_strong = textlist2_change.substring(change_unm,(textlist2.toString().length)-9)
    //     //取代原本文字 替換成重置後的文字
    //     textlist2_change = textlist2_change.replaceAll(get_reset_and_strong,'<p style="font-weight:400;display:inline;">'+get_reset_and_strong+"</p>")
    //     text = (textlist2_change.toString()).replaceAll(',',"");
    //     text = text.replaceAll('§r',"")
    // }
    // else {
    //     text = (textlist2.toString()).replaceAll(',',"");
    // }

    text = (element_text).toString().replaceAll(',',"");
    
    text = text.replaceAll("§l","%$#+-l)");
    text = text.replaceAll("§r","%$#+-r)");
    

    console.log(text.indexOf("%$#+-l)"));

    while (true) {
        //如果找不到粗體代碼就退出迴圈
        if (text.indexOf("%$#+-l)")== -1) {
            break;
        }
        //如果找到粗體代碼
        else {
            //設定第一個粗體代碼位置
            index_bold = text.indexOf("%$#+-l)");
            //如果找到重置代碼就設定text_reset為重置代碼位置
            if (text.indexOf("%$#+-r)")!=-1) {
                index_reset = text.indexOf("%$#+-r)");
            }
            //找不到的話就設定成字串長度
            else {
                index_reset = text.length;
            }
            text = text.replaceAll((text.substring(index_bold,index_reset+7)),'<strong>'+(text.substring(index_bold+7,index_reset))+'</strong>§r')
        }
    }

    console.log(text)

    textlist = (text.split("§"));
    for (i=1;i<textlist.length;i++) {
        if (textlist[i].substring(0,1)=="1") {
            textlist[i]='<p style="color:#0000AA;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="0") {
            textlist[i]='<p style="color:#000000;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="2") {
            textlist[i]='<p style="color:#00AA00;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
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
        if (textlist[i].substring(0,1)=="r") {
            textlist[i]='<p style="color:#000000;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
        if (textlist[i].substring(0,1)=="g") {
            textlist[i]='<p style="color:#DDD605;display:inline;">'+ (textlist[i].toString()).substring(1,(textlist[i].toString()).length) +'</p>';
        }
    }
    return (textlist.toString()).replaceAll(",","");
}