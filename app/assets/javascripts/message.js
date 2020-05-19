$(function(){
     function buildHTML(message){
       if ( message.image ) {
         var html =
          `
            <div class="message-list__user1">
              <div class="user1-name">
                ${message.user_name}
              </div>
              <div class="user1-name__time">
                ${message.created_at}
              </div>
            </div>
            <div class="message-list__user1-message">
              <p class ="message-list__user1-message__content">
                ${message.content}
              </p>
            </div>
            <div class="message-list__user1-message">
            <img class ="message-list__user1-message__image" src=${message.image} >
            </div>
         `
          return html;
       }  else  {
        var html =
          `
            <div class="message-list__user1">
              <div class="user1-name">
                ${message.user_name}
              </div>
              <div class="user1-name__time">
                ${message.created_at}
              </div>
            </div>
            <div class ="message-list__user1-message">
              <p class ="message-list__user1-message__content">
                ${message.content}
             </p>
            </div>
          `
          return html;
       };
     }

$('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this)
    var url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('.new_message')[0].reset();  
      $('.form__submit').prop('disabled', false);
    })

    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
    
    
})



});