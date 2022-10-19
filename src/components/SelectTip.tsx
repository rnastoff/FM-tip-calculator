
import styles from './SelectTip.module.css';

interface Props {
  handleButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCustomChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  buttonTip: number;
  customTip: number | string;
}

const SelectTip = (props: Props) => {


  return (
    <div className={styles.selectTip}>
      <div className={styles.selectTipText}>Select Tip %</div>
      <div className={styles.selectTipButtonGroup}>
        <button
          className={`${styles.selectTipButton} ${props.buttonTip.toString() === "5" ? styles.selectTipButtonActive : ''}`}
          name="tip"
          value="5"
          onClick={props.handleButton}
        >5%
        </button>
        <button
          className={`${styles.selectTipButton} ${props.buttonTip.toString() === "10" ? styles.selectTipButtonActive : ''}`}
          name="tip"
          value="10"
          onClick={props.handleButton}
        >10%
        </button>
        <button
          className={`${styles.selectTipButton} ${props.buttonTip.toString() === "15" ? styles.selectTipButtonActive : ''}`}
          name="tip"
          value="15"
          onClick={props.handleButton}
        >15%
        </button>
        <button
          className={`${styles.selectTipButton} ${props.buttonTip.toString() === "25" ? styles.selectTipButtonActive : ''}`}
          name="tip"
          value="25"
          onClick={props.handleButton}
        >25%
        </button>
        <button
          className={`${styles.selectTipButton} ${props.buttonTip.toString() === "50" ? styles.selectTipButtonActive : ''}`}
          name="tip"
          value="50"
          onClick={props.handleButton}
        >50%
        </button>
        <input
          type="text"
          name={props.name}
          className={styles.selectTipInput}
          placeholder="Custom"
          onChange={props.handleCustomChange}
          value={props.customTip}
        />
      </div>
    </div>
  )
}

export default SelectTip;