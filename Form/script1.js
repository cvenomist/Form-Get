let i=1;
    function addHead(){
        var div = document.createElement("div");
        div.setAttribute("id", i);
        
        var head = document.createElement("h4");
        var node = document.createTextNode("Heading");
        head.appendChild(node);
        div.appendChild(head);
        var element = document.getElementById("addHead");
        
        var headdel = document.createElement("button");
        headdel.setAttribute("onclick", "remove("+i+")");
        i++;
        var node = document.createTextNode("Delete");
        headdel.appendChild(node);
        div.appendChild(headdel);

        element.appendChild(div);

    }

    function addPara(){

        var div=document.createElement("div");
        div.setAttribute("id",i);
         var para = document.createElement("p");
         var node = document.createTextNode("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry");
         para.appendChild(node);
         div.appendChild(para);
         var element = document.getElementById("addPara");

 
         var paradel = document.createElement("button");
         paradel.setAttribute("onclick","remove("+i+")");
         i++;
         var node = document.createTextNode("Delete");
         paradel.appendChild(node);
         div.appendChild(paradel);
    
         element.appendChild(div);
     }

     function addInput(){

        var div=document.createElement("div");
        div.setAttribute("id",i);
         var inp = document.createElement("p");
         var node = document.createTextNode("Input Field");
         inp.appendChild(node);
         div.appendChild(inp);
         var element = document.getElementById("addInput");

 
         var inputdel = document.createElement("button");
         inputdel.setAttribute("onclick","remove("+i+")");
         i++;
         var node = document.createTextNode("Delete");
         inputdel.appendChild(node);
         div.appendChild(inputdel);
      
         element.appendChild(div);
     }

    function remove(id){
        var element = document.getElementById(id);
        
        element.parentNode.removeChild(element);
        
        
    }