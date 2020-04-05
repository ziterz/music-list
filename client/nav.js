function SignedIn() {
    $('#LoginPage').hide()
    $('#RegisterPage').hide()
    $('#LoginButton').hide()
    $('#RegisterButton').hide()
    $('#LogoutButton').show()
}

function NotSignedIn() {
    $('#LoginPage').hide()
    $('#RegisterPage').hide()
    $('#LoginButton').show()
    $('#RegisterButton').show()
    $('#LogoutButton').hide()
}

function GetMusic() {
    $.ajax({
        url: 'http://localhost:3000/musics',
        method: 'GET',
        headers: {
            access_token: localStorage.getItem('access_token')
        }
    })
}