function getProducts(data) { // Callback when JSON loads
  const newContent = ''; // Variable to hold HTML

  // filter lamps and wallets
  const dvds = data.products.filter((d) => {
    return (d.product_type === 'DVD');
  });

  const shoes = data.products.filter((d) => {
    return (d.product_type === "Shoes");
  });

  const myResults = dvds.concat(shoes);

  var item = myResults;
  var itemTotal = 0;
  var msg = '';
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

const json1 = [
  { id: 1, name: 'aaa' },
  { id: 5, name: 'ccc' },
  { id: 3, name: 'bbb' },
];

const json2 = [
  { id: 3, parameter1: 'x', parameter2: 'y', parameter3: 'z' },
  { id: 1, parameter1: 'u', parameter2: 'v', parameter3: 'w' },
  { id: 5, parameter1: 'q', parameter2: 'w', parameter3: 'e' },
];

const res = json2.map(x => Object.assign(x, json1.find(y => y.id === x.id)));
