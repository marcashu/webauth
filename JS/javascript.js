
var myIndex = 0;
var x;
var inc;
var canvas, my_context;
var mousePressed= false;
var lastX;
var lastY;
var data = {"total":0,"totalprice":0,"rows":[]};
var totalCost = 0;

window.onload = function(){
init();
slides();
}

function slides(){
    x = document.getElementsByClassName("gamecubeindigopics");
    for (inc = 0; inc < x.length; inc++) {
       x[inc].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";
    setTimeout(slides, 9000);
}


function init(){
$( ".myBtn" ).click(function() {
event.preventDefault();
console.log("click");
$( "#popupoverlay" ).hide();
});
}

    $(function(){
            
            $('#cartcontent').datagrid({
                singleSelect:true
            });
            
            if(localStorage &&  localStorage.getItem('cart')){

                data= JSON.parse(localStorage.getItem('cart'));
            
                console.log(data);
                $('#cartcontent').datagrid('loadData', data);
                $('div.cart .total').html('Total: £' + data.totalprice);
				totalCost=data.totalprice;
            }
            
            $('.item').draggable({
                revert:true,
                proxy:'clone',
                onStartDrag:function(){
                    $(this).draggable('proxy').css('z-index',10);
                }
                
            });
            
            $('.cart').droppable({
                onDrop:function(e,source){
					
                    var name = $(source).find('p.title').text();
                    var price = $(source).find('p.title').attr("data");
					console.log(name, price);
                    addProduct(name, parseFloat(price));
                }
            });
        });
        
        function addProduct(name,price){
            function add(){
                for(var i=0; i<data.total; i++){
                    var row = data.rows[i];
                    if (row.name == name){
                        row.quantity += 1;
                        return;
                    }
                }
                data.total += 1;
				
                data.rows.push({
                    name:name,
                    quantity:1,
                    price:price
                });
            }
            add();
			  
            totalCost += price;
			data.totalprice= totalCost;
			
            $('#cartcontent').datagrid('loadData', data);
            $('div.cart .total').html('Total: £'+totalCost);
            
            console.log(data);
            console.log(JSON.stringify(data));
    
            localStorage.setItem('cart', JSON.stringify(data));
        }