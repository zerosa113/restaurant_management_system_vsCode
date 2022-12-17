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
