console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; //created global variable named basket
function addItem (item){
    console.log('In addItem',item); // shows the item going to be added to array
        basket.push(item); //adds new item to end of array
return true;
}
addItem('apple');
addItem('pinapple');
addItem('pizza');
addItem('waffles');
function listItems(){
   for ( product of basket) {
       console.log('for loop in basket:',product);
       
   }
}
listItems();