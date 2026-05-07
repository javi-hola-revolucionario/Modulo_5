// Importamos Zod
    const { z } = window.Zod;

    // Esquema para validar los datos del formulario
    const registerSchema = z.object({
      // PISTA: Define que el nombre debe ser una cadena no vacía.
        name: z.string().min(3, "El nombre es obligatorio"),
      // PISTA: Valida que el correo tenga el formato correcto.
        email: z.string().email("Correo electronico invalido"),
      // PISTA: La contraseña debe tener al menos 6 caracteres.
        password: z
        .string()
        .min(5,"La contraseña debe de ser almenos mas de 5 caracteres"),
    });

    document.getElementById("registerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Capturamos los valores ingresados
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      try {
        registerSchema.parse(formData);
        document.getElementById("errors").textContent = "";
        //registerSchema.___?___(formData);
        alert("¡Registro exitoso!");
      } catch (error) {
        // PISTA: Muestra los mensajes de error en la página.
        alert(`Errores: ${errors}`)
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
      }
    });