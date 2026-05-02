    // 1. Función para calcular el IMC
        function calcularIMC() {
            try {
            //Se recogen los datos tipo String para poder hacer el if en caso de que sea =""
                const pesoInput = document.getElementById("peso").value;
                const alturaInput = document.getElementById("altura").value;

                // Campos vacíos
                if (pesoInput === "" || alturaInput === "") {
                    throw new Error("Todos los campos son obligatorios");
                  }
                  //Se pasa el String a float (decimal)
                      const peso = parseFloat(pesoInput);
                      const altura = parseFloat(alturaInput);

                        // No son números
                        if (isNaN(peso) || isNaN(altura)) {
                            throw new Error("Debes introducir números válidos");
                        }

                        // Valores incorrectos
                        if (peso <= 0 || altura <= 0) {
                            throw new Error("Los valores deben ser mayores que 0");
                        }
                        //Caculo del IMC
                            const IMC = peso / (altura * altura);
                        
                        let texto;
                        let color;
                        
                      //Clasificación
                         if (IMC < 18.5) {
                              texto = "Clasificación: Bajo peso";
                              color = "orange";
                          } else if (IMC <= 24.9) {
                              texto = "Clasificación: Peso normal";
                              color = "green";
                          } else if (IMC <= 29.9) {
                              texto = "Clasificación: Sobrepeso";
                              color = "orange";
                          } else {
                              texto = "Clasificación: Obesidad";
                              color = "red";
                          }
                              const resultado = document.getElementById("resultado");
                              resultado.textContent = texto + " (IMC: " + IMC.toFixed(2) + ")";//Dos decimales
                              resultado.style.color = color;

                          } catch (error) {
                              document.getElementById("resultado").textContent = error.message;
                          }
                      }

                            // 2. Bloque de código para el cambio de imágenes con un clic
                            const principal = document.getElementById("principal"); 
                            //Se guardan las fotos en variables
                            const f1 = document.getElementById("Foto1");
                            const f2 = document.getElementById("Foto2");
                            const f3 = document.getElementById("Foto3");

                            // Validamos que los elementos existan para evitar errores en la consola
                            //Hacemos el cambio de imagen con la principal
                            if (principal && f1 && f2 && f3) {
                                function cambiarImagen(foto) {
                                let temporal = principal.src; 
                                principal.src = foto.src;
                                 foto.src = temporal;
                            }
                            //En el click en una imagen se llama al metodo cambiarImagen
                            //El addEventListener hace que cuando se haga click cambia de imagen
                                f1.addEventListener("click", function() { cambiarImagen(f1); });
                                f2.addEventListener("click", function() { cambiarImagen(f2); });
                                f3.addEventListener("click", function() { cambiarImagen(f3); });
                            }
                            
                          //3. Método para enviar formulario controlado por excepciones
                              function Enviar() {
                              //Se guardan los inputs en variables
                                  const nombre = document.getElementById("nombre").value;
                                  const email = document.getElementById("email").value;
                                  //Casos controlados
                                    try {
                                      //Campo nombre vacio
                                          if (nombre === "") {
                                                throw "El campo nombre es obligatorio rellenarlo";
                                          }
                                      //Longitud del campo nombre
                                          if (nombre.length <= 3) {
                                                throw "El nombre tiene que contener al menos tres letras.";
                                          }
                                      //Campo email vacio
                                          if (email === "") {
                                               throw "Es obligatorio rellenar el campo de email";
                                          }
                                      //El campo email debe incluir el arroba
                                          if (!email.includes("@")) {
                                              throw "La arroba es obligatoria en el correo.";
                                          } 
                                      //El mensaje saldrá en forma de alerta
                                        alert("El formulario se ha enviado correctamente.");
                                      
                                    } catch (error) {
                                    //El mensaje saldrá en forma de alerta
                                        alert(error);
                                    }
                                }