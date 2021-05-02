const initialState = {
  products: [
    {
      id: 1,
      name: 'Name product',
      price: '100',
      photo: 'https://via.placeholder.com/400x350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],

    },
    {
      id: 2,
      name: 'Name product',
      price: '200',
      photo: 'https://via.placeholder.com/400',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],

    },
    {
      id: 3,
      name: 'Name product',
      price: '30',
      photo: 'https://via.placeholder.com/350',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],

    },
    {
      id: 4,
      name: 'Name product',
      price: '30',
      photo: 'https://via.placeholder.com/200',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],

    },
    {
      id: 5,
      name: 'Name product',
      price: '200',
      photo: 'https://via.placeholder.com/600',
      photoCollection: ['img1', 'img2', 'img3', 'img4'],
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'],

    },
  ]
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
