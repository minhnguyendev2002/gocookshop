$(document).ready(function() {
    $(window).scroll(() => {
        if(window.scrollY > 300) {
            $(".nav-menu").addClass("scroll-nav")
        }   
        if(window.scrollY > 900 || window.scrollY < 300) {
            $(".nav-menu").removeClass("scroll-nav")
        }
    })
    
    $(".order-btn").removeClass("active")
    $(".instruct").addClass("active")
    
    $(".options-foods li").click(function() {
        $(".options-foods li").removeClass("show-check")
        $(this).addClass("show-check")
    })
    
    $(".order-btn a").html("Trang chủ")
    $(".instruct a").html("Đặt đồ ăn")
    $(".choose a").html("Công thức bếp")

    $(".order-btn a").click(function() {
        $(this).attr("href","../../index.html")
    })
    $(".choose a").click(function() {
        $(this).attr("href","../blog/blog.html")
    })

})



const ShowMenufood = document.getElementById("show-menu-food"),
    CloseMenufood = document.getElementById("close-menu-food"),
    MyMenufood = document.getElementsByClassName("nav-menu")[0];

ShowMenufood.onclick = function() {
    MyMenufood.style.animation = "showMenufood 0.3s ease forwards";
}

CloseMenufood.onclick = function() {
    MyMenufood.style.animation = "closeMenufood 0.3s ease forwards";
}