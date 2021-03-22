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

// eslint-disable-next-line import/prefer-default-export
export { userNameRules, emailRules, passwordRules, repeatPasswordRules };
