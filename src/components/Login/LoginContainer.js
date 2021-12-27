
import ActionButton from "../Account/ActionButton"
import InputValue from "../Account/InputValue"
import HeaderForm from "../Account/HeaderForm"
import '../../styles/account.scss'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import {
  VALIDATE_LOG_IN_USERNAME,
  VALIDATE_LOG_IN_PASSWORD,
} from "../../redux/constants/actionTypes"
import { useHistory } from "react-router-dom"
import styles from "./Login.module.scss"



export default function LoginContainer() {
  const loginState = useSelector(state => state.loginReducer)

  const bottomImg = 'assets/images/account/bottom_img.png';
  const topImg = 'assets/images/account/top_img.png';

  const history = useHistory();

  const inputValueData = [
    {
      type: 'text',
      placeholder: 'Username',
      name: 'username',
      actionType: VALIDATE_LOG_IN_USERNAME,
      warningMess: ""
    },
    {
      type: 'password',
      placeholder: 'Password',
      name: 'password',
      actionType: VALIDATE_LOG_IN_PASSWORD,
      warningMess: ""
    }
  ]

  function submitLoginForm() {
    localStorage.setItem("username", loginState.form.username);
    localStorage.setItem("password", loginState.form.password);
    localStorage.setItem("role", 3);
    localStorage.setItem("isAuth", true);
    history.push('/');
  }

  return (
    <div className="account__container">
      <div className={ `container__left-side` }>
        <img className ="top-img" src ={topImg} alt=""/>
        <div className="container-form">
          <form>
            <HeaderForm class="form-header"
              spanValue="Đăng nhập vào tài khoản của bạn để tiếp tục" />

            {
              inputValueData.map((item, index) => {
                return (
                  <InputValue placeholder={item.placeholder}
                    name={item.name} type={item.type}
                    actionType={item.actionType}
                    warningMess={item.warningMess}
                    reducer="loginReducer"
                    // style={{ marginBottom: index === 0 ? '15px' : '' }}
                    key={index} />
                )
              })
            }
            <div className="small-text">
              <Link to='/forgot-password'>Quên mật khẩu?</Link>
            </div>
            <ActionButton style={{ marginTop: "50px" }} action="Đăng nhập"
              onClickActionButton={submitLoginForm}
            />
            <div className="small-text" style={{ marginTop: "10px" }}>
              <span>Bạn chưa có tài khoản?</span>
              <Link to='/signup'> Đăng kí</Link>
            </div>
            <div className={styles['login-with-other-container']}>
              <span>Hoặc đăng nhập bằng</span>
              <div>
                <i className={`fab fa-google ${styles['google-icon']}`}></i>
                <i className={`fab fa-facebook ${styles['facebook-icon']}`}></i>
              </div>
            </div>
          </form>
        </div>
        <img className="bottom-img" src={bottomImg} alt=""></img>
      </div>
      <div className="container__right-side"></div>
    </div>
  )
}