$(document).ready(function(){
// alla pressione di enter invio il messaggio
    $('#chat-type').keydown(myMessage);




    // al click su send invia il messaggio
    $('#send').click(function(){
        //prendo valore input
        var valore = $('#chat-type').val();
        //controllo che il messaggio non sia vuoto
        if (valore != '') {
        // per inserire faccio il clone
        var el = $('.template-mine .my-chat-container').clone();
        // ho personalizzato il clone
        el.find('.chat-time').append(time());
        // aggiungo il valore alla chat
        el.find('.my-chat-text').append(valore);
        // lo aggiungo al document .active
        $('.chat-area-margin.active').append(el);

        // richiamo funzione automatica di risposta con un secondo di ritardo
        setTimeout(answer, 1000);
        }
    });

    //per selezionare la chat
    $('.friend').click(function(){
        //prendo posizione dei contatti sulla sx
        var posizione = $(this).index();
        //rimuovo classe active dalla chat
        $('.chat-area .chat-area-margin').removeClass('active');
        //aggiungo la classe active alla chat di indice selezionato dai contatti
        $('.chat-area .chat-area-margin').eq(posizione).addClass('active');
        // tolgo la classe .active
        $('.friend').removeClass('active');
        $('.friend').eq(posizione).addClass('active');


    });

//*************funzioni**************

    // funzione myMessage per inviare msg

    function myMessage(){
        if (event.which == 13 || event.keyCode == 13) {
            // prendo il contenuto dell'input
            var valore = $('#chat-type').val();
            //aggiungo controllo se il messaggio è vuoto non inviarlo
            if(valore != ''){
            // per inserire faccio il clone
            var el = $('.template-mine .my-chat-container').clone();
            // ho personalizzato il clone
            el.find('.chat-time').append(time());
            // aggiungo il valore alla chat
            el.find('.my-chat-text').append(valore);
            //lo aggiungo al DOM
            $('.chat-area-margin.active').append(el);

            // richiamo funzione automatica di risposta con un secondo di ritardo
            setTimeout(answer, 1000);
            }
        }
    }
            //funzione per stabile l'ora
            function time(){
                var d = new Date();
                var hour = d.getHours();
                var min = d.getMinutes();
                if(min < 10){
                    //aggiungo lo zero quando i minuti sono meno di 10
                    var time = hour + ':' + '0' + min;
                } else {
                    time = hour +':'+ min;
                }

                return time;
            }

            // funzione di risposta automatica 'ok'
            function answer(){
                // per pulire il campo di input
                $('#chat-type').val('');
                var el = $('.template-answer .friend-chat-container').clone();
                // creo un array di frasi random
                var frasiRandom = [
                    'Ciao!',
                    'Come stai?',
                    'Ci possiamo sentire dopo?',
                    'Oggi è una bella giornata!',
                    'Sono in riunione'
                ];
                var indice = numeriRandom(0, frasiRandom.length - 1);
                el.find('.friend-chat-text').append(frasiRandom[indice]);
                el.find('.chat-time').append(time());
                $('.chat-area-margin.active').append(el);

            }

            //funzione random 
            function numeriRandom(min, max){
                return Math.floor(Math.random()*(max - min + 1) + min);
            }


});
