window.onload = function () {

    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }
    var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    var code = document.getElementById("code");
    code.innerHTML = rString;




    var btn = document.getElementById("myCopy");
    btn.addEventListener(
        'click',
        async (e) => {
          var newCode= document.getElementById("code");
          await navigator.clipboard.writeText(newCode.innerText);
          alert("Copy successfully");
        }
    )

}