type ValidityItem = {
  value: any;
  validator: Function;
};

export const FormRegisterValidator = (payload: Array<ValidityItem>) => {
  let validity = payload.map((item: ValidityItem) => {
    return !item.validator(item.value);
  });

  return validity.every(item => item === true);
};
