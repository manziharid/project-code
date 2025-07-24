const createObject = (key, value) => {
  return {
    [key]: value,
  };
};

const person = createObject('name', 'John');
console.log(person);