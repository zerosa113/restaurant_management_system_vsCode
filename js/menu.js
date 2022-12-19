$(document).ready(function () {
    getAllMenu()

    $('#btnSearch').click(function (e) {
        e.preventDefault()

        let strCategory = $('#txtCategory').val()

        if (!strCategory) {
            alert('Please enter category.')
            return
        }

        searchCategory(strCategory)
        $('#txtCategory').val('')
    })

    $('#btnAllMenu').click(function (e) {
        e.preventDefault()

        getAllMenu()
        $('#txtCategory').val('')
    })

})