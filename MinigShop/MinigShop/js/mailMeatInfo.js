$(function () {
  document.getElementById('ajax-contact-foRM').addEventListener('submit', function (evt) {
    var http = new XMLHttpRequest(),
      d = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "mailMeat.php", true);
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
        if (http.responseText.indexOf(d.nameDD.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          th.trigger("reset");
        }
      }
    }
    http.onerror = function () {
      alert('Ошибка, попробуйте еще раз');
    }
    http.send(new FormData(d));
  }, false);

});
