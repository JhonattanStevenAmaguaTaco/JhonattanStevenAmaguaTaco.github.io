function validateForm(event) {
    event.preventDefault(); 
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var errors = [];
  
    if (!emailPattern.test(email)) {
      errors.push("Por favor, ingresa un correo electrónico válido.");
    }
  
    if (password.trim() === "") {
      errors.push("Por favor, ingresa una contraseña.");
    }
  
    if (confirmPassword.trim() === "") {
      errors.push("Por favor, confirma tu contraseña.");
    }
  
    if (password !== confirmPassword) {
      errors.push("Las contraseñas no coinciden.");
    }
  

    var errorContainer = document.getElementById("errorContainer");
    if (errors.length > 0) {
      errorContainer.innerHTML = ""; 
  
      errors.forEach(function (error) {
        var errorElement = document.createElement("div");
        errorElement.classList.add("error");
        errorElement.textContent = error;
        errorContainer.appendChild(errorElement);
      });
    } else {
      errorContainer.innerHTML = ""; 
      alert("¡Registro exitoso! El formulario sería enviado aquí.");
      document.getElementById("signupForm").reset(); 
    }
  }
  