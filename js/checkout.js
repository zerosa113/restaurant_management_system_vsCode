$(document).ready(function () {

    showShoppingCart()
    readPointsExchange()
})
let intcostPoints = 0;

$(document).on('click', '#pointsExchangeBtn', function (e) {
    e.preventDefault()
    // shoppingCart()

    intcostPoints = $('#costPoints').val()
    console.log(intcostPoints)
    // let jsonCostPoints = {}
    // jsonCostPoints["costPoints"] = inputCostPoints


    // console.log("inputCostPoints: " + inputCostPoints)

})

$(document).on('click', '#checkoutBtn', function (e) {
    e.preventDefault()

    checkout(intcostPoints)
    // removeShoppingCart()
})

$(document).on('click', '#shopCartTest', function (e) {
    e.preventDefault()

    shoppingCart()
})




