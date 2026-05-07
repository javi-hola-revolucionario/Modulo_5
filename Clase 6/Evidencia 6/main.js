document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      if(nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        return;
      }

      const validacionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (validacionCorreo.test(correo)) {

        alert('Ingresa un correo electronico valido');
        return;
    }

    const validacionTelefono = /^[0-9]+$/;

    if(validacionTelefono.test(telefono)) {
        alert('El telefono solo debe contener numeros.');
        return;
    }
      
    if (!hora) {
        alert('Selecciona una hora para el evento.');
        return;
    }

      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });