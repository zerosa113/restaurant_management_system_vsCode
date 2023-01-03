$(document).ready(function () {

    searchMemberInfo()
})

$(document).on('click', '#memberInfoBtn', function (e) {
    e.preventDefault()

    searchMemberInfo()
    alert('更新會員資訊')
})
