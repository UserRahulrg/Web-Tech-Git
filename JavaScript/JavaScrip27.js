
var var_arrcustomer = [];
var var_id = document.getElementById('userid');
var var_name = document.getElementById('name');
var var_mobileno = document.getElementById('mobileno');
var var_email = document.getElementById('email');
var var_image = document.getElementById('image');
var var_table = document.getElementById('customertable');
var heading = document.getElementById('headingtime');


function btnaddclick(){
    
    let id = parseInt(var_id.value);
    let name = var_name.value;
    let mobileno = parseInt(var_mobileno.value);
    let email = var_email.value;
   

    var reader = new FileReader();
    reader.onload=function(){
        var image = reader.result;
        add_customer(id,name,mobileno,email,image);
    }
    
    reader.readAsDataURL(var_image.files[0]);
 

    
    alert("Customer Data Added Successfully");
}

function add_customer(var_var_id,var_var_name,var_var_mobileno,var_var_email,var_var_image){
   

    let objcust = {id:var_var_id,name:var_var_name,mobileno:var_var_mobileno,email:var_var_email,image:var_var_image};
    var_arrcustomer.push(objcust);
    addCustomerInTable(objcust);

}

function addCustomerInTable(objcust){

   

    var varTableTr = document.createElement('tr');
    varTableTr.setAttribute('id','tr_'+objcust.id.toString());
   
    var varTdRemove = document.createElement('td');
    var varBtnRemove = document.createElement('button');
    var varTextRemove = document.createTextNode('Remove');
    
    varBtnRemove.appendChild(varTextRemove);
    varTdRemove.appendChild(varBtnRemove);
    varTableTr.appendChild(varTdRemove);

    var varTdId = document.createElement('td');
    var varTextId = document.createTextNode(objcust.id);
    varTdId.appendChild(varTextId);
    varTableTr.appendChild(varTdId);

    var varTdName = document.createElement('td');
    var varTextName = document.createTextNode(objcust.name);
    varTdName.appendChild(varTextName);
    varTableTr.appendChild(varTdName);

    var varTdMobileNo = document.createElement('td');
    var varTextMobileNo = document.createTextNode(objcust.mobileno);
    varTdMobileNo.appendChild(varTextMobileNo);
    varTableTr.appendChild(varTdMobileNo);

    var varTdEmail = document.createElement('td');
    var varTextEmail = document.createTextNode(objcust.email);
    varTdEmail.appendChild(varTextEmail);
    varTableTr.appendChild(varTdEmail);

    var varTdImage = document.createElement('td');
    var varTdImageData1 = document.createElement('img');
    varTdImageData1.setAttribute('src',objcust.image);
    varTdImageData1.setAttribute('width','90px');
    
    varTdImage.appendChild(varTdImageData1);
    varTableTr.appendChild(varTdImage);

    var_table.appendChild(varTableTr);

}


