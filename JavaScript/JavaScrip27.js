
var var_arrcustomer = [];
var var_id = document.getElementById("userid");
var var_name = document.getElementById("name");
var var_mobileno = document.getElementById("mobileno");
var var_email = document.getElementById("email");
var var_image = document.getElementById("image");
var var_table = document.getElementById('customer');
var heading = document.getElementById('headingtime');
var image;

function btnaddclick(){
    alert("Entered in a Loop!!");
    let id = parseInt(var_id.value);
    let name = var_name.value;
    let mobileno = parseFloat(var_mobileno.value);
    let email = var_email.value;
    // let image = value.var_image;

    var reader = new FileReader();
    reader.onload=function(){
        var image = reader.result;
    }

    let num1 = 10;
    let num2 = 20;

    let sum = num1 + num2

    add_customer(id,name,mobileno,email,image);
    alert("Entered in a function!! outside loop"+id+name+mobileno+email+image);

    reader.readAsDataURL(var_image.files[0]);
    alert("Customer Data Added Successfully");
}

function add_customer(var_var_id,var_var_name,var_var_mobileno,var_var_email,var_var_image){

    alert("Entered in add_customer function "+var_var_id,var_var_name,var_var_mobileno,var_var_email,var_var_image);

    let objcust = {id:var_var_id,name:var_var_name,mobileno:var_var_mobileno,email:var_var_email,image:var_var_image};
    var_arrcustomer.push(objcust);
    alert(var_arrcustomer.id);
    addCustomerInTable(objcust);


}

function addCustomerInTable(var_objcust){

    alert("Entered in addCustomerInTable function!!");

    var varTableTr = document.createElement('tr');
    //varTableTr.setAttribute('id','tr_'+objcust.id.ToString());

    //var_table.appendChild(varTableTr);
    alert("JavaScript program Completed!!");
}


