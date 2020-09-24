document.addEventListener('keypress', textarea);

function textarea(touch) {
    a = touch.key;
    area = document.getElementById("keylogger").value;
    text = area + a;
    document.getElementById("keylogger").value = text;
}