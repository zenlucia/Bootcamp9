/** creating a new variable*/
const btn = document.getElementById("btn")
/**listening to click,  */
btn.addEventListener("click", getItem)
let items = [];
function getItem(e) {
        /**Don't refresh browser */
        e.preventDefault()
        let item = document.getElementById("item").value;
        
        for (let i = 0; i < items.length; i++) {
                console.log(items[i]);
                if (item = items[i]) {
                        console.log(item);
                        alert(`Already added" + ${items[i]}`)
                }
                else {
                        items.push(item);
                        let output = document.getElementById("output");
                        output.innerHTML = items;
                }
                items.push(item)
        }
}
