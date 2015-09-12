var React = require('react/addons')
var GroceryItemList = require('./components/GroceryItemList.jsx')

console.log('Hello!');

var GroceryItemList = require('./components/GroceryItemList.jsx')
var GroceryItemStore = require('./stores/GroceryItemStore.jsx')
var initial = GroceryItemStore.getItems()

function render() {
    React.render(<GroceryItemList items={initial} />, app)
    //           ^ Component,          ^ id selector
}

GroceryItemStore.onChange(function(items) {
    initial = items
    render()
})

render()

