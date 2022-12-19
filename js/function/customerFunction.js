function login(strAccount, strPwd) {
    let objPostData = { memberAccount: strAccount, memberPwd: strPwd }

    $.ajax({
        url: 'http://localhost:8080/login',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '已有帳號登入，要登入其他帳號請先登出') {
                alert('已有帳號登入，要登入其他帳號請先登出')
            } else if (message === '所需資料缺失') {
                alert('所需資料缺失')
            } else if (message === '帳號或密碼錯誤') {
                alert('帳號或密碼錯誤')
            } else if (message === '登入會員成功') {
                alert('登入會員成功')
                window.location.href = 'memberInformation.html'
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}

// function showLogin() {

//     $.ajax({
//         url: 'http://localhost:8080/show_login_account',
//         method: 'POST',
//         contentType: 'application/json',
//         dataType: 'json',
//         data: JSON.stringify(),
//         success: function (res) {

//             let { message } = res

//             if (message === '尚未登入') {
//                 alert('尚未登入')
//                 window.location.href = 'login.html'
//             } else {
//                 $('#showLogin').empty()
//                 $('#showLogin').append(`<p>${message}</p>`)
//             }
//         }, xhrFields: {
//             withCredentials: true
//         },
//         error: function (e) {
//             console.log(e)
//             alert('Failed')
//         }

//     })


// }

function logout() {

    $.ajax({
        url: 'http://localhost:8080/logout',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (res) {

            let { message } = res

            if (message === 'Success') {
                alert('登出成功')
                window.location.href = 'index.html'
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

function signUp(strAccount, strPwd, strName, strPhone, intAge, strLineId, strEmail) {
    let objPostData = { memberAccount: strAccount, memberPwd: strPwd, memberName: strName, memberPhone: strPhone, MemberAgeRange: intAge, memberLineId: strLineId, memberEmail: strEmail }

    $.ajax({
        url: 'http://localhost:8080/createMember',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '所需資料缺失') {
                alert('所需資料缺失')
            } else if (message === '資料格式錯誤') {
                alert('資料格式錯誤')
            } else if (message === '帳號已存在') {
                alert('帳號已存在')
            } else if (message === 'Success') {
                alert('註冊成功，請登入')
                window.location.href = 'signIn.html'
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}

function searchMemberInfo(strAccount) {
    let objPostData = { memberAccount: strAccount }

    $.ajax({
        url: 'http://localhost:8080/search_member_info',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message, memberInfo, orders } = res

            if (message === '尚未登入') {
                alert('尚未登入')
                window.location.href = 'signIn.html'
            } else if (message === '尚無購買紀錄') {
                alert('尚無購買紀錄')
                $('#memberInfoTable').empty()
                $('#memberInfoTable').append(`<tr><th>帳號</th><th>姓名</th><th>電話</th><th>年齡</th><th>點數</th></tr>`)


                $('#memberInfoTable').append(`<tr><td>${memberInfo.memberAccount}</td><td>${memberInfo.memberName}</td><td>${memberInfo.phone}</td><td>${memberInfo.ageRange}</td><td>${memberInfo.points}</td></tr>`)
            } else if (message === 'Success') {
                alert('Success')

                $('#memberInfoTable').empty()
                $('#memberInfoTable').append(`<tr><th>帳號</th><th>姓名</th><th>電話</th><th>年齡</th><th>點數</th></tr>`)


                $('#memberInfoTable').append(`<tr><td>${memberInfo.memberAccount}</td><td>${memberInfo.memberName}</td><td>${memberInfo.phone}</td><td>${memberInfo.ageRange}</td><td>${memberInfo.points}</td></tr>`)


                $('#memberOrdersTable').append(`<tr><th>訂單資訊</th><th>金額</th><th>訂單日期</th><th>訂單狀態</th></tr>`)
                for (let item of orders) {
                    let strOrderInfo = item.orderInfo
                    let intTotalPrice = item.totalPrice
                    let orderTime = item.orderDatetime.replace('T', ' ')
                    let strorderState = item.orderState

                    let eachOrder = strOrderInfo.split(',')
                    let orderStr = ''
                    for (let item2 of eachOrder) {
                        let orderName = item2.split('=')[0].trim()
                        let orderAmount = item2.split('=')[1].trim()
                        orderStr += '餐點: ' + orderName + ' 數量: ' + orderAmount
                    }
                    $('#memberOrdersTable').append(`<tr><td>${orderStr}</td><td>${intTotalPrice}</td><td>${orderTime}</td><td>${strorderState}</td></tr>`)
                }

            }

        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}

function checkout(strAccount, strPwd) {
    let objPostData = { memberAccount: strAccount, memberPwd: strPwd }

    $.ajax({
        url: 'http://localhost:8080/customerOrder',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '購物車為空') {
                alert('購物車為空')
            } else if (message === 'Success') {
                alert('Success')
                window.location.href = 'memberInformation.html'
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}

function shoppingCart() {
    let mapOrderMap = { 'beef': 3, 'fish': 4 }
    let objPostData = { orderInfoMap: mapOrderMap }

    $.ajax({
        url: 'http://localhost:8080/shopping_cart',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '購物車為空') {
                alert('購物車為空')
            } else {
                alert('Success')

            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}

function showShoppingCart() {


    $.ajax({
        url: 'http://localhost:8080/show_shopping_cart',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(''),
        success: function (res) {

            let { message, orderInfoMap, totalPrice } = res

            if (message === '購物車為空') {
                alert('購物車為空')
            } else {
                alert('Success')

                $('#shopCart').empty()

                $.each(orderInfoMap, function (key, value) {
                    $('#shopCart').append(`<div  class="col-md-12">
                <div class="single-facility">
                        <p>餐點: ${key} 數量: ${value}</p> 
                    </div>
                </div>`)
                })
                $('#shopCartTotal').append(`
                <div class="single-facility">
                    <p>總金額: ${totalPrice}</p>                    
                                    </div>`)

            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}