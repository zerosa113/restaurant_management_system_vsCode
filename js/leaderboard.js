$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8080/searchTop5Commodity2',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({

        }),
        success: function (listMenu) {
            let { menus } = listMenu

            let top1 = menus[0]

            $('#menuTop1').append(`
                    <div class="card-body">
                        <h3 class="card-title">Top 1</h3>
                        <p class="card-text">${top1.commodityName}</p>
                    </div>
                    <img src="./img/menu/${top1.commodityName}.jpeg" class="card-img-top" alt="menu picture">
                `)


            for (i = 1; i < 5; i++) {
                $('#menuTopOthers').append(`
                    <div class="row g-0 m-1">
                        <div class="col-md-4">
                            <img src="./img/menu/${menus[i].commodityName}.jpeg" class="img-fluid rounded-start" alt="menu picture" style="max-height: 100px;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Top ${i + 1}</h5>
                                <p class="card-text">${menus[i].commodityName}</p>
                            </div>
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
})