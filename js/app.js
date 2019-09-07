// Whatever you want here...

$(function(){

    var container = $("#results");
    var title;
    var imahe = $(".imahe");
        
        $(".imahe").remove();
       $.ajax({
     type: 'GET',
     url: 'https://pelec4.herokuapp.com/movies',
     dataType: 'json',
     success: function(data) {

         for (var i = 0; i < data.length; i++) {
            var items = data[i];
            

                $('img').on("error",function(){
                    $(this).attr('src','./broke.jpg');
                })
            
            

             
           

             $('#results').append('<div class="block"></div>');
             var $block = $('#results').find('.block').last();
             console.log(items.title);
          
             li= `
                <li>
                      <div class="partition">

                         <h2> 
                         
                          ${items.title}
                         </h2>
                         
                         <img src="${items.poster}" alt="">
                           
                         <p>
                        Plot: ${items.plot}
                       
                         </p>
                         <p>
                          Genres: ${items.genres}
                         </p>
                      </div>
                   </li>   
                 `
                  container.append(li);
         }
     }
 });


  })
      
 
