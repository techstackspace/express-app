const port = Bun.env.PORT || 4000
console.log(`Port number is ${port}`)

enum MyEnum {
  A,
  B,
}
console.log(MyEnum.A);

const calcSum = (a: number, b: number) => {
    return a + b
}

const calc = calcSum(4, 10)
console.log(`The sum is ${calc}`)