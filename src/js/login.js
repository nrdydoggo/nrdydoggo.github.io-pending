var logcount = 3;
var inptcount = 0;
function LoginEnter()
{
    if(window.event.keyCode == 13)
    {
        Login();
    }
}
function Register()
{
    alert("Redirecting to registration page.");
    window.location.assign("RegstrPage.html");
    return false;
}
function Login()
{
    var id = document.getElementById("idinpt").value;
    var pw = document.getElementById("pwinpt").value;
    event.preventDefault();
    if(id == "test" && pw == "1234")
    {
        alert("Signed in successfully.");
    // It goes to SubmitPage.html in the end.
        window.location.assign("SubmitPage.html");
        return false;
    }
    else
    {
        if(inptcount == 3)
        {
            inptcount = 0;
            document.getElementById("idinpt").disabled = true;
            document.getElementById("pwinpt").disabled = true;
            document.getElementById("enter").disabled = true;
            return false;
        }
        alert("You've entered wrong ID or PW, after " + (logcount - inptcount) + " times later, sign in session will be disabled.");
    }
    inptcount++;
}