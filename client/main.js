let base = 'http://localhost:3000'

$(document).ready(function () {
    // alert('ho')
    auth()
})


function auth() {

    if (localStorage.access_token) {
        $("#login_page").hide()
    } else {
        $("#login_page").show()
    }
}
function login(event) {
    event.preventDefault()
    let email = $("#email").val()
    let password = $("#password").val()

    $.ajax({
        method: 'POST',
        url: base + '/login',
        data: {
            email, password
        }
    }).done(datum => {
        // console.log(success)
        localStorage.setItem('access_token', datum.access_token)
    }).fail(err => {
        console.log(err)
    })
}