// Shopping Cart System
let cart = [];

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    setupCartListeners();
});

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('khajaTimeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartUI();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('khajaTimeCart', JSON.stringify(cart));
    updateCartUI();
}

// Setup event listeners
function setupCartListeners() {
    const cartBtn = document.getElementById('cart-toggle-btn');
    const closeBtn = document.getElementById('close-cart-btn');
    const sidebar = document.getElementById('cart-sidebar');

    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleCart(true);
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            toggleCart(false);
        });
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        // If element is removed from DOM ignore
        if (!document.body.contains(e.target)) return;

        if (sidebar && sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            (cartBtn ? !cartBtn.contains(e.target) : true)) {
            toggleCart(false);
        }
    });
}

// Toggle Cart Sidebar
function toggleCart(show) {
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) {
        if (show) {
            sidebar.classList.add('open');
        } else {
            sidebar.classList.remove('open');
        }
    }
}

// Add item to cart
function addToCart(itemId) {
    console.log(`Hello`);
    // foodItems is defined in descriptions.js, assumed to be global
    if (typeof foodItems === 'undefined') {
        console.error("foodItems data not found!");
        return;
    }

    const item = foodItems.find(food => food.id === itemId);

    if (!item) {
        showNotification('Item not found!', 'error');
        return;
    }

    // Check if item already exists in cart
    const existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
        showNotification(`Increased quantity for ${item.name}`, 'success');
    } else {
        // FIXED: Store full image path
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: `assets/images/food-pictures/${item.image}`,
            quantity: 1
        });
        showNotification(`${item.name} added to cart!`, 'success');
    }

    saveCart();
    toggleCart(true); // Open cart to show user
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    showNotification('Item removed', 'info');
}

// Update item quantity
function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);

    if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
        }
    }
}

// Update Cart UI (Badge, Items, billing)
function updateCartUI() {
    updateCartBadge();
    renderCartItems();
    updateBilling();
}

// Update Badge Count
function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    const count = cart.reduce((total, item) => total + item.quantity, 0);

    if (cartBadge) {
        cartBadge.textContent = count;
        cartBadge.style.display = count > 0 ? 'flex' : 'none';

        // animation class
        cartBadge.classList.add('bump');
        setTimeout(() => cartBadge.classList.remove('bump'), 300);
    }
}

// Render Cart Items in Sidebar
function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <button class="buy-button" onclick="toggleCart(false)" style="margin-top:20px; width:auto; padding: 10px 20px;">Start Shopping</button>
            </div>
        `;
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rs. ${item.price * item.quantity}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="event.stopPropagation(); updateQuantity(${item.id}, -1)">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="event.stopPropagation(); updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item-btn" onclick="event.stopPropagation(); removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Calculate and Update Billing
function updateBilling() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const taxRate = 0.13; // 13% VAT
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');

    if (subtotalEl) subtotalEl.innerHTML = `Rs. ${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.innerHTML = `Rs. ${tax.toFixed(2)}`;
    if (totalEl) totalEl.innerHTML = `Rs. ${total.toFixed(2)}`;
}

// Clear cart
function clearCart() {
    if (cart.length === 0) {
        showNotification('Cart is already empty', 'info');
        return;
    }

    // Use custom modal for confirmation
    showConfirmationModal(
        'Clear Cart?',
        'Are you sure you want to remove all items from your cart?',
        () => {
            cart = [];
            saveCart();
            showNotification('Cart cleared successfully', 'success');
            updateCartUI();
        }
    );
}

// Confirmation Modal Helper
function showConfirmationModal(title, message, onConfirm) {
    // Remove existing if any
    const existing = document.getElementById('confirmation-modal');
    if (existing) existing.remove();

    const modalHTML = `
        <div class="payment-modal-overlay show" id="confirmation-modal" style="z-index: 10001;">
            <div class="payment-modal" style="max-width: 350px; text-align: center;">
                <div style="margin-bottom: 20px;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #f59e0b; margin-bottom: 15px;"></i>
                    <h3 style="margin-bottom: 10px;">${title}</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 25px;">${message}</p>
                    <div style="display: flex; gap: 10px; justify-content: center;">
                        <button id="cancel-confirm-btn" class="buy-button" style="background: transparent; border: 1px solid var(--border-color); color: var(--text-primary); box-shadow: none;">Cancel</button>
                        <button id="ok-confirm-btn" class="buy-button" style="background: #ef4444; color: white;">Yes, Clear</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const overlay = document.getElementById('confirmation-modal');
    const cancelBtn = document.getElementById('cancel-confirm-btn');
    const okBtn = document.getElementById('ok-confirm-btn');

    const close = () => {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 300);
    };

    cancelBtn.onclick = close;
    overlay.onclick = (e) => { if (e.target === overlay) close(); };

    okBtn.onclick = () => {
        onConfirm();
        close();
    };
}

// Checkout - Show Mock Payment Modal
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    showPaymentModal();
}

// Create and show the payment modal
function showPaymentModal() {
    // Remove existing modal if any
    const existingModal = document.querySelector('.payment-modal-overlay');
    if (existingModal) existingModal.remove();

    const totalAmount = document.getElementById('cart-total').textContent;
    const subtotalAmount = document.getElementById('cart-subtotal').textContent;
    const taxAmount = document.getElementById('cart-tax').textContent;

    const modalHTML = `
        <div class="payment-modal-overlay" id="payment-modal-overlay">
            <div class="payment-modal">
                <div class="payment-header">
                    <h3>Checkout</h3>
                    <button class="payment-close-btn" onclick="closePaymentModal()"><i class="fas fa-times"></i></button>
                </div>

                <div class="payment-content" id="payment-step-1">
                    <div class="payment-summary">
                        <div class="payment-summary-row"><span>Subtotal</span><span>${subtotalAmount}</span></div>
                        <div class="payment-summary-row"><span>VAT (13%)</span><span>${taxAmount}</span></div>
                        <div class="payment-summary-row total"><span>Total to Pay</span><span>${totalAmount}</span></div>
                    </div>

                    <h4 style="margin-bottom:15px; font-weight:600;">Select Payment Method</h4>
                    <div class="payment-methods">
                        <div class="payment-method-card selected" onclick="selectPaymentMethod(this, 'esewa')">
                            <i class="fas fa-wallet" style="color:#60bb46;"></i>
                            <span>eSewa</span>
                        </div>
                        <div class="payment-method-card" onclick="selectPaymentMethod(this, 'khalti')">
                            <i class="fas fa-mobile-alt" style="color:#5c2d91;"></i>
                            <span>Khalti</span>
                        </div>
                        <div class="payment-method-card" onclick="selectPaymentMethod(this, 'cod')">
                            <i class="fas fa-money-bill-wave" style="color:#FF6B35;"></i>
                            <span>Cash on Delivery</span>
                        </div>
                        <div class="payment-method-card" onclick="selectPaymentMethod(this, 'card')">
                            <i class="fas fa-credit-card" style="color:#007bff;"></i>
                            <span>Card</span>
                        </div>
                    </div>

                    <button class="pay-now-btn" id="pay-now-btn" onclick="processPayment()">
                        <span>Pay ${totalAmount}</span>
                        <div class="spinner"></div>
                    </button>
                </div>

                <!-- Success State -->
                <div class="payment-success" id="payment-success" style="display:none;">
                    <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                    <h3>Order Placed Successfully!</h3>
                    <p style="color:var(--text-secondary); margin-bottom:20px;">Order ID: #${Math.floor(Math.random() * 1000000)}</p>
                    <p>Thank you for ordering with KhajaTime. Your food will be delivered shortly.</p>
                    <button class="buy-button" style="margin-top:20px; width:100%;" onclick="closePaymentModal(true)">Continue Shopping</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Trigger animation
    setTimeout(() => {
        document.getElementById('payment-modal-overlay').classList.add('show');
    }, 10);
}

function closePaymentModal(clear = false) {
    const overlay = document.getElementById('payment-modal-overlay');
    if (overlay) {
        overlay.classList.remove('show');
        setTimeout(() => {
            overlay.remove();
            if (clear) {
                cart = [];
                saveCart();
                toggleCart(false);
            }
        }, 300);
    }
}

function selectPaymentMethod(element, method) {
    document.querySelectorAll('.payment-method-card').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
}

function processPayment() {
    const btn = document.getElementById('pay-now-btn');
    btn.disabled = true;
    btn.classList.add('processing');
    btn.querySelector('span').textContent = 'Processing...';

    // Simulate API call
    setTimeout(() => {
        document.getElementById('payment-step-1').style.display = 'none';
        document.getElementById('payment-success').style.display = 'block';
        showNotification('Payment Successful!', 'success');
    }, 2000);
}

// Show notification (helper)
function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());

    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-times-circle';

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}