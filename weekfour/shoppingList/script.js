/** declare two variables an emty array and output*/

const list = []
const output = document.getElementById('output')

/**add function */
function addItem() {
    const item = document.getElementById('item').value
  console.log(list, item)
  if (list.includes(item) === true) {
    alert("It's already in your shopping list.")
  } else {
    list.push(item)
    let itemList = document.createElement('p')
    output.textContent=""
    itemList.textContent = list
    output.append(itemList)
  }
}
