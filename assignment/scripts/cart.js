console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; //created global variable named basket
function addItem (item){
    console.log('In addItem',item); // shows the item going to be added to array
        basket.push(item); //adds new item to end of array
return true;
}
addItem('apple'); //added apple to basket array
addItem('pinapple');//added pinapple to basket array
addItem('pizza');//added pizza to basket array
addItem('waffles');//added waffles to basket array
function listItems(){
   for ( product of basket) { 
       console.log('for loop in basket:',product); //logs products in basket
    
   }
}
listItems();// calling function listItems

function empty() { 
    while (basket.length > 0) { //while the basket still holds more than zero items
        basket.pop();//removes last item from basket array
    }
        
}



