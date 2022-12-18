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

            let { message, list } = res

            if (message === '尚未登入') {
                alert('尚未登入')
                window.location.href = 'signIn.html'
            } else if (message === '尚無購買紀錄') {
                alert('尚無購買紀錄')
            } else if (message === 'Success') {
                alert('Success')

                $('#memberInfoTable').empty()
                $('#memberInfoTable').append(`<tr><th>帳號</th><th>姓名</th><th>電話</th><th>年齡</th><th>LineId</th><th>點數</th></tr>`)

                for (let members of list) {
                    $('#memberInfoTable').append(`<tr><td>${members.memberAccount}</td><td>${members.memberName}</td><td>${members.phone}</td><td>${members.ageRange}</td><td>${members.lineId}</td><td>${members.points}</td></tr>`)
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
