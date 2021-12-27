import classes from './Header.module.scss'
import { Link } from "react-router-dom"

export default function HeaderForm(props) {

  const headerFormImg = 'assets/images/account/header_form.png';
  return (
    <div className={`${props.class}`}>
      <Link to="/" className = { classes.rollback }>
        <img src={headerFormImg} alt=""/>
      </Link>
      <br></br>
      <span>{props.spanValue}</span>
    </div>
  )
}