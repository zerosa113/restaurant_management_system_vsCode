$(document).ready(function () {

    showShoppingCart()
})

$(document).on('click', '#checkoutBtn', function (e) {
    e.preventDefault()

    checkout()
})

$(document).on('click', '#shopCartTest', function (e) {
    e.preventDefault()

    shoppingCart()
})

$(document).on('click', '#pointsExchangeBtn', function (e) {
    e.preventDefault()

    shoppingCart()
})


