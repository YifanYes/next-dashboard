const { PrismaClient } = require('@prisma/client')
const { users, orders, products } = require('./data.js')
const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: users
  })
  console.log('Added users data')

  await prisma.product.createMany({
    data: products
  })
  console.log('Added products data')

  await prisma.order.createMany({
    data: orders
  })
  console.log('Added orders data')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })