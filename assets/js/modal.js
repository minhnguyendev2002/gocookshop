const moodal = document.getElementById("myModal");
if(moodal) {
    const mymodal = document.createElement('DIV');
    mymodal.classList.add('User-modal');
    mymodal.innerHTML = `
        <div class="modal-overley"></div>
        <div class="modal-box">
            <div class="Sign-In-Box">
                <span id="close"><i class="fas fa-times"></i></span>
                <div id="User-account">
                    <form class="form" id="login">
                        <h1 class="form__title">Login</h1>
                        <div class="form__message form__message--error"></div>
                        <div class="form__input-group">
                            <span><i class="fas fa-user"></i></span>
                            <input type="text" class="form__input" autofocus placeholder="Username">
                        </div>
                        <div class="form__input-group">
                            <span><i class="fas fa-lock"></i></span>
                            <input type="password" class="form__input" autofocus placeholder="Password">
                        </div>
                        <button class="form__button" type="submit">LOGIN</button>
                        <div class="Social-media">
                            <h4>Or Sign in with social platforms</h4>
                            <ul>
                                <li>
                                    <a href="#"> <i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-google"></i></a>
                                </li>
                            </ul>
                        </div>
                        <p class="form__text">
                            <a class="form__link" href="./" id="linkCreateAccount">Don't have an account? <span>Create account</span></a>
                        </p>
                    </form>
                    
                    <form class="form form--hidden" id="createAccount">
                        <h1 class="form__title">Create Account</h1>
                        <div class="form__input-group">
                            <span><i class="fas fa-user-plus"></i></span>
                            <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Username">
                        </div>
                        <div class="form__input-group">
                            <span><i class="fas fa-at"></i></span>
                            <input type="text" class="form__input" autofocus placeholder="Email Address">
                        </div>
                        <div class="form__input-group">
                            <span><i class="fas fa-unlock-alt"></i></span>
                            <input type="password" class="form__input" autofocus placeholder="Password">
                        </div>
                        <div class="form__input-group">
                            <span><i class="fas fa-key"></i></span>
                            <input type="password" class="form__input" autofocus placeholder="Confirm password">
                        </div>
                        <button class="form__button" type="submit">SIGN-UP</button>
                        <div class="Social-media">
                            <h4>Or Sign in with social platforms</h4>
                            <ul>
                                <li>
                                    <a href="#"> <i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-google"></i></a>
                                </li>
                            </ul>
                        </div>
                        <p class="form__text">
                            <a class="form__link" href="./" id="linkLogin">Already have an account? <span>Sign in</span></a>
                        </p>
                    </form>  
                </div>
            </div>
        </div>
    `;
    moodal.appendChild(mymodal);
}