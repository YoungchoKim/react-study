interface UserA {
  name: string
}

interface UserB {
  age: number
}

const user: UserA & UserB = {
  name: 'Neo',
  age: 22
}
