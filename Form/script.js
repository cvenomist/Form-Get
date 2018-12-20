//s = 1;
// function addHead(head) {
//     let div = document.createElement("div");
//     div.setAttribute('id',s);
//     var x = document.createElement("h5");
//     let text = document.createTextNode('First Heading' + s);
//     // var x = document.createElement("Input");
//     // x.setAttribute("type", "text");
//     // x.setAttribute("value", "Head");
//     x.appendChild(text)
//     div.appendChild(x)
//     parent = document.getElementById('addHead');
//     parent.appendChild(div);
//     var btn = document.createElement('button');
//     btn.setAttribute('onclick', 'remove("+s+")');
//     s++;

//     let dbtn = document.createTextNode('Delete');
//     //btn.setAttribute('value', 'Remove');
//     //btn.onclick = s;
//     //button.remove(text)
//     document.body.appendChild(dbtn);
//     document.body.appendChild(btn);
// }
a = 1;
function addHead() {
    let div = document.createElement('div');
    let head = document.createElement('h5');
    let text = document.createTextNode('Heading' + a);
    let btn = document.getElementById('addHead');
    div.setAttribute('id', a);
    head.appendChild(text);
    div.appendChild(head);
    parent = document.getElementById('addHead');
    parent.appendChild(div);
    btn.setAttribute("onclick","remove("+a+")");
    a++;
    
    let dbutton = document.createTextNode('Delete');
    btn.appendChild(dbutton)
    div.appendChild(btn);
}

// function remove () {
//     child = document.getElementById(head);
//     parent = document.getElementById('addHead');
//     parent.removeChild(child);
   
// }

function remove(element) {
   
    parent = document.getElementById("addHead");
    parent.removeChild(child);
}

function addPara() {
    var y = document.createElement("p");
    //y.setAttribute("type", "text");
    //y.setAttribute("value", "ParaGraph");
    let text = document.createTextNode('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry');
    y.appendChild(text)
    document.body.appendChild(y);
}

function addInput() {
    var z = document.createElement("INPUT");
    //z.setAttribute("type", "text");
    //z.setAttribute("value", "Add Input");
    let input = document.createTextNode('Input');
    z.appendChild(input)
    document.body.appendChild(z);

}