
var products= [
    { "Product":"CLEANCUBE","Type":"Solar Powered Trash Comptracter","Price":"75AED","file_name":"Cleancube_bin.png" },
             {"Product":"Australian Smart Sensor","Type":"Temperature Sensor","Price":"100AED","file_name":"Australian sensor.png"  },
             { "Product":"Sensoneo","Type":"Route Planning Optimazation","Price":"75AED","file_name":"Senseo bin.png"},
    {"Product":"Ultrasonic sensors","Type":"Fill Up Detection","Price":"75AED","file_name":"ultrasonic bin.png"},
    {"Product":"TOWNEW Self-Sealing and Self-Changing","Type":"Fill Up Detection","Price":"450AED","file_name":"Tom.png"},
    {"Product":"Food Cycler Platinium","Type":"Food Cycler","Price":"1250AED","file_name":"Food_bin.png"}
  
];


function search_products(){
    var search_text=$("#search-text").val();
    var table_html="";
    for(var index in products){
        var product=products[index];
        var Product=product["Product"];
        var Type=product["Type"];
        var Price=product["Price"]
        var file_name=product["file_name"];
        var product_index=Number(index)+1;
        
            if(Product.toLowerCase().search(search_text.toLowerCase())!=-1){

        table_html+="<tr><th scope='row'>"+product_index+"</th><td>"+Product+"</td><td>"+Type+"</td><td><span class='"+Price+"'>"+Price+"</span></td><td><img class='movie_img' src='image/"+file_name+"'></td></tr>";
            }
    }
    
    $("#product-table-data").html(table_html);  
}




function show_products(){
    
    var table_html="";
    for(var index in products){
        var product=products[index];
        var Product=product["Product"];
        var Type=product["Type"];
        var Price=product["Price"]
        var file_name=product["file_name"];
        var product_index=Number(index)+1;
        table_html+="<tr><th scope='row'>"+product_index+"</th><td>"+Product+"</td><td>"+Type+"</td><td><span class='"+Price+"'>"+Price+"</span></td><td><img class='movie_img' src='image/"+file_name+"'></td></tr>";
    }
    
    $("#product-table-data").html(table_html);
    
}