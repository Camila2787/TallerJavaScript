// Agregar una función para validar el inicio de sesión
function validarInicioSesion(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Aquí deberías verificar las credenciales del usuario, por ejemplo, comparando con una lista de usuarios y contraseñas válidas.
  // Si las credenciales son correctas, redirige al usuario al módulo de compras.
  if (username === 'Camila' && password === 'emiliano') {
    window.location.href = '/modulo_compras.html'; // Cambia el nombre del archivo HTML a tu módulo de compras
  } else {
    alert('Credenciales incorrectas. Inténtelo de nuevo.');
  }
}
function validarFormulario(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const monto = document.getElementById('monto').value;
  const cantidad = document.getElementById('cantidad').value;
  const iva = document.getElementById('iva').value;

  if (nombre === '' || monto === '' || cantidad === '' || iva === '') {
    alert('Por favor, complete todos los campos obligatorios.');
    return;
  }

  // Crear una nueva fila en la tabla con los datos ingresados
  const tablaDatos = document.getElementById('tabla-datos');
  const nuevaFila = document.createElement('tr');

  const idColumna = document.createElement('th');
  idColumna.setAttribute('scope', 'row');
  idColumna.textContent = tablaDatos.rows.length;

  const nombreColumna = document.createElement('td');
  nombreColumna.textContent = nombre;

  const montoColumna = document.createElement('td');
  montoColumna.textContent = monto;

  const cantidadColumna = document.createElement('td');
  cantidadColumna.textContent = cantidad;

  const ivaColumna = document.createElement('td');
  ivaColumna.textContent = iva;

  // Crear el botón de eliminación
  const eliminarBoton = document.createElement('button');
  eliminarBoton.textContent = 'Eliminar';
  eliminarBoton.classList.add('btn-eliminar');
  eliminarBoton.addEventListener('click', () => {
    eliminarCompra(nuevaFila);
  });

  const accionColumna = document.createElement('td');
  accionColumna.appendChild(eliminarBoton);

  nuevaFila.appendChild(idColumna);
  nuevaFila.appendChild(nombreColumna);
  nuevaFila.appendChild(montoColumna);
  nuevaFila.appendChild(cantidadColumna);
  nuevaFila.appendChild(ivaColumna);
  nuevaFila.appendChild(accionColumna);

  tablaDatos.appendChild(nuevaFila);

  Swal.fire('Compra registrada correctamente', 'Compra registrada con éxito', 'success');
  document.getElementById('formulario').reset();
}

