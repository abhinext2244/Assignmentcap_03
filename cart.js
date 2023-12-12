


const items = ["Rice", "Dal", "Salt"];
const quantities = [2, 3, 1];
const prices = [60, 50, 20];

const groceryData = [];

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const quantity = quantities[i];
    const price = prices[i];

    const itemData = {
        name: item,
        quantity: quantity,
        price: price
    };

    groceryData.push(itemData);
}

const groceryObject = { data: groceryData };
function total(){
    totalsum=0
for (let j=0; j<groceryObject["data"].length;j++){
    let mul = groceryObject["data"][j].price*groceryObject["data"][j].quantity
    totalsum+=mul
   
}
console.log(totalsum)
}

total()