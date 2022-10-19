
import styles from './Input.module.css';

interface Props {
  text: string;
  icon: string;
  name: string;
  className: string;
  errorClass: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number
  errors: any
}

const Input = (props: Props) => {
  let errorClass = props.errors.numberOfPeople ? props.errorClass : "";

  return (
    <div className={`${styles.inputGroup} ${props.className}`}>

      <div className={styles.inputTextAndError}>
        <label className={styles.inputText} htmlFor="inputNumber">{props.text}</label>
        {props.errors.numberOfPeople && <div className={styles.errorText}>{props.errors.numberOfPeople}</div>}
      </div>

      <div className={styles.inputAndIcon}>
        <input
          type="text"
          className={`${styles.inputNumber} ${errorClass}`}
          id="inputNumber"
          name={props.name}
          onChange={props.handleChange}
          value={props.value}
        />
        <img src={props.icon} alt="icon" className={styles.icon} />
      </div>
    </div>
  )
}

export default Input;