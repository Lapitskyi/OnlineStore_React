const state = {
  nav: [
    {
      id: 1,
      name: 'nav.home',
      link: '/'
    },
    {
      id: 2,
      name: 'auth.aboutMe ',
      link: '/about'
    },
    {
      id: 3,
      name: 'auth.goods',
      link: '/goods'
    }

  ],
  auth: {
    login: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'auth.labelEmail',
          type: 'email',
          placeholder: 'auth.placeholderEmail'
        },
        {
          id: 'password',
          name: 'password',
          label: 'auth.labelPassword',
          type: 'password',
          placeholder: 'auth.placeholderPassword'
        }
      ],
      name: 'auth.nameLogin',
      link: [
        {
          id: 1,
          title: 'auth.linkReset',
          path: '/auth/reset'
        },
        {
          id: 2,
          title: 'auth.linkRegistration',
          path: '/auth/registration'
        }
      ]
    },
    registration: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'auth.labelEmail',
          type: 'email',
          placeholder: 'auth.placeholderEmail'
        },
        {
          id: 'password',
          name: 'password',
          label: 'auth.labelPassword',
          type: 'password',
          placeholder: 'auth.placeholderPassword'
        },
        {
          id: 'confirmPassword',
          name: 'confirmPassword',
          label: 'auth.labelConfirmPassword',
          type: 'password',
          placeholder: 'auth.placeholderConfirmPassword'
        },
      ],
      name: 'auth.nameRegistration',
      link: [
        {
          id: 1,
          title: 'auth.linkLogin',
          path: '/auth/login'
        }
      ]
    },
    reset: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'auth.labelEmail',
          type: 'email',
          placeholder: 'auth.placeholderEmail'
        },
      ],
      name: 'auth.nameReset',
      link: [
        {
          id: 1,
          title: 'auth.linkLogin',
          path: '/auth/login'
        }
      ]
    },
  }
};

export default state;
