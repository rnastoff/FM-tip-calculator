
interface errorsInterface {
  numberOfPeople: string;
}

export default function validateInfo(values: errorsInterface) {

  let errors = {
    numberOfPeople: ""
  }

  if (parseInt(values.numberOfPeople) <= 0) {
    errors.numberOfPeople = "Can't be zero"
  }

  return errors;
}