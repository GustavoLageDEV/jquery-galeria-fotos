$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel-button').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();

        const urlNewImg = $('#url-new-image').val();
        const newItem = $('<li style="display:none"> </li>');

        $(`<img src = "${urlNewImg}" >`).appendTo(newItem);
        $(`
            <div class = "overlay-img-link">
                <a href = "${urlNewImg}" target = "_blank" title = "Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                <a/>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#url-new-image').val('');
    })
})   