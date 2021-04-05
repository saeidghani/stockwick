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
  {
    min: 3,
    message: 'Username can not be less than 3 characters',
  },
];

const emailRules = [
  {
    required: true,
    message: 'Please input your email!',
  },
  {
    type: 'email',
    message: 'Please enter valid email',
  },
];

const passwordRules = [
  {
    required: true,
    message: 'Please input your password!',
  },
  {
    min: 6,
    message: 'Password can not be less than 6 characters',
  },
  {
    pattern: /[A-Za-z]+[0-9]+.*/,
    message: 'Please enter valid password (ex. aaa111)',
  },
];

const repeatPasswordRules = [
  {
    required: true,
    message: 'Please repeat your password!',
  },
];

const questionRules = [
  {
    required: true,
    message: 'Please input your question',
  },
];

const choiceRules = [
  {
    required: true,
    message: 'Please input your choice',
  },
];

const daysRules = [
  {
    required: true,
    message: 'Please input day field',
  },
];

const hoursRules = [
  {
    required: true,
    message: 'Please input hour field',
  },
];

const minutesRules = [
  {
    required: true,
    message: 'Please input minute field',
  },
];

const testRules = [];

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
  testRules,
  questionRules,
};
