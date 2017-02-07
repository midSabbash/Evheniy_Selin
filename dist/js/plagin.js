
;(function () {
    var btn = document.querySelector('.send-btn');
    var name = document.querySelector('input[type="text"]');
    var email = document.querySelector('input[type="email"]');
    var massage = document.querySelector('#commit');

    var regExp_name = /^[a-zA-Zа-яА-Я]+$/; // reg for name
    var regExp_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;  //reg for email


    function validate(e) {
        e.preventDefault();

        regExp_name.test(name.value) ? name.classList.remove('error') : name.classList.add('error');

        regExp_email.test(email.value) ? email.classList.remove('error') : email.classList.add('error');

        massage.value.length > 2 ? massage.classList.remove('error') : massage.classList.add('error');
    }

    btn.addEventListener('click', validate)
})();