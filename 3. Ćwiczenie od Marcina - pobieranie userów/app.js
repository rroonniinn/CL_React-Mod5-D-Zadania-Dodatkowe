$(function() {
    var $usersList = $('#usersList');
    var $url = 'https://jsonplaceholder.typicode.com/'

    /*polacz sie z
    https://jsonplaceholder.typicode.com/

    pobierz użytkowników

    Wygeneruj dla każdego użytkownika kontener z html,
    który masz podany w elemencie #usersList

    po kliknięciu w button w takim kontenerze, pobierz posty dla tego usera
    i wrzuć je do tego kontenera do elementu .user-posts-list, po czym
    rozwin ten element i zmień tekst na buttonie na "Hide posts".

    Po ponownym kliknięciu w button, zwiń liste postów i zmień przycisk na "Show posts"

    */
    
    $.ajax({
      url: $url + 'users',
      method: 'get',
      dataType: 'json'
    }).done(function(data) {
           
        $userList =  data;

        for (var i=0;i<$userList.length;i++) {
            var $block = $(
            `<article class="user-cnt" data-id="${$userList[i].id}">
            <h2 class="user-name">${$userList[i].name}</h2>
            <div class="address">
                    Phone: ${$userList[i].phone}<br>
                    email: <a href="mailto: ${$userList[i].email}">${$userList[i].email}</a>
                </div>
                <button type="button" class="btn show-posts">Show posts</button>
                <div class="user-posts">
                    <h2 class="user-posts-title">User posts:</h2>
                    <div class="user-posts-list">
                    </div>
                </div>
            </article>`

            )
            $('#usersList').append($block);

            } 
    });


    $('#usersList').on('click','.show-posts',function(el){
        
        $btn = $(this);
        $id = $btn.parent().data('id');
        
        if ($btn.text() === 'Show posts') {
        
            // Ajax start    
            $.ajax({
                url: $url + 'posts?userId='+$id,
                method: 'get',
                dataType: 'json'            
            }).done(function(res){

                for (var i=0;i<res.length;i++) {
                    var $post = $(`
                        
                        <div class="post">
                            <h3 class="post-title"> ${res[i].title} </h3>
                            <div class="post-body"> ${res[i].body}
                            </div>
                        </div>         
                    `);
                    $btn.parent().find('.user-posts-list').append($post);
                    $btn.text('Hide post');
                    $btn.next().show();
                }

            }) // Ajax end
        } else {
            $btn.next().toggle();
            $btn.text('Show posts');
        }

    })

})
