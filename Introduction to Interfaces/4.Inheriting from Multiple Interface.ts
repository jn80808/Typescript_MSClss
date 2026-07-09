//here we will have multiple interfaces and we will inherit from multiple interfaces


interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

interface UserWithAddress {
  name: string;
  email: string;
  phone: number;
  gender: string;
  address: string;
}


interface UserWithAddress extends User {
  address: string;
}



const user: User = {
  name: "John",
  email: "john@email.com",
  phone: 9876543,
  gender: "Male",
};

const userWithAddress: UserWithAddress = {
  name: "John",
  email: "john@email.com",
  phone: 9876543,
  gender: "Male",
  address: "This is an address",
};












