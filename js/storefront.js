function getProducts(data) {                       // Callback when JSON loads
var newContent = '';                              // Variable to hold HTML

//filter lamps and wallets
var filterResult1 = data.products.filter(function(d) { return (d.product_type == "T-shirts"); });
var filterResult2 = data.products.filter(function(d) { return (d.product_type == "Pullover Hood"); });
var myResults = filterResult1.concat(filterResult2);

var item = myResults;
var itemTotal = 0;
var msg = "";
for(i=0;i<item.length;i++){
  var allvs= item[i].variants;
  var title = item[i].title;
  msg += "<br /><h3>" + title + "</h3>";
  document.getElementById("allItems").innerHTML = msg;
  for(j=0;j<allvs.length;j++){
    itemTotal += Number(allvs[j].price);
    msg +=  "color: " + allvs[j].title + ", price: $" + allvs[j].price + "<br />";
    document.getElementById("allItems").innerHTML = msg;
  };
};
var num = parseFloat(itemTotal.toFixed(2));
document.getElementById("total").innerHTML = "Total price of all items: $" + num;
};
