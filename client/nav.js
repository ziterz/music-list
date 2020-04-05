function SignedIn() {
    $('#LoginPage').hide()
    $('#RegisterPage').hide()
    $('#LoginButton').hide()
    $('#RegisterButton').hide()
    $('#LogoutButton').show()
    $('#AddMusic').hide()
    $('#MainBody').show()
    GetMusic()
}

function NotSignedIn() {
    $('#LoginPage').hide()
    $('#RegisterPage').hide()
    $('#LoginButton').show()
    $('#RegisterButton').show()
    $('#LogoutButton').hide()
    $('#MainBody').hide()
    $('#AddMusic').hide()

}

function GetMusic() {
    console.log('get music')
    $.ajax({
        url: 'http://localhost:3000/musics',
        method: 'GET',
        headers: {
            access_token: localStorage.getItem('access_token')
        }
    })
        .done(function(result) {
            console.log(result)
            $('#TableBody').empty()
            for(let i = 0; i < result.length; i++) {
                $('#TableBody').append(`
                <tr>
                    <td>${result[i].title}</td>,
                    <td>${result[i].artist}</td>
                    <td>${result[i].genre}</td>
                    <td><button id="Delete-${result[i].id}">Delete</button></td>
                </tr>
                `)

                $(`#Delete-${result[i].id}`).on('click', function(e) {
                    e.preventDefault()
                    console.log(result[i].id)
                    $.ajax({
                        url: `http://localhost:3000/musics/${result[i].id}`,
                        method: 'DELETE',
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        }
                    })
                    .done(function(result) {
                        GetMusic()
                    })
                    .fail(function(err) {
                        console.log(err)
                    })
                })
            }
        })
        .fail(function(err) {
            console.log(err)
        })
}