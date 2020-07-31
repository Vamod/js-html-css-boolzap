$(document).ready(function(){
    $('.icon-send').click(function(){
        sendMessaggio();
    });
    $('input.send-message').keydown(function(){
        if(event.which == 13 || event.keyCode == 13){
            sendMessaggio();
        }
    });
});







//funzioni fuori
function sendMessaggio(){
    //prendere il valore di input
    $ valoreInput = $('input.send-message').val();
    //clonare il template e aggiungere i valori opportuni
    var nuovoMessaggio = $('.template .message').clone();
    nuovoMessaggio.addClass('sent'); //aggiunta la classe
    nuovoMessaggio.find('.message-text').append(valoreInput); //aggiunto il valore
    var time = data();
    nuovoMessaggio.find('.message-time').append(time);
    // inserirlo nel DOM
    $('.col-right-message.active').append(nuovoMessaggio);
    // risposta automatica
    setTimeout(sendRisposta, 1000);
}

function sendRisposta (){
    //clonare il template e aggiungere i valori opportuni
    var nuovoMessaggio = $('.template .message').clone();
    nuovoMessaggio.addClass('receveid'); //aggiunta la classe
    nuovoMessaggio.find('.message-text').append('ok'); //aggiunto il valore
    var time = data();
    nuovoMessaggio.find('.message-time').append(time);
}


function data(){
    var d = new Date();
    var ora = addZero(d.getHours());
    var m = add(d.getMinutes());
    return ora + ':' + m;
}

function addZero(numero){
    if(numero < 10){
        return '0' + numero;
    }
    return numero;
}
