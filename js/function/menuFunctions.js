function searchCategory(strCategory) {

    let objPostData = { category: strCategory }

    $.ajax({
        url: 'http://localhost:8080/read_commodtity',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (ReadCommodtityRes) {
            let { menus, message } = ReadCommodtityRes

            $('#menuInfo').empty()

            if (message === '資料格式錯誤') {
                $('#menuInfo').append('資料格式錯誤')
            } else if (!menus || !menus.length) {
                $('#menuInfo').append('Without data.')
            } else {
                for (let item of menus) {
                    $('#menuInfo').append(`
                     <div class="menu-item-info card mb-3">
                        <img class="menu-img card-img-top" src="./img/menu/${item.commodityName}.jpeg" alt="chicken">
                        <div class="card-body p-3">
                            <h6 class="menu-name card-title mb-1">${item.commodityName}</h6>
                            <div class="menu-price mb-1">$${item.price}</div>
                        </div>
                     </div>
                        `)
                }
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }
    })
}

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
                <div class="menu-item-info card mb-3">
                    <img class="menu-img card-img-top" src="./img/menu/${item.commodityName}.jpeg" alt="chicken">
                    <div class="card-body p-3">
                        <h6 class="menu-name card-title mb-1">${item.commodityName}</h6>
                        <div class="menu-price mb-1">$${item.price}</div>
                    </div>
                </div>
                `)
            }

        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }
    })
}