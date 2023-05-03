import { validateForms } from '../functions/validate-forms';
const rules1 = [{
  ruleSelector: '.form__email',
  rules: [
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните email!'
    }
  ]
},];

const rules2 = [{
  ruleSelector: '.form__name',
  rules: [
    {
      rule: 'customRegexp',
      value: /[а-я]/gi,
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните имя!'
    }
  ]
},
{
  ruleSelector: '.form__email',
  rules: [
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните email!'
    }
  ]
},
];

validateForms('.about__form', rules1);
validateForms('.contacts__form', rules2);
