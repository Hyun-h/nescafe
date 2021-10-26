window.onload = function() {
    document.getElementById("num_pw").onkeyup = function(e) {
        if( document.getElementById("num_pw").value != "" && e.keyCode == 13) {
            // e.keyCode 는 엔터키를 의미합니다.
            alert("비밀번호는 : " + document.getElementById("num_pw").value);
        } else {
            document.getElementById("num_pw").value = numberOnly(document.getElementById("num_pw").value);
        }
    }
}

function numberOnly(input) {
    return input.replace(/[^0-9]/g,"");
}