$(document).ready(function(){
// alla pressione di enter invio il messaggio
    $('#chat-type').keydown(myMessage);

    function myMessage(){
        if (event.which == 13 || event.keyCode == 13) {
            // prendo il contenuto dell'input
            var valore = $('#chat-type').val();
            // per inserire faccio il clone
            var el = $('.my-chat-container').clone();
            // ho personalizzato il clone
            el.find('.chat-time').append(time());
            el.find('.my-chat-text').append(valore);
            //lo rendo visibile aggiungendo display flex
            el.addClass('flex-right');

            // lo aggiungo al document
            $('.chat-area-margin').append(el);

            setTimeout(answer, 1000);
        }



    }
            //funzione per stabile l'ora
            function time(){
                var d = new Date();
                var hour = d.getHours();
                var min = d.getMinutes();
                var time = hour +':'+ min;
                return time;
            }

            function answer(){
                var el = $('.friend-chat-container').clone();
                el.find('.friend-chat-text').append('ok');
                el.find('.chat-time').append(time());
                $('.friend-chat-container').addClass('flex-left');
                $('.chat-area-margin').append(el);
            }




});
