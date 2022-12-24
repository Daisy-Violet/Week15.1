function check() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");

    document.getElementById('errorMessage').innerHTML = "";

    if (name.value == '') {
        document.getElementById('errorMessage').innerHTML += "Вы не указали имя<br>";
    }
    if (email.value == '') {
        document.getElementById('errorMessage').innerHTML += "Вы не указали email<br>";
    }
    if (phone.value == '') {
        document.getElementById('errorMessage').innerHTML += "Вы не указали телефон<br>";
    }
    if (userName.value == '') {
        document.getElementById('errorMessage').innerHTML += "Вы не указали логин<br>";
    }
    if (password.value == '') {
        document.getElementById('errorMessage').innerHTML += "Вы не указали пароль<br>";
    }
    if (password.value.length <= 5) {
        document.getElementById('errorMessage').innerHTML += "Ваш пароль слишком короткий<br>";
    }
    else {
        alert(`Добро пожаловать, ${name.value}!`)
    }
}

