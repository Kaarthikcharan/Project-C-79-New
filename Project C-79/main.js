var menu_list_array=["Margherita","Peppy Paneer","Mexican Green Wave","Deluxe Veggie","Veg Extravaganza","CHEESE N CORN"];
                    

function getmenu(){
var htmldata ="";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
var imgtag="<img src='images/pizza.png' width='50px' height='50px'>"
menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtag+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_menu1").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    
	add_item();
}
