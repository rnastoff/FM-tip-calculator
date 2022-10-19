import { useState, useEffect } from 'react';

interface ValuesInterface {
  bill: number;
  tip: number;
  customTip: any;
  numberOfPeople: number;
  tipAmountResult: string;
  totalResult: string;
  validForm: boolean;
}

const useForm = (validate: Function) => {
  const [values, setValues] = useState<ValuesInterface>({
    bill: 0,
    tip: 0,
    customTip: "",
    numberOfPeople: 0,
    tipAmountResult: "$0.00",
    totalResult: "$0.00",
    validForm: false
  });

  const [errors, setErrors] = useState({
    numberOfPeople: ""
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { name, value } = e.target as typeof e.target & {
      name: string
      value: string
    };


    if (value.match(/^\d*\.?\d*$/)) {
      setValues({
        ...values,
        [name]: value
      })
    }

  }

  const handleCustomChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { name, value } = e.target as typeof e.target & {
      name: string
      value: string
    };

    setValues({
      ...values,
      [name]: value,
      tip: 0
    });
  }

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;

    setValues({
      ...values,
      [button.name]: button.value,
      customTip: ""
    });

  }

  const reset = () => {
    logValues();
    setValues({
      bill: 0,
      tip: 0,
      customTip: "",
      numberOfPeople: 0,
      tipAmountResult: "$0.00",
      totalResult: "$0.00",
      validForm: false
    })
  }

  const logValues = () => {
    setTimeout(() => {
      console.log(values);
    }, 1000)
  }

  const isValid = () => {
    let hasTip = values.tip || values.customTip;
    return values.bill && hasTip && values.numberOfPeople;
  }

  useEffect(() => {
    // let errorCheck = Object.values(errors).every(value => !value);

    if (isValid()) {

      let tipPercent = values.customTip ? values.customTip / 100 : values.tip / 100;
      let bill = Number(values.bill);

      let finalTip = bill * tipPercent;
      let totalWithTip = bill + finalTip;

      let tipAmountPerPerson = finalTip / values.numberOfPeople;
      let totalPerPerson = totalWithTip / values.numberOfPeople;

      let tapp = "$" + (Math.round(tipAmountPerPerson * 100) / 100);
      let tpp = "$" + (Math.round(totalPerPerson * 100) / 100);

      setValues({
        ...values,
        tipAmountResult: tapp,
        totalResult: tpp,
        validForm: true
      });

      setErrors({
        numberOfPeople: ""
      })

    }
    else {
      let hasTip = values.tip || values.customTip;
      if (values.bill && hasTip) {
        setErrors({
          numberOfPeople: "Can't be zero"
        })
      }
    }

  }, [values.bill, values.tip, values.customTip, values.numberOfPeople, errors.numberOfPeople]);

  return { handleChange, handleCustomChange, handleButton, reset, isValid, values, errors };
}

export default useForm;