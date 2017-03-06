export const validators = {};

export function assignValidators(props) {
  const propValidators = props.validators || [];
  validators[props.form] = validators[props.form] || {};
  validators[props.form][props.id] = Array.isArray(propValidators) ? propValidators : [propValidators];
}

export const minLength = len => v => (v.length < len ? `Minimum length of ${len} required` : undefined);
export const maxLength = len => v => (v.length > len ? `Maximum length of ${len} is required` : undefined);
export const required = v => (v.length === 0 ? 'This field is required.' : undefined);
