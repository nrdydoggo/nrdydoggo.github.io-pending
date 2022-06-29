
function enterKey()
{
    if(window.event.keyCode == 13)
    {
        RegConfirm();
    }
}
function RegConfirm()
{
    var regID = document.getElementById("registrID").value;
    var regPW = document.getElementById("registrPW").value;
    var PWverf = document.getElementById("Verify_RegistrPW").value;
    // 특정 숫자 문자 범위 만들 때 /[]/ 로 변수에 대입한다.
    // [JQuery] g: Global, 일치하는 모든 것 검색 / i: Insensitive, 대소문자 구분 없이 검색
    // search() 함수에 검색할 문자는 / / Slash 사이에 넣는다. 특정 문자나 숫자를를 찾을 땐 /[]/ 내부, 공백/줄바꿈 등을 찾을 땐 / /사이에 \n \s 등을 넣는다. 
    var PWNum = regPW.search(/[0-9]/g);
    var PWUppercase = regPW.search(/[A-Z]/g);
    var PWSpecial = regPW.search(/[~!@\#$%<>^&*]/g);
    var space = regPW.search(/\s/g);
        if (regPW != PWverf)
        {
            alert("Password does not match what you've entered.");
            return false;
        }
        else if(regPW.length < 6 || regPW.length > 30)
        {
            alert("Password should be more than 6 letters, not less than 30 letters\nwithout any empty field.");
            return false;
        }
        else if(PWNum < 0 || PWUppercase < 0 || PWSpecial < 0)
        {
            alert("Password must include more than one upeercase, number, special symbol.");
            return false;
        }
        else if (space > 0)
        {
            alert("Password shouldn't include any spaces.");
            return false;
        }
        else
        {
        alert("Registration completed.")
        window.location.assign("Login.html");
        return false;
        }
}

