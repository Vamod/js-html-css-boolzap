$(document).ready(function(){

    $('#chat-type').keydown(myMessage);

    function myMessage(){
        if (event.which == 13 || event.keyCode == 13) {
            // prendo il contenuto
            var valore = $('#chat-type').val();
            // per inserire faccio il clone
            var el = $('.my-chat-container').clone();
            // ho personalizzato il clone
            el.find('.chat-time').append(time())
            el.find('.my-chat-text').append(valore);

            el.addClass('flex-right');

            // lo aggiungo al document

            $('.chat-area-margin').append(el);
        }

        function time(){
            var d = new Date();
            var hour = d.getHours();
            var min = d.getMinutes();
            var time = hour +':'+ min;
            return time;

        }
    }

});
