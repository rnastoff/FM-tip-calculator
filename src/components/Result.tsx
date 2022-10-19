
import styles from './Result.module.css'

interface Props {
  text: string;
  result: string;
}

const Result = (props: Props) => {
  return (
    <div className={styles.result}>
      <div className={styles.text}>
        <div className={styles.tipAmountText}>{props.text}</div>
        <div className={styles.personText}>/ person</div>
      </div>

      <div className={styles.amount}>{props.result}</div>
    </div>
  )
}

export default Result;