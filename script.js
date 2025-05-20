document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (email === 'baruc@medtrack.com' && senha === '1234') {
      alert('Login bem-sucedido!');
    } else {
      alert('E-mail ou senha inválidos.');
    }
  });
  
  function cadastrar() {
    alert('Redirecionando para a tela de cadastro...');
    // Aqui poderia redirecionar para outra página:
    // window.location.href = "cadastro.html";
  }
  