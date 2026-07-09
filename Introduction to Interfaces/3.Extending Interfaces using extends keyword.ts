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

