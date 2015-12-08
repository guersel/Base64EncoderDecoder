// Add content divs for base64 and plain text text fields

var base64Div = document.createElement("div");
var plainTextDiv = document.createElement("div");

var body = document.body;

plainTextDiv.style.width = "500px";
plainTextDiv.style.height = "300px";
plainTextDiv.style.border = "1px solid black";
plainTextDiv.style.marginLeft = "auto";
plainTextDiv.style.marginRight = "auto";
plainTextDiv.style.marginTop = "30px";

body.insertBefore(plainTextDiv, null);


base64Div.style.width = "500px";
base64Div.style.height = "300px";
base64Div.style.border = "1px solid black";
base64Div.style.marginLeft = "auto";
base64Div.style.marginRight = "auto";
base64Div.style.marginTop = "30px";

body.insertBefore(base64Div, plainTextDiv);

var base64Input = document.createElement("textarea");
var base64Label = document.createElement("span");
base64Label.innerHTML = "Base64";

var plainTextInput = document.createElement("textarea");


base64Input.style.width = "100%";
base64Input.style.height = "100%";

base64Div.insertBefore(base64Input, null);
base64Div.insertBefore(base64Label, base64Input);




