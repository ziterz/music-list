const baseUrl = `http://localhost:8080`

$(document).ready(function() {
    auth()
})

const hideElement = element => {
    return $(element).hide()
}

const showElement = element => {
    return $(element).show()
}

const hideShowElement = (target, hide, show) => {
    $(target).on('click', (e) => {
        e.preventDefault()
        hideElement(hide)
        showElement(show)
    })
}


function auth() {
    if (localStorage.getItem('token')) {
        hideElement('.limiter')
        $('#mainpage').show()
        getMusic()
    } else {
        $('#mainpage').hide()
        $('.navbar').hide()
        showElement('.limiter')
        showElement('#signup-container')
        hideElement('#signin-container')
        hideShowElement('#signup-bottom-btn', '#signin-container', '#signup-container')
        hideShowElement('#signin-bottom-btn', '#signup-container', '#signin-container')
    }
}

function signOut(e) {
    e.preventDefault()
    localStorage.clear()
    auth()
}

$('#signin-btn').click(e => {
    e.preventDefault()

    $.ajax({
            method: 'post',
            url: `http://localhost:3000/users/login`,
            data: {
                email: $('#email-signin').val(),
                password: $('#password-signin').val()
            }
        })
        .done(result => {
            console.log(result)
            localStorage.setItem('token', result.token)
            $('#email-signin').val('')
            $('#password-signin').val('')
            auth()
                // loginnotif(err.responseJSON.errors[0].message)
        })
        .fail(err => {
            console.log(err)
            $(`#signin-form .auth-notifications`).html(`
            <div class="ui error message error-notif">
            <p>${err.responseJSON.errors[0].message}</p>
            </div>
`)
        })
})

$('#signup-btn').click(e => {
    e.preventDefault()
    $(`#signup-form .auth-notifications`).html('')
    $.ajax({
            method: 'post',
            url: `http://localhost:3000/users/register`,
            data: {
                email: $('#email-signup').val(),
                password: $('#password-signup').val()
            }
        })
        .done(result => {
            auth()

        })
        .fail(err => {
            console.log(err)
            $(`#signup-form .auth-notifications`).html(`
            <div class="ui error message error-notif">
            <p>${err.responseJSON.errors[0].message}</p>
            </div>
`)
        })
})

$('#signin-bottom-btn').click(e => {
    $(`#signin-form .auth-notifications`).html('')
})

$('#signin-bottom-btn').click(e => {
    $(`#signup-form .auth-notifications`).html('')
})

function getMusic() {
    $('#form-notifications').html('')
    console.log('masuk get todo')

    $.ajax({
            method: 'get',
            url: `http://localhost:3000/musics`,
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .done(result => {
            console.log(`inimusics`, result)
            let musics = result.Music
            console.log(musics)
            musics.forEach(music => {
                $('#card-container').append(`<div class="card col-xl-3 m-3 d-flex flex-column align-items-center" id="card" style="width:200px">
                <div class="card-body">
                    <h6 class="card-title">${music.title}</h6>
                    <p class="card-text">artist: ${music.artist}</p>
                    <p class="card-text">genre: ${music.genre}</p>
                  </div>
              </div>`)
            });
        })
        .fail(err => {
            console.log(err)
        })
}