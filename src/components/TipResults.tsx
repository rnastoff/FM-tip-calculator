
import styles from './TipResults.module.css';

import Result from './Result';

interface Props {
  reset: () => void;
  tipAmountResult: string;
  totalResult: string;
  validForm: boolean
}

const TipResults = (props: Props) => {
  return (
    <div className={styles.tipResultsContainer}>
      <Result text={"Tip Amount"} result={props.tipAmountResult} />
      <Result text={"Total"} result={props.totalResult} />
      <button
        className={styles.resetBTN}
        onClick={props.reset}
        disabled={!props.validForm}
      >RESET
      </button>
    </div>
  )
}

export default TipResults;