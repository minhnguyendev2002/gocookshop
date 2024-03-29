const header = document.getElementById("header")
if(header) {
    const myheader = document.createElement("DIV")
    myheader.classList.add("container")
    myheader.innerHTML = `
        <div class="header-box flex-elm">
            <div class="header-logo flex-elm">
                <img src="../../assets/img/logo.svg" alt="/" />
                <span>Tiny<span class="food-text">Food</span></span>
            </div>
            <ul class="header-menu myMenu">
                <span class="close-menu" id="close-menu"><i class="fas fa-times"></i></span>
                <li class="order-btn active"><a href="#">Đặt đồ ăn</a></li>
                <li class="instruct"><a href="#instruc">Công thức bếp</a></li>
                <li class="about"><a href="./pages/about/index.html">Về chúng tôi</a></li>
            </ul>
            <div class="header-direction">
                <div class="account" id="account">
                    <div>
                        <span id="Login" class="log-in">Đăng nhập</span>
                        <ul>
                            <li>Thông tin</li>
                            <li class="sign-out">Đăng xuất</li>
                        </ul>
                    </div>
                    <span id="show-menu"><i class="fas fa-bars"></i></span>
                </div>
            </div>
        </div>
    `;

    header.appendChild(myheader)
}