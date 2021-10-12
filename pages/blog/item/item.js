$(document).ready(function() {
    $(".header-logo img").attr("src", "../../../assets/img/logo.svg")
    $(".footer-logo img").attr("src", "../../../assets/img/logo.svg")
    $(".order-btn a").attr("href", "../../../index.html")
    $(".instruct a").attr("href", "../../product/product.html")
    $(".choose a").attr("href", "../blog.html")

    $(".order-btn a").html("Trang chủ")
    $(".order-btn").removeClass("active")
    $(".instruct a").html("Đặt đồ ăn")
    $(".choose a").html("Công thức bếp")

    $(".option span").click(function() {
        $(".option span").removeClass("ops-active")
        $(this).addClass("ops-active")
    })
})



let post = [
    {
        namepost:"",
        author:"",
        time:"",
        view:"",
        description:"",
        image_1:"",
        nguyenlieu:"", // mỗi nguyên liệu cách nhau bằng 1 dấu phẩy
        image_2:"",
        step:"", // các bước tiến hành, viết liền hoa thường hăn hoi
        image_3:"",
        end:'', // lời kết thúc
    },
]
