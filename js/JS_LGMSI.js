       // Método para calcular el IMC de una persona 
        function calcularIMC() {
          //Obtenemos los elementos HTML . Donde se aplicará el CSS del recuadro rojo
          const pesoInput = document.getElementById("peso");
          const alturaInput = document.getElementById("altura");

          //Obtenemos sus contenidos 
          const pesoValor = pesoInput.value.trim();
          const alturaValor = alturaInput.value.trim();
        
          try {
              // Limpiar errores previos antes de validar
              pesoInput.classList.remove("error");
              alturaInput.classList.remove("error");

              //Campos vacíos
              if (pesoValor == "" || alturaValor == "") {
                  if (pesoValor == "") pesoInput.classList.add("error");
                  if (alturaValor == "") alturaInput.classList.add("error");
                  throw new Error("Todos los campos son obligatorios");
              }

              //Uso de comas
              if (pesoValor.includes(",") || alturaValor.includes(",")) {
                  if (pesoValor.includes(",")) pesoInput.classList.add("error");
                  if (alturaValor.includes(",")) alturaInput.classList.add("error");
                  throw new Error("Usa punto en vez de coma (ej: 70.5 o 1.75)");
              }
                    const peso = parseFloat(pesoValor);
                    const altura = parseFloat(alturaValor);
              
                        // No son números
                        if (isNaN(peso) || isNaN(altura)) {
                           pesoInput.classList.add("error");
                           alturaInput.classList.add("error");
                           throw new Error("Debes introducir números válidos");
                        }
                        //Valores desorbitados
                        if (peso <= 0 || peso > 600) {
                             pesoInput.classList.add("error");
                              throw new Error("El peso debe ser un valor lógico en kg (entre 0 y 600).");
                        }
                        //Control de valores desorbitados
                        if (altura <= 0 || altura >= 3) {
                             alturaInput.classList.add("error");
                             throw new Error("La altura debe estar en metros y ser un valor lógico (ej: 1.75)");
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
                              // Reseteamos el color a uno neutro (o el que tengas por defecto)
                              resultado.style.color = "red";
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
                            
                            
                            
                              // Esperamos a que la página cargue totalmente
                                  document.addEventListener("DOMContentLoaded", function() {
                                  const formulario = document.getElementById("registroForm");
                              // Escuchamos el evento de envío del formulario
                                  formulario.addEventListener("submit", function(event) {
                                  
                              //Evita que la página se recargue sola
                                  event.preventDefault();
                                  
                                // Ahora ejecutamos tu función original de validación
                                  Enviar(); 
                          });
                                // --- SECCIÓN 2: CALCULADORA IMC ---
                                    const btnCalcular = document.getElementById("btnCalcular");
                                    btnCalcular.addEventListener("click", function() {
                                  calcularIMC();
                           });
                });
                          //3. Método para enviar formulario controlado por excepciones
                              function Enviar() {
                              //Se guardan los inputs en variables
                                  const nombre = document.getElementById("nombre").value;
                                  const email = document.getElementById("email").value;
                                  //Casos controlados
                                    try {
                                      //Campo nombre vacio
                                          if (nombre == "") {
                                                throw "El campo nombre es obligatorio rellenarlo";
                                          }
                                      //Longitud del campo nombre
                                          if (nombre.length <= 3) {
                                                throw "El nombre tiene que contener al menos tres letras.";
                                          }
                                      //Campo email vacio
                                          if (email == "") {
                                               throw "Es obligatorio rellenar el campo de email";
                                          }
                                      //El campo email debe incluir el arroba
                                          if (!email.includes("@")) {
                                              throw "La arroba es obligatoria en el correo.";
                                          } 
                                      //El campo tiene que tener un formato
                                          if (!email.includes(".com") && !email.includes(".es")) {
                                              throw "Correo no válido";
                                          }
                                      // Obtenemos lo que hay después de la @
                                        const partes = email.split('@');
                                        const dominio = partes[1]; // Lo que está a la derecha del @
                                    // 2. Validaciones
                                        if (!dominio || dominio.trim() === "" || dominio==".com" || dominio==".es") {
                                            throw "El correo debe tener un dominio después de la @";
                                        }
                                      //El mensaje saldrá en forma de alerta
                                        alert("El formulario se ha enviado correctamente.");
                                      
                                    } catch (error) {
                                    //El mensaje saldrá en forma de alerta
                                        alert(error);
                                    }
                                }