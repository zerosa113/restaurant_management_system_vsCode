$(document).ready(function () {

    showShoppingCart()
    readPointsExchange()
})

$(document).on('click', '#checkoutBtn', function (e) {
    e.preventDefault()

    checkout()
    // removeShoppingCart()
})

$(document).on('click', '#shopCartTest', function (e) {
    e.preventDefault()

    shoppingCart()
})

$(document).on('click', '#pointsExchangeBtn', function (e) {
    e.preventDefault()
    shoppingCart()

    inputCostPoints = $(this).siblings().val()
    let jsonCostPoints = {}
    jsonCostPoints["costPoints"] = inputCostPoints


    console.log("inputCostPoints: " + inputCostPoints)
    console.log(jsonCostPoints)
})


