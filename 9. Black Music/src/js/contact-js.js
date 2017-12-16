function contactForm() {
    const form = document.querySelector('.form');
    form.setAttribute('novalidate', 'novalidate');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        const submit = form.querySelector('button[type=submit]');

        const inpuName = document.querySelector('input[name="name"]');
        const inpuEmail = document.querySelector('input[name="email"]');
        const inpuMsg = document.querySelector('textarea[name="message"]');

        let formHasError = false;

        //usuwam widoczna wiadomosc - np jezeli wysylam 2 raz
        const message = form.querySelector('.form-message');
        if (message!== null) {
            message.parentElement.removeChild(message);
        }

        //petla po inputach - spradzam ich poprawnosc
        //za pomoca checkValidity() (szukaj w necie)
        for (var i=0; i<inputs.length; i++) {
            const inp = inputs[i];

            if (!inp.checkValidity()) {
                inp.classList.add('error');
                formHasError = true;
            } else {
                inp.classList.remove('error');
            }
        }

        //jezeli nie ma bledow
        if (!formHasError) {
            //dodaje loading do submit i wylaczam go na czas wysylki
            submit.classList.add('loading');
            submit.setAttribute('disabled', 'disabled');

            //wysylam ajax za pomoca xmlhttprequest
            //jest to obiekt do oblugi ajaxa w js
            //niebawew stosowny artykul pojawi sie na http://kursjs.pl/kurs/ajax/ajax.php
            const ajax = new XMLHttpRequest();   // new HttpRequest instance

            //na poczatku otwieram polaczenie
            const method = form.getAttribute('method');
            const action =form.getAttribute('action');
            ajax.open(method, action);

            //jezeli ponizej nie korzystal bym z formData ale z JSON.strigfity
            //https://stackoverflow.com/questions/6418220/javascript-send-json-object-with-ajax
            //to musialbym dodatkowo wyslac taki naglowek
            //przy formData nie musze tego robic
            //ajax.setRequestHeader("Content-Type", "application/json");

            //po zakonczeniu wysylania i zwrotce spradzam status polaczenia i
            //jezeli jest on 200 (czyli ok), to pokazuje wiadomosc
            ajax.addEventListener('load', function() {
                if (ajax.readyState === 4 && ajax.status === 200) {

                    if (form.querySelector('.form-message') === null) {
                        const div = document.createElement('div');
                        div.innerText = 'Wysłano wiadomość';
                        div.classList.add('form-message');
                        form.querySelector('.form-row-last').appendChild(div);
                    }

                    inpuName.value = '';
                    inpuEmail.value = '';
                    inpuMsg.value = '';

                }
                submit.classList.remove('loading');
                submit.removeAttribute('disabled');
            });

            //formData sluzy do generowania danych do wysylania
            //normalie trzeba by je zakogowac (cos jak w url strony)
            //dzieki formData wszystko dzieje sie automatycznie
            const data = new FormData();
            data.append('name', inpuName.value);
            data.append('email', inpuEmail.value);
            data.append('message', inpuMsg.value);

            //po podpieciu powyzej eventow i przygotowaniu danych wysylam rządanie
            ajax.send(data);
        }
    })
}

export { contactForm }