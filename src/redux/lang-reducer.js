const initialState = {
  menu: {
    en: [
      {
        id: 1,
        name: 'Home',
        link: '/'
      },
      {
        id: 2,
        name: 'About me',
        link: '/about'
      },
      {
        id: 3,
        name: 'Goods',
        link: '/goods'
      }
    ],
    ua: [
      {
        id: 1,
        name: 'Головна',
        link: '/'
      },
      {
        id: 2,
        name: 'Обо мне',
        link: '/about'
      },
      {
        id: 3,
        name: 'Товар',
        link: '/product'
      },

    ],
    ru: [
      {
        id: 1,
        name: 'Главная',
        link: '/'
      },
      {
        id: 2,
        name: 'Обо мне',
        link: '/about'
      },
      {
        id: 3,
        name: 'Товар',
        link: '/goods'
      },
    ],
  },
  auth: {
    en: {
      login: {
        input: [
          {
            id: 'email',
            label: 'Username or email',
            type: 'text',
            placeholder: 'email'
          },
          {
            id: 'password',
            label: 'Password',
            type: 'text',
            placeholder: 'password'
          }
        ],
        btnText: 'Sing in',
        link: [
          {
            id: 1,
            title: 'Forgot your password?',
            path: '/reset'
          },
          {
            id: 2,
            title: 'Don\'t have an account yet? Register now',
            path: '/registration'
          }
        ]
      },
      registration: {
        input: [
          {
            id: 'email',
            label: 'Email',
            placeholder: 'email'
          },
          {
            id: 'password',
            label: 'Password',
            placeholder: 'password'
          },
          {
            id: 'repassword',
            label: 'Repassword',
            placeholder: 'repassword'
          }
        ],
        btnText: 'Sing Up',
        link: [
          {
            id: 1,
            title: 'Already have login and password? Sign in',
            path: '/login'
          }
        ]
      },
      reset: {
        input: [
          {
            id: 'email',
            label: 'Email',
            placeholder: 'email'
          },
        ],
        btnText: 'Reset password',
        link: [
          {
            id: 1,
            title: 'Already have login and password? Sign in',
            path: '/login'
          }
        ]
      }
    },
    ua: {
      Login: {
        input: [
          {
            id: 'email',
            label: 'Ім\'я користувача або адресу електронної пошти',
            type: 'text',
            placeholder: 'Ім\'я користувача або адресу електронної пошти'
          },
          {
            id: 'password',
            label: 'Пароль',
            type: 'text',
            placeholder: 'Пароль'
          }
        ],
        btnText: 'Увійти',
        link: [
          {
            id: 1,
            title: 'Забули свій пароль?',
            path: '/reset'
          },
          {
            id: 2,
            title: 'Ще не маєте облікового запису? Зареєструйтесь зараз',
            path: '/registration'
          }
        ]
      },
      registration: {
        input: [
          {
            id: 'email',
            label: 'Електронна пошта',
            placeholder: 'Електронна пошта'
          },
          {
            id: 'password',
            label: 'Пароль',
            placeholder: 'Пароль'
          },
          {
            id: 'repassword',
            label: 'Повторіть пароль',
            placeholder: 'Повторіть пароль'
          }
        ],
        btnText: 'Зареєструватися',
        link: [
          {
            id: 1,
            title: 'Уже маєте логін та пароль? Увійти',
            path: '/login'
          }
        ]
      },
      reset: {
        input: [
          {
            id: 'email',
            label: 'Електронна пошта',
            placeholder: 'Електронна пошта'
          },
        ],
        btnText: 'Скинути пароль',
        link: [
          {
            id: 1,
            title: 'Згадали логін та пароль? ',
            path: '/login'
          }
        ]
      }
    },
    ru: {
      Login: {
        input: [
          {
            id: 'email',
            label: 'Имя пользователя или адрес электронной почты',
            type: 'text',
            placeholder: 'Имя пользователя или адрес электронной почты'
          },
          {
            id: 'password',
            label: 'Пароль',
            type: 'text',
            placeholder: 'Пароль'
          }
        ],
        btnText: 'Войти',
        link: [
          {
            id: 1,
            title: 'Забыли Ваш пароль?',
            path: '/reset'
          },
          {
            id: 2,
            title: 'Еще нет учетной записи? Зарегистрироваться',
            path: '/registration'
          }
        ]
      },
      registration: {
        input: [
          {
            id: 'email',
            label: 'Электронная почта',
            placeholder: 'Электронная почта'
          },
          {
            id: 'password',
            label: 'Пароль',
            placeholder: 'Пароль'
          },
          {
            id: 'repassword',
            label: 'Повторить пароль',
            placeholder: 'Повторить пароль'
          }
        ],
        btnText: 'Зарегистрироваться',
        link: [
          {
            id: 1,
            title: 'Уже есть логин и пароль? Войти',
            path: '/login'
          }
        ]
      },
      reset: {
        input: [
          {
            id: 'email',
            label: 'Електронна пошта',
            placeholder: 'Електронна пошта'
          },
        ],
        btnText: 'Сбросить пароль',
        link: [
          {
            id: 1,
            title: 'Вспомнили логин и пароль?',
            path: '/login'
          }
        ]
      }
    },
  }
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default langReducer;
