interface person {
    name: string;
    age: number;
    gender: string;
    aadhar?: string; // Optional property
}

const person1: person = {
    name: "John",
    age: 30,
    gender: "Male",
    aadhar: "1234-5678-9101" // Optional property provided
};

interface customer {
    name: string;
    age: number;
    balance: number;
}

const customer1: Partial<customer> = {
    name: "Jane",
    age: 28,
};

const customer2: Required<customer> = {
    name: "Jane",
    age: 28,
    balance: 1500.50
};

const customer3: Readonly<customer> = {
    name: "Jane",
    age: 28,
    balance: 1500.50
};
