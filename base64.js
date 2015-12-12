// Add content divs for base64 and plain text text field

var base64Label = document.createElement("span");
base64Label.innerHTML = "Base64";

var base64Input = document.createElement("textarea");
base64Input.style.width = "100%";
base64Input.style.height = "100%";

var base64LabelContainer = document.getElementById("base64Label");
base64LabelContainer.insertBefore(base64Label, null);

var base64ContentContainer = document.getElementById("base64Content");
base64ContentContainer.insertBefore(base64Input, null);

var plainTextLabel = document.createElement("span");
plainTextLabel.innerHTML = "Plain text";

var plainTextInput = document.createElement("textarea");
plainTextInput.style.width = "100%";
plainTextInput.style.height = "100%";

var plainTextLabelContainer = document.getElementById("plainTextLabel");
plainTextLabelContainer.insertBefore(plainTextLabel, null);

var plainTextContentContainer = document.getElementById("plainTextContent");
plainTextContentContainer.insertBefore(plainTextInput, null);

// Register change event
base64Input.oninput = function (event) {
	plainTextInput.value = window.atob(this.value);
};

plainTextInput.oninput = function (event) {
	base64Input.value = window.btoa(this.value);
};
