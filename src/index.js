// update objects

const person = {
  name: 'Ed', address: {
    country: 'United States',
    city: 'San Francisco',
  }
};
const updated = {
  ...person,
  address: {
    ...person.address,
    city: 'New York',
  },
  name: 'Eddy'
};
console.log('person', updated)