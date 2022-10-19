
import useForm from '../hooks/useForm';
import validate from './validateInfo';

import styles from './TipCalculator.module.css';

import Input from './Input';
import SelectTip from './SelectTip';
import TipResults from './TipResults';

import iconDollar from '../images/icon-dollar.svg';
import iconPerson from '../images/icon-person.svg';

const TipCalculator = () => {

  const { handleChange, handleCustomChange, handleButton, isValid, reset, values, errors } = useForm(validate);

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>

      <div className={styles.container}>

        <div className={styles.sectionForm}>
          <Input
            icon={iconDollar}
            text={"Bill"}
            className={""}
            errorClass={""}
            name="bill"
            handleChange={handleChange}
            value={values.bill}
            errors={{}}
          />
          <SelectTip
            handleButton={handleButton}
            handleCustomChange={handleCustomChange}
            buttonTip={values.tip}
            customTip={values.customTip}
            name="customTip"
          />
          <Input
            icon={iconPerson}
            text={"Number of People"}
            className={styles.numberOfPeople}
            errorClass={styles.errorInputBorder}
            name="numberOfPeople"
            handleChange={handleChange}
            value={values.numberOfPeople}
            errors={errors}
          />
        </div>

        <div className={styles.sectionResults}>
          <TipResults
            reset={reset}
            tipAmountResult={values.tipAmountResult}
            totalResult={values.totalResult}
            validForm={values.validForm}
          />
        </div>

      </div>
    </main>
  )
}

export default TipCalculator;