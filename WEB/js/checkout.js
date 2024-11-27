// Giả sử giỏ hàng được lưu trong localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hiển thị giỏ hàng
// Hiển thị giỏ hàng
function displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");
    let totalPrice = 0;

    cartItemsContainer.innerHTML = ""; // Xóa nội dung cũ

    cart.forEach(item => {
        // Loại bỏ ký hiệu tiền tệ "$" và chuyển price về dạng số
        const price = parseFloat(item.price.replace('$', '')) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name} (x${quantity})</span>
            <span>${(price * quantity).toLocaleString()} VND</span>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Tính tổng tiền
        totalPrice += price * quantity;
    });

    totalPriceContainer.textContent = totalPrice.toLocaleString();
}

// Xử lý form thanh toán
document.getElementById("checkout-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Kiểm tra thông tin người dùng
    if (name && phone && address) {
        // Xử lý thanh toán (giả sử gửi dữ liệu đến server)
        alert("Đặt hàng thành công! Cảm ơn bạn đã mua hàng.");
        
        // Xóa giỏ hàng sau khi thanh toán thành công
        localStorage.removeItem('cart');
        window.location.href = "thankyou.html"; // Chuyển đến trang cảm ơn
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});

// Hiển thị giỏ hàng khi tải trang
displayCart();
