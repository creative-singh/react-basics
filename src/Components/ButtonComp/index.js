import './style.css';

const ButtonComp = ({ btnClass, btnText, clickHandler }) => {
  return (
    <button className={btnClass} onClick={clickHandler}>
      {btnText}
    </button>
  );
}

export default ButtonComp;