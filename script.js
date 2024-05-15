function details() {
    var f_name = document.getElementById("FirstName").value;
    console.log("First name:", f_name);
    var fname=document.createElement("div");
    fname.innerHTML=`First name: ${f_name} <br>`;
    

    var m_name = document.getElementById("MiddleName").value;
    console.log("Middle name:", m_name);
    var mname=document.createElement("div");
    mname.innerHTML=`Middle name: ${m_name} <br>`;
    

    var l_name = document.getElementById("LastName").value;
    console.log("Last name:", l_name);
    var lname=document.createElement("div");
    lname.innerHTML=`Last name: ${l_name} <br>`;
    
    
    var email = document.getElementById("Email").value;
    console.log("Email:", email);
    var e_mail=document.createElement("div");
    e_mail.innerHTML=`Email: ${email} <br>`;
    

    var Location = document.getElementById("Location").value;
    console.log("Location:", Location);
    var l_ocation=document.createElement("div");
    l_ocation.innerHTML=`Location: ${Location} <br>`;
    document.body.append(fname,mname,lname,e_mail,l_ocation);


}


function label_create(tagname, attrname, attrval, content) {
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname, attrval);
    label_ele.innerHTML = content;
    return label_ele;
}
function break_create() {
    var break_ele = document.createElement("br");
    return break_ele;
}
function input_create(tagname, attrname1, attrval1, attrname2, attrval2) {
    var input_ele = document.createElement(tagname);
    input_ele.setAttribute(attrname1, attrval1);
    input_ele.setAttribute(attrname2, attrval2);
    return input_ele;
}
function button_create(tagname, attrname1, attrval1, attrname2, attrval2, content) {
    var button_ele = document.createElement(tagname);
    button_ele.setAttribute(attrname1, attrval1);
    button_ele.setAttribute(attrname2, attrval2);
    button_ele.innerHTML = content;
    return button_ele;
}


var first_name = label_create("label", "for", "FirstName", "FirstName");
var middle_name = label_create("label", "for", "MiddleName", "MiddleName");
var last_name = label_create("label", "for", "LastName", "LastName");
var email_label = label_create("label", "for", "Email", "Email");
var location_label = label_create("label", "for", "Location", "Location");

var break_1 = break_create();
var break_2 = break_create();
var break_3 = break_create();
var break_4 = break_create();
var break_5 = break_create();
var break_6 = break_create();
var break_7 = break_create();
var break_8 = break_create();
var break_9 = break_create();
var break_10 = break_create();


var first_input = input_create("input", "type", "text", "id", "FirstName");
var middle_input = input_create("input", "type", "text", "id", "MiddleName");
var last_input = input_create("input", "type", "text", "id", "LastName");
var email_input = input_create("input", "type", "email", "id", "Email");
var location_input = input_create("input", "type", "text", "id", "Location");

var submit_but = button_create("button", "type", "button", "onclick", "details()", "Submit");

document.body.append(first_name, break_1, first_input, break_2,
    middle_name, break_3, middle_input, break_4,
    last_name, break_5, last_input, break_6,
    email_label, break_7, email_input, break_8,
    location_label, break_9, location_input, break_10, submit_but);


