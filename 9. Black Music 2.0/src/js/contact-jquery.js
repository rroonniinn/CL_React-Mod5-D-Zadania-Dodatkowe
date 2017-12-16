function contactForm() {
    const $form = $('.form');
    $form.attr('novalidate', 'novalidate');
    $form.on('submit', function(e) {
        e.preventDefault();
        const $inputs = $form.find('input, textarea');
        const $submit = $form.find('button[type=submit]');

        let formHasError = false;
        $form.find('.form-message').remove();

        $inputs.each(function() {
            const $inp = $(this);
            if (!$inp[0].checkValidity()) {
                $inp.addClass('error');
                formHasError = true;
            } else {
                $inp.removeClass('error');
            }
        })

        if (!formHasError) {
            
            $submit.addClass('loading');
            $submit.attr('disabled','disabled');

            $.ajax({
                url : $form.attr('action'),
                method : $form.attr('method'),
                dataType : 'json',
                data : {
                    name: $('input[name="name"]').val(),
                    email: $('input[name="email"]').val(),
                    message : $('textarea[name="message"]').val(),
                }
            }).done(function() {
                if (!$('.form-message').length) {
                    const $div = $('<div class="form-message">Wysłano wiadomość</div>');
                    $('.form-row-last').append($div);
                }
            }).always(function() {
                $submit.removeClass('loading');
                $submit.removeAttr('disabled');
            })
        }
    });
}

export { contactForm }