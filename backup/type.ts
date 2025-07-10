interface User {
  name: string
  age: number
}

type HelloWorld = string | number

type User2 = {
  name: string
  age: number
}

// 타입스크립트에서 객체 타입의 경우 interface가 더 권장됨
//
