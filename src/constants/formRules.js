const nameRules = [
  {
    required: true,
    message: 'Please input your name!',
  },
];

const bioRules = [
  {
    required: true,
    message: 'Please input your bio!',
  },
];

const mobileRules = [
  {
    required: true,
    message: 'Please input your mobile!',
  },
];

const userNameRules = [
  {
    required: true,
    message: 'Please input your username!',
  },
];

const emailRules = [
  {
    required: true,
    message: 'Please input your email!',
  },
];

const passwordRules = [
  {
    required: true,
    message: 'Please input your password!',
  },
];

const repeatPasswordRules = [
  {
    required: true,
    message: 'Please repeat your password!',
  },
];

const choiceRules = [
  {
    required: true,
    whitespace: true,
    message: 'Please input your choice or delete this field.',
  },
];

const daysRules = [
  {
    required: true,
    whitespace: true,
    message: 'Please input day field.',
  },
];

const hoursRules = [
  {
    required: true,
    whitespace: true,
    message: 'Please input day field.',
  },
];

const minutesRules = [
  {
    required: true,
    whitespace: true,
    message: 'Please input day field.',
  },
];

// eslint-disable-next-line import/prefer-default-export
export {
  nameRules,
  bioRules,
  mobileRules,
  userNameRules,
  emailRules,
  passwordRules,
  repeatPasswordRules,
  choiceRules,
  daysRules,
  hoursRules,
  minutesRules,
};
