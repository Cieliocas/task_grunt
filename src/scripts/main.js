
document.querySelector('.card-login-button').addEventListener('click', function() {
    const usuario = document.querySelector('input[name="usuario"]').value;
    const senha = document.querySelector('input[name="senha"]').value;

    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
});

const passwordField = document.querySelector('input[name="senha"]');
const togglePassword = document.createElement('button');
togglePassword.textContent = 'Mostrar';
passwordField.parentNode.appendChild(togglePassword);

togglePassword.addEventListener('click', function() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.textContent = 'Ocultar';
    } else {
        passwordField.type = 'password';
        togglePassword.textContent = 'Mostrar';
    }
});
