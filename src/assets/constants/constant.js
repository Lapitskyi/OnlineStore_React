const constant = {
  nav: [
    {
      id: 1,
      name: 'nav.home',
      link: '/'
    },
    {
      id: 2,
      name: 'nav.aboutMe',
      link: '/about'
    },
    {
      id: 3,
      name: 'nav.goods',
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
  },
  productNav: [
    {
      id: 1,
      name: 'productNav.about',
      link: '/aboutProduct'
    },
    {
      id: 2,
      name: 'productNav.characteristics',
      link: '/characteristics'
    },
    {
      id: 3,
      name: 'productNav.feedback',
      link: '/feedback'
    },
  ]
};

export default constant;
