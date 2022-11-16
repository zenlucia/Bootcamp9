/** creating a variable and getting it by it's ID*/
const btn = document.getElementById('vtn')
/** listening for button click, then runs function get item */
btn.addEventListener('click',getItem)
/** create an array with the items soup*/
let items=['soup']
/** start of function by getting items (parameter e (e=event)) */
function getItem(e) {
/** don't refresh browser or do it's default thing */
    e.preventDefault()
/** creating new variable, getting the value of the item by its ID */
    let item=document.getElementById("item").value
/**for loop. start array with an index (i) of 0 and keep going up (i++) (so i++ =i+1) */
for(let i=0; i<items.length; i++){
/** logs the items that are indexed in the array (can put in ,i to also show index number */
 console.log (items[i])
 /**if (if statement) duplicate item is in the array, an alert pop-up will advise item already added */
    if (item == items[i]){
        console.log (item)
        alert(`Already added ${items[i]}`)
/** or else (if else)) */
    } else{
/**display item (retrieved by it's id) via text and also in the console log */
    console.log(items)
    let output=document.getElementById('output')
output.innerText=items
    }}
/** push is an array method, which will push the item into the array */
    items.push(item)
}