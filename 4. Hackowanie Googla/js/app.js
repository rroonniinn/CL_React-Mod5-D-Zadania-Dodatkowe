$(function() {
    var $btnSearch = $('button');
    console.log ( $('input') );

    var url = 'https://www.googleapis.com/books/v1/volumes?q='

    $btnSearch.on('click',function(search){
       
        search.preventDefault()
        
        var $inputVal = $('input').val();
        var searchValue = $inputVal;

        $.ajax({
              url: url + searchValue ,
              method: 'get',
              dataType: 'json'
            }).done(function(data) {
                //    console.log ( data );
                   var books = data.items;
                   for (var i=0;i<books.length;i++) {
                       var book = books[i].volumeInfo;
                       var title = book.title;
                       var author = book.authors;
                       var pages = book.pageCount;
                       var href = book.infoLink;
                       $('.books').append(`
                        <li>
                        <b>${title}</b><br>
                        Autor: ${author}<br>
                        Liczba stron: ${pages}<br>
                        <a href="${href} target="_blank">Link w Google</a>
                        </li>
                       `)
                   }
            }).fail(function (err) {
                console.log ( 'error' );    
                $('.books').append(`
                
                    <li>Zaspamowałeś Googla!!! Nie rób takich rzeczy... To nie ładne zachowanie</li>
                </div>
                `)
            })
    })

})
