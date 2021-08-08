import React, { useContext } from "react";
import "./Login-signup.styles.css";
import { LoginContext,CurrentUserContext,MainContext } from "../../pages/Main/MainContext";
import { googleProvider , auth } from "../../firebase/firebase.utils";

const LoginAndSignUp = () => {
  const [login, setLogin] = useContext(LoginContext);
  const [isLogined , setIsLogined] = useContext(CurrentUserContext);
  const [menu, setMenu] = useContext(MainContext);


  const closeOutSideLogin = () => {
    setLogin(false);
  };

  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
        .then(res => {
        console.log(res)
        setIsLogined(true)
        setMenu(false)

        const token = res.credential.accessToken;
        const user = res.user;

        const data = {
          storetoken : token ,
          username : user.displayName ,
          email : user.email , 

        }

          localStorage.setItem('user', JSON.stringify(data))
        })
        .catch(error => {
        // err
        console.log('error')
        })
  }

  return (
    <frameElement>
      <div className="login-signup-layer" onClick={closeOutSideLogin}></div>
      <div className="whole-login-signup">
        <div className="title-section">
          <i class="far fa-times-circle" onClick={closeOutSideLogin}></i>
          <p>Log in or sign up</p>
        </div>

        <div className="register-section">
          <p className="welcome">Welcome to Airbnb</p>
          <div className="select-country">
            <select name="" id="country">
              <option value="Iran">Iran (+98)</option>
              <option value="Mali">Mali (+223)</option>
              <option value="Mexico">Mexico (+52)</option>
              <option value="Nepal">Nepal (+997)</option>
              <option value="Malta">Malta (+356)</option>
              <option value="Iran">Iran (+98)</option>
              <option value="Mali">Mali (+223)</option>
              <option value="Mexico">Mexico (+52)</option>
              <option value="Nepal">Nepal (+997)</option>
              <option value="Malta">Malta (+356)</option>
              <option value="Iran">Iran (+98)</option>
              <option value="Mali">Mali (+223)</option>
              <option value="Mexico">Mexico (+52)</option>
              <option value="Nepal">Nepal (+997)</option>
              <option value="Malta">Malta (+356)</option>
              <option value="Iran">Iran (+98)</option>
              <option value="Mali">Mali (+223)</option>
              <option value="Mexico">Mexico (+52)</option>
              <option value="Nepal">Nepal (+997)</option>
              <option value="Malta">Malta (+356)</option>
              <option value="Iran">Iran (+98)</option>
              <option value="Mali">Mali (+223)</option>
              <option value="Mexico">Mexico (+52)</option>
              <option value="Nepal">Nepal (+997)</option>
              <option value="Malta">Malta (+356)</option>
            </select>
          </div>
          <div className="phone-number">
            <input type="text" placeholder="Phone Number" />
          </div>
          <p className="policy">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.<a href="#"> Privacy Policy</a>
          </p>
          <button>Continue</button>
        </div>

        <div className="splitter">
          <div className="or">or</div>
        </div>

        <div className="login-section">
          <div className="button face-book">
            <img src="https://img.icons8.com/color/30/000000/facebook-new.png" />
            <p>Continue with Facebook</p>
          </div>
          <div className="button google" onClick={signInWithGoogle}>
            <img src="https://img.icons8.com/color/30/000000/google-logo.png" />
            <p>Continue with Google</p>
          </div>
          <div className="button apple">
            <img src="https://img.icons8.com/color/30/000000/mac-os--v1.png" />
            <p>Continue with Apple</p>
          </div>
          <div className="button email">
            <img src="https://img.icons8.com/color/30/000000/filled-message.png" />
            <p>Continue with Email</p>
          </div>
        </div>
      </div>
    </frameElement>
  );
};

export default LoginAndSignUp;
