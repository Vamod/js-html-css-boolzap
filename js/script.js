$(document).ready(function(){
// alla pressione di enter invio il messaggio
    $('#chat-type').keydown(myMessage);

    function myMessage(){
        if (event.which == 13 || event.keyCode == 13) {
            // prendo il contenuto dell'input
            var valore = $('#chat-type').val();
            // per inserire faccio il clone
            var el = $('.template-mine .my-chat-container').clone();
            // ho personalizzato il clone
            el.find('.chat-time').append(time());
            el.find('.my-chat-text').append(valore);

            // lo aggiungo al document
            $('.chat-area-margin').append(el);

            // richiamo funzione automatica di risposta con un secondo di ritardo
            setTimeout(answer, 1000);
        }
    }

    $('#send').click(function(){
        var valore = $('#chat-type').val();
        // per inserire faccio il clone
        var el = $('.template-mine .my-chat-container').clone();
        // ho personalizzato il clone
        el.find('.chat-time').append(time());
        el.find('.my-chat-text').append(valore);

        // lo aggiungo al document
        $('.chat-area-margin').append(el);

        // richiamo funzione automatica di risposta con un secondo di ritardo
        setTimeout(answer, 1000);
    });


            //funzione per stabile l'ora
            function time(){
                var d = new Date();
                var hour = d.getHours();
                var min = d.getMinutes();
                var time = hour +':'+ min;
                return time;
            }

            // funzione di risposta automatica 'ok'
            function answer(){
                var el = $('.template-answer .friend-chat-container').clone();
                el.find('.friend-chat-text').append('ok');
                el.find('.chat-time').append(time());
                $('.chat-area-margin').append(el);
            }




});
