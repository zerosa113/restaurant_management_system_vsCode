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

    // 尋找 @ 的位置，0 代表開始尋找的起始位置
    index = strEmail.indexOf('@', 0)
    var age = document.getElementById("age")
    var phone = document.getElementById("phone")
    var email = document.getElementById("email")

    if (strAccount == '' || strPwd == '' || strName == '' || strPhone == '') {
        alert('請輸入必填項目')
        return
    } else if (intAge != '' && intAge < 1) {
        alert('請填寫正確歲數')
        $('#age').toggleClass('invalid')
        return
    } else if (strPhone.length < 10) {
        alert('請填寫正確手機號碼')
        age.classList.remove('invalid')
        $('#phone').toggleClass('invalid')
        return

        // 必須包含@、@之前不可為空字串、@之後不可為空字串
    } else if (index == -1 || index == 0 || index == email.length - 1) {
        alert('請填寫正確的信箱格式')
        phone.classList.remove('invalid')
        $('#email').toggleClass('invalid')
        return
    }

    email.classList.remove('invalid')

    signUp(strAccount, strPwd, strName, strPhone, intAge, strLineId, strEmail)
})