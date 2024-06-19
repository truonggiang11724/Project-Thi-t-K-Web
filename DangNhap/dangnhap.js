const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpBtn.addEventListener('click', () => {
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const error = document.getElementById('signUpError');
    
    if (!name || !email || !password) {
        error.textContent = "Chưa nhập đủ thông tin";
    } else {
        error.textContent = "";
        alert('Account created successfully!');
        // Xử lý đăng ký
    }
});

signInBtn.addEventListener('click', () => {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    const error = document.getElementById('signInError');
    
    if (!email || !password) {
        error.textContent = "Chưa nhập đủ thông tin";
    } else {
        error.textContent = "";
        alert('Signed in successfully!');
        // Xử lý đăng nhập
    }
});
