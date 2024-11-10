document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const exprienceElement = document.getElementById('exprience') as HTMLInputElement;

    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillsElement && exprienceElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const exprience = exprienceElement.value;
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        const resumeOutput = `
            <h2>Resume Output</h2>
            
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture" class="profilepicture">` : ''}
                
                <p><strong>Name:</strong> <input type="text" id="editableName" value="${name}" /></p>
                <p><strong>Email:</strong> <input type="email" id="editableEmail" value="${email}" /></p>
                <p><strong>Phone Number:</strong> <input type="tel" id="editablePhone" value="${phone}" /></p>

                <h3>Education:</h3>
                <textarea id="editableEducation">${education}</textarea>

                <h3>Skills:</h3>
                <textarea id="editableSkills">${skills}</textarea>

                <h3>Experience:</h3>
                <textarea id="editableExperience">${exprience}</textarea>
            
        `;



        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
            makeEditable();
        }

    } else {
        console.error('One or more output element are missing')

    }

})


function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}