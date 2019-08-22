var nampeng, harpeng, total = 0;

$(document).ready(function() {
    start();
});

function start(){
    $('#hapus').on('click', function () {
        $('#nampeng').val('');
        $('#harpeng').val('');
        $('.ionItem').remove();
        $("#fixsum").text('Rp. 0,00');
        total = 0;
        console.log(total)
    } );
  
    $('#tambah').on('click', function () {
    nampeng = $('#nampeng').val();
    harpeng = $('#harpeng').val();
    if(nampeng == '' || harpeng == ''){
        handleButtonClick();
    }
    else{
        sum(nampeng, harpeng);
        $('#nampeng').val('');
        $('#harpeng').val('');
    }
    } );
}

function sum(nampeng, harpeng) {
    var itemAppend1 = '<ion-item class="ionItem">' +
                        '<ion-label>' + nampeng + '</ion-label>' +
                        '<ion-label> Rp. ' + harpeng + ',00</ion-label>' +
                        '</ion-item>';
    total += parseInt(harpeng);
    // $("#list").append(itemAppend1);
    $( itemAppend1).insertBefore( "#list" );

    $("#fixsum").text('Rp. ' + total + ',00');

    console.log(nampeng);
    console.log(harpeng);
}