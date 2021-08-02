//宣告

var is_cheak_box_plate = false;
var is_cheak_box_destroy = false;
var is_cheak_box_deadkeep = false;
var lock_mode = "";
var sele_mode = "";
var item_data = 0;
var item_num = 0;
var item_id = "";
var nbt_data_list = [];

//點擊偵測

function cheak_box_plate() {
    let check_box_plate = document.getElementById("box1").checked;
    let span = document.getElementById("plate");
    is_cheak_box_plate = check_box_plate;
    if (is_cheak_box_plate) {
        span.innerHTML=('<h3 class="eletext">(可放置方塊ID)</h3><input class="input" type="text" id="input_plate">')
    }
    else {
        span.innerHTML=('')
    }
}

function cheak_box_destroy() {
    let check_box_plate = document.getElementById("box2").checked;
    let span = document.getElementById("destroy")
    is_cheak_box_destroy = check_box_plate;
    if (is_cheak_box_destroy) {
        span.innerHTML=('<h3 class="eletext">(可破壞方塊ID)</h3><input class="input" type="text" id="input_destroy">')
    }
    else {
        span.innerHTML=('')
    }
}

function cheak_box_deadkeep() {
    let check_box_dead_keep = document.getElementById("box3").checked;
    is_cheak_box_deadkeep = check_box_dead_keep;
}

function lock_change() {
    lock = document.getElementById("lock")
    lock_mode=lock.value
    console.log(lock_mode)
}

function sele_change() {
    sele = document.getElementById("sele")
    sele_mode = sele.value
    console.log(sele_mode)
}

//生成

function click_make() {
    sele_change()
    let cmd_text = document.getElementById("cmd_text");
    if (check_str()==true) {
        cmd_text.innerHTML = '/give '+sele_mode+' '+item_id+' '+item_num+' '+item_data+' '+'{'+nbt_data_list.toString()+'}'
    }
    else if (check_str()=="error1") {
        alert("請填寫物品ID")
    }
    else if (check_str()=="error2") {
        alert("請填寫可放置方塊ID")
    }
    else {
        alert("請填寫可破壞方塊ID")
    }
}

//字串處理

function check_str() {
    nbt_data_list = []
    //判斷防噴
    if (is_cheak_box_deadkeep == true) {
        nbt_data_list.push('"minecraft:keep_on_death":{}');        
    }
    //判斷冒險放置
    if (is_cheak_box_plate == true) {
        let plate_block_id = document.getElementById("input_plate").value;
        if (plate_block_id!="") {
            nbt_data_list.push('"minecraft:can_place_on":{"blocks":["' + plate_block_id +'"]}'); 
        }
        else {
            return "error2"
        }
    }
    //判斷冒險破壞
    if (is_cheak_box_destroy == true) {
        let destroy_block_id = document.getElementById("input_destroy").value;
        if (destroy_block_id!="") {
            nbt_data_list.push('"minecraft:can_destroy":{"blocks":["' + destroy_block_id +'"]}');     
        }
        else {
            return "error3"
        }   
    }
    //鎖定判斷
    lock_change();
    if (lock_mode != "nolock") { 
        nbt_data_list.push(lock_mode);
    }
    //設定&判斷物品數量
    item_num = document.getElementById("input_item_num").value;
    if (item_num=="") {
        item_num=1;
    }
    //設定&判斷物品數據值
    item_data = document.getElementById("input_item_data").value;
    if (item_data=="") {
        item_data=0;
    }
    //id設定&判斷
    item_id = document.getElementById("input_item_id").value;
    if (item_id=="") {
        return "error1"
    }
    else {
        console.log(nbt_data_list)
        return(true)
    }
}

//複製
function copyText(id) {
    node = document.getElementById(id);
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
