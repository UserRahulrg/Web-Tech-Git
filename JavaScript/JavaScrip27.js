var a = 10;
let b = 2;
const c = 3;

{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);

    // alert(c);

    console.log("Hello World!!");


}

if( typeof document !== "undefined"){
    console.log('document module exist')
}
else{
    console.log('document not exist')
}

var var_arrcustomer = [];
var id = document.getElementById("userid");
var name = document.getElementById("name");
var mobileno = document.getElementById("mobileno");
var email = document.getElementById("email");
var image = document.getElementById("photo");

function btnaddclick(){

    let id2 = parseInt(valueOf(id));
    let name = name.value;
    let mobileno = parseInt(value.mobileno);
    let id = parseInt(value.id);
    let email = email.value;

    var reader = new reader();

    reader.onload = function imageload(){

        var image = reader.result;

        adduser(id,name,mobileno,email,image);
        reader.readAsDataUrl(image.files[0]);
        alert("Customer added Successfully!!");

    }

    function adduser(var_id,var_name,var_mobileno,var_email,var_image){

        let array = {id:var_id,name:var_name,mobileno:var_mobileno,email:var_email,image:var_image};

        var_arrcustomer(push.array);

        addcustomerintable(array);

    }

    
    function addcustomerintable(array){

        var vartabletr = document.createElement('tr');
        vartabletr.setAttribute('id','tr_',array.id.toString());

        var vartdremove = document.createElement('td');
        var varbtnremove = document.createElement('button');
        var vartextremove = document.createElement('Remove');

        varbtnremove.appendChild(vartextremove);
        varbtnremove.appendChild(vartdremove);
        vartdremove.appendChild(vartabletr);








    }

}

