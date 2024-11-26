// Elementos del carrito
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = [];
const cartModal = document.createElement('div'); // Modal dinámico

// Configuración del modal con mejor diseño
cartModal.style.position = 'fixed';
cartModal.style.bottom = '20px';
cartModal.style.right = '20px';
cartModal.style.width = '300px';
cartModal.style.backgroundColor = '#fff';
cartModal.style.border = '3px solid orange'; // Color del borde
cartModal.style.borderRadius = '10px';
cartModal.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.3)';
cartModal.style.padding = '15px';
cartModal.style.fontFamily = 'Arial, sans-serif';
cartModal.style.color = '#333';
cartModal.style.zIndex = '1000';
cartModal.style.display = 'none';
document.body.appendChild(cartModal);

// Función para calcular el total del carrito
function calculateTotal() {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
}

// Actualiza el contenido del modal
function updateCartModal() {
    if (cart.length === 0) {
        cartModal.innerHTML = `
            <h4 style="color: orange; text-align: center;">Tu Carrito</h4>
            <p style="text-align: center;">El carrito está vacío.</p>`;
    } else {
        const total = calculateTotal(); // Calcula el total
        cartModal.innerHTML = `
            <h4 style="color: orange; text-align: center;">Tu Carrito</h4>
            <ul style="list-style: none; padding: 0;">
                ${cart.map(item => `<li style="margin-bottom: 8px;">${item.name} - S/ ${item.price}</li>`).join('')}
            </ul>
            <p style="text-align: right; font-weight: bold;">Total: S/ ${total}</p>
            <button id="confirmPurchase" style="
                width: 100%;
                background-color: orange;
                color: white;
                border: none;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;">
                Confirmar Compra
            </button>
        `;
        document.getElementById('confirmPurchase').addEventListener('click', () => {
            alert('Compra realizada exitosamente.');
            cart.length = 0; // Vacía el carrito
            cartModal.style.display = 'none'; // Oculta el modal
        });
    }
}

// Escucha los botones de "Agregar al carrito"
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.closest('.menu-item'); // Encuentra el contenedor del item
        const name = button.getAttribute('data-name');
        const priceText = menuItem.querySelector('h5').textContent; // Extrae el texto del precio
        const price = priceText.match(/\d+(\.\d+)?/)[0]; // Extrae el número del texto
        
        cart.push({ name, price });
        alert(`${name} fue agregado al carrito.`);
        updateCartModal();
        cartModal.style.display = 'block'; // Muestra el modal
    });
});

// Opcional: Ocultar el modal cuando se hace clic fuera
document.body.addEventListener('click', (e) => {
    if (!cartModal.contains(e.target) && !e.target.classList.contains('add-to-cart')) {
        cartModal.style.display = 'none';
    }
});


