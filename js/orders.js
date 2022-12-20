$(document).ready(function () {
    getAllMenu()
})

let listOrderInfoMap = {}


// addToShoppingcart btn
$(document).on('click', 'button[id*=addToShoppingcart]', function (e) {
    e.preventDefault()
    commodityName = $(this).siblings().attr('id')
    quantity = parseInt($(this).siblings().val())
    listOrderInfoMap[commodityName] = quantity
    alert('Success Add')

    console.log(listOrderInfoMap)
})

// btnCheckout
$(document).on('click', 'button[id*=btnCheckout]', function (e) {
    e.preventDefault()
    shoppingCart(listOrderInfoMap)
    console.log(listOrderInfoMap)
})


// btnRemoveAll
$(document).on('click', 'button[id*=btnRemoveAll]', function (e) {
    e.preventDefault()
    listOrderInfoMap = {}
    removeShoppingCart()
    console.log(listOrderInfoMap)
})

