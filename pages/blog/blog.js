$(document).ready(function() {
    
    $(".order-btn").removeClass("active")
    $(".choose").addClass("active")
    
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
    $(".instruct a").click(function() {
        $(this).attr("href", "../product/product.html")
    })
})