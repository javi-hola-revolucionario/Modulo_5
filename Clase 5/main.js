import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo electrónico inválido"),
  age: z.number().int().positive("La edad debe ser un número positivo"),
});

document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: Number(document.getElementById("age").value),
  };

  try {
    userSchema.parse(formData);
    alert("Formulario enviado correctamente");
  } catch (error) {
    alert(`Errores: ${error.errors.map(e => e.message).join(", ")}`);
  }
});