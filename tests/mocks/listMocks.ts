const products = [
    {
        id: 1,
        name: "Excalibur",
        price: "10 peças de ouro",
        orderId: 1
      },
      {
        id: 5,
        name: "Harpa de Dagda",
        price: "15 peças de ouro",
        orderId: 3
      }
]

const ordersReturn = [
  {
    id: 1,
    userId: 1,
    productIds: [
      2,
      1
    ]
  },
  {
    id: 2,
    userId: 3,
    productIds: [
      4,
      3
    ]
  }
]

const orders = [
  {
    id: 1,
    userId: 1,
    productIds: [
      {
        id: 2,
        name: "Espada Justiceira",
        price: "20 peças de ouro",
        orderId: 1
      },
      {
        id: 1,
        name: "Excalibur",
        price: "10 peças de ouro",
        orderId: 1
      }
    ]
  },
]

const newOrd = [
  {
    id: 1,
    userId: 1,
    productIds: [
      {
        id: 2,
        name: "Espada Justiceira",
        price: "20 peças de ouro",
        orderId: 1
      },
      {
        id: 1,
        name: "Excalibur",
        price: "10 peças de ouro",
        orderId: 1
      }
    ]
  },
]

export default {
    products,
    ordersReturn,
    orders,
    newOrd,
}