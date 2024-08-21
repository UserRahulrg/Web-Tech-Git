let table = document.getElementsByClassName("createtable");

function clickclick(){
    
    alert("hello world!!");
    let tabletable = document.createElement("table");
    let tableteabletr = document.createElement("tr");
    let tabltableth = document.createElement("th");

    tableteabletr.appendChild(tabltableth);
    tabletable.appendChild(tableteabletr);
    table.appendChild(tabletable);

    alert(table);

}

function clickclickclick(){
    var tabletable = document.getElementById("table01");
    let tableteabletr = document.createElement("tr");
    var row = tabletable.insertRow(1);
    var cel1 = row.insertCell(0);


    var cel2 =row.insertCell(0);
    cel1.innerHTML = "NewCell1";
    cel2.innerHTML = "NewCell2";

}

function createTable(){
    let table = document.createElement("table");
    table.setAttribute('border','4');

    let row = table.insertRow();

    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 =row.insertCell();

    var name = document.getElementById('name');
    var color = document.getElementById('color');
    var branch = document.getElementById('branch');

    cell1.textContent = name.value;
    cell2.textContent = color.value;
    cell3.textContent = branch .value;

    document.body.appendChild(table);
}









