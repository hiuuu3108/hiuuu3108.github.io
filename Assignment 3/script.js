document.querySelectorAll('.view-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const skillContent = button.previousElementSibling;
        
        if (button.innerText === "View More") {
            skillContent.style.display = "block";
            button.innerText = "View Less";
        } else {
            skillContent.style.display = "none";
            button.innerText = "View More";
        }
    });
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email').value;
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorMessage = document.getElementById('error-message');
    
    if (regex.test(emailInput)) {
        document.getElementById('form-container').classList.add('hide');
        document.getElementById('info-container').classList.remove('hide');
        errorMessage.textContent = ''; 
    } else {
        errorMessage.textContent = 'Email không hợp lệ. Vui lòng nhập lại.';
    }
});