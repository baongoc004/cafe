(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user@gmail.com' && password === '123') {
        alert("Login successful!");
        
        // Lưu trạng thái đăng nhập vào Local Storage
        localStorage.setItem("isLoggedIn", "true");

        // Chuyển hướng đến trang index.html
        window.location.href = "index.html";
        
        return false; // Ngăn form submit để chuyển trang ngay lập tức
    } else {
        alert("Incorrect username or password!");
        return false;
    }
}

function logout() {
    alert("Logged out successfully!");

    // Xóa trạng thái đăng nhập khỏi Local Storage
    localStorage.removeItem("isLoggedIn");

    // Tải lại trang để cập nhật giao diện
    window.location.href = "index.html";
}
 // Kiểm tra trạng thái đăng nhập khi trang tải
 document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        // Ẩn nút Login và Sign Up
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("signupBtn").style.display = "none";
        
        // Hiện nút Logout
        document.getElementById("logoutBtn").style.display = "inline-block";
    }
});

// Hàm logout đã được định nghĩa ở trên
function logout() {
    alert("Logged out successfully!");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}