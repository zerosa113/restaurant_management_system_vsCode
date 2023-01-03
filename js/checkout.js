$(document).ready(function () {

    showShoppingCart()
    readPointsExchange()
    memberPointInfo()
})
let intcostPoints = 0;

$(document).on('click', '#pointsExchangeBtn', function (e) {
    e.preventDefault()
    // shoppingCart()
    let checkCostPoints = parseInt($('#costPoints').val())
    let memberPoints = parseInt($('#memberInfoPoints').html())

    // console.log(checkCostPoints)
    // console.log(memberPoints)

    if (checkCostPoints <= 0) {
        alert('輸入點數小於等於零')
    } else if (checkCostPoints > memberPoints) {
        alert('輸入點數大於會員點數')
    } else if (checkCostPoints > 0) {
        intcostPoints = $('#costPoints').val()
        alert('輸入點數：' + intcostPoints)
    }

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




