var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var exprienceElement = document.getElementById('exprience');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillsElement && exprienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var exprience = exprienceElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n            <h2>Resume Output</h2>\n            \n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n                \n                <p><strong>Name:</strong> <input type=\"text\" id=\"editableName\" value=\"").concat(name_1, "\" /></p>\n                <p><strong>Email:</strong> <input type=\"email\" id=\"editableEmail\" value=\"").concat(email, "\" /></p>\n                <p><strong>Phone Number:</strong> <input type=\"tel\" id=\"editablePhone\" value=\"").concat(phone, "\" /></p>\n\n                <h3>Education:</h3>\n                <textarea id=\"editableEducation\">").concat(education, "</textarea>\n\n                <h3>Skills:</h3>\n                <textarea id=\"editableSkills\">").concat(skills, "</textarea>\n\n                <h3>Experience:</h3>\n                <textarea id=\"editableExperience\">").concat(exprience, "</textarea>\n            \n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('One or more output element are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
