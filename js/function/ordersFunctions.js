function getAllMenu() {

    $.ajax({
        url: 'http://localhost:8080/read_all_commodtity',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({

        }),
        success: function (ReadCommodtityRes) {
            let { menus } = ReadCommodtityRes

            $('#menuInfo').empty()

            for (let item of menus) {
                $('#menuInfo').append(`
                <div class="menuItemInfo col">
                    <div class="card">
                        <img src="./img/menu/${item.commodityName}.jpeg" class="card-img-top" alt="menu picture">
                        <div class="card-body row">
                            <div class="card-body row p-1">
                                <h5 class="card-title col-7 m-1">${item.commodityName}</h5>
                                <p class="card-text col-4 m-1">$${item.price}</p>
                            </div>
                            <div class="card-body row p-1 m-0">
                                <input class="col-7 form-control form-control-lg form-control-borderless"
                                    id="${item.commodityName}" type="number" min="0" placeholder="Quantity">
                                <button type="submit" class="col-3 btn btn-primary m-1"
                                    id="addToShoppingcart">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                `)
            }

        }
        , xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }
    })
}

function shoppingCart(listOrderInfoMap) {
    let objectPostData = { orderInfoMap: listOrderInfoMap }
    $.ajax({
        url: 'http://localhost:8080/shopping_cart',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objectPostData),
        success: function (CustomerRes) {
            let { totalPrice, orderInfoMap, message } = CustomerRes
            if (message === '購物車為空') {

            }
            window.location.href = 'memberCheckout.html'

            let p = totalPrice
            console.log(p)
            console.log("Sucess")


        }
        , xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }
    })
}