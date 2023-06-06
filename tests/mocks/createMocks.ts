const createObject = {
        name: "Martelo de Thor",
        price: "30 peças de ouro",
        orderId: 4
}

const returnObj = {id: null, name: 'Martelo de Thor', price: '30 peças de ouro'}

const httpCreate = {
    productIds: [1],
    userId: 1
};

const returnOrder = {
    "productIds": [
        1
    ],
    "userId": 1
}

const userFIndMock = {
      id: 1,
      username: 'Hagar',
      vocation: 'Guerreiro',
      level: 10,
      password: '$2a$10$1qb6yc23jHwOQjWRjWNcSuoaS9sguRfya29ubldnnUrqldXbpIcCu'
  }

export default {
    createObject,
    returnObj,
    httpCreate,
    returnOrder,
    userFIndMock,
}