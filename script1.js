function lable_create(tagname, attrname, attrval, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrval);
    ele.innerHTML = content;
    return ele;
}
function input_tag(inputtag, attrname, attrval, attrname1, attrval1) {
    var input_ele = document.createElement(inputtag);
    input_ele.setAttribute(attrname, attrval);
    input_ele.setAttribute(attrname1, attrval1);
    return input_ele;

}

function break_create() {
    var break_ele = document.createElement("br");
    return break_ele;
}

function button_create(tagname, attrname, attrval, attrname1, attrval1, content) {
    var button_ele = document.createElement(tagname);
    button_ele.setAttribute(attrname, attrval);
    button_ele.setAttribute(attrname1, attrval1);
    button_ele.innerHTML = content;
    return button_ele;

}

function foo(){
    var res1 = document.getElementById("firstname").value;
    var res2 = document.getElementById("middlename").value;
    var res3= document.getElementById("lastname").value;
    var res4= document.getElementById("email").value;
    var res5= document.getElementById("address").value;
    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);
    console.log(res5);
}

var label_Fn = lable_create("label", "for", "firstname", "Firstname");
var label_break = break_create();
var input_Fn = input_tag("input", "type", "text", "id", "firstname");
var input_break = break_create();

var label_Mn = lable_create("label", "for", "middlename", "Middlename");
var label_MNbreak = break_create();
var input_Mn = input_tag("input", "type", "text", "id", "middlename");
var input_MNbreak = break_create();

var label_ln = lable_create("label", "for", "lastname", "Lastname");
var label_LNbreak = break_create();
var input_ln = input_tag("input", "type", "text", "id", "lastname");
var input_LNbreak = break_create();

var label_email = lable_create("label", "for", "email", "Email");
var label_EMbreak = break_create();
var input_email = input_tag("input", "type", "email", "id", "email");
var input_EMbreak = break_create();

var label_address = lable_create("label", "for", "address", "Address");
var label_adbreak = break_create();
var input_address = input_tag("input", "type", "text", "id", "address");
var input_adbreak = break_create();

var label_button = button_create("button","type","button","onclick","foo()","Submit")

document.body.append(label_Fn, label_break, input_Fn, input_break, label_Mn, label_MNbreak, input_Mn, input_MNbreak, label_ln, label_LNbreak, input_ln, input_LNbreak, label_email, 
    label_EMbreak, input_email, input_EMbreak,label_address,label_adbreak,input_address,input_adbreak,label_button);
