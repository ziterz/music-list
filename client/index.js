

$(document).ready(function() {
    if(localStorage.getItem('access_token')) {
        SignedIn()
    }
    else {
        NotSignedIn()
    }

    $("#RegisterButton").on('click', function(e) {
        e.preventDefault()
        NotSignedIn()
        $('#RegisterPage').show()
    })

    $("#LoginButton").on('click', function(e) {
        e.preventDefault()
        NotSignedIn()
        $('#LoginPage').show()
    })

    $('#LogoutButton').on('click', function(e) {
        e.preventDefault()
        NotSignedIn()
        localStorage.clear()
    })
    $('#CreateMusic').on('click', function(e) {
        e.preventDefault()
        $('#MainBody').hide()
        $('#AddMusic').show()
    })
    $('#CreateCancel').on('click', function(e) {
        $('#MusicTitle').val('')
        $('#MusicArtist').val('')
        $('#MusicGenre').val('')
        $('#MainBody').show()
        $('#AddMusic').hide()
    })

    $('#RegisterForm').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            url: 'http://localhost:3000/register',
            method: 'POST',
            data: {
                email: $('#RegisterEmail').val(),
                password: $('#RegisterPassword').val()
            }
        })
            .done(function(result) {
                $('#RegisterEmail').val(''),
                $('#RegisterPassword').val('')
                $('#RegisterForm').hide()
                $('#LoginForm').show()
                console.log(result)
            })
            .fail(function(err) {
                console.log(err)
            })
    })

    $('#LoginForm').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            url: 'http://localhost:3000/login',
            method: 'POST',
            data: {
                email: $('#LoginEmail').val(),
                password: $('#LoginPassword').val()
            }
        })
            .done(function(result) {
                SignedIn()
                localStorage.setItem('access_token', result.access_token)
                GetMusic()
                $('#MainBody').show()
                console.log(result)
                $('#LoginEmail').val(''),
                $('#LoginPassword').val('')
            })
            .fail(function(err) {
                console.log(err)
            })
    })

    $('#MusicForm').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            url: 'http://localhost:3000/musics',
            method: 'POST',
            headers: {
                access_token: localStorage.getItem('access_token')
            },
            data: {
                title: $('#MusicTitle').val(),
                artist: $('#MusicArtist').val(),
                genre: $('#MusicGenre').val()
            }
        })
        .done(function(result) {
            GetMusic()
            $('#MusicTitle').val('')
            $('#MusicArtist').val('')
            $('#MusicGenre').val('')
            $('#MainBody').show()
            $('#AddMusic').hide()
        })
        .fail(function(err) {

        })
    })
})