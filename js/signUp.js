$(document).on('click', '#memberSignUpBtn', function (e) {
    e.preventDefault()

    let strAccount = $('#account').val()
    let strPwd = $('#pwd').val()
    let strName = $('#name').val()
    let strPhone = $('#phone').val()
    let intAge = $('#age').val()
    let strLineId = $('#lineId').val()
    let strEmail = $('#email').val()
    console.log(strAccount)
    console.log(strPwd)

    if (strAccount == '' || strPwd == '' || strName == '' || strPhone == '') {
        alert('請輸入必填項目')
        return
    }

    signUp(strAccount, strPwd, strName, strPhone, intAge, strLineId, strEmail)
})