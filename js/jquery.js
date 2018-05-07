$(document).ready(function(){
    clickButton();
});

function clickButton(){
    $('#btn').click(function(){
        $.getJSON(
        'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
        function(data){
            $.each(data, function(key, value) {
                $('#btn').after('<p>' + key + ': ' + value + '</p>');
            });
        }
        );    
    });
}
//
//mozna tez to zrobic tak:
//$('body').append($('<p>').text(data.userId;

