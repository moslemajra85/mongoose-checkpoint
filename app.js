require('dotenv').config();
const colors = require('colors');
const connectToDB = require('./db');
const Individual = require('./models/individual');

connectToDB();

const individuals = [
  {
    name: 'Mossy Smith',
    age: 22,
    favoriteFoods: ['Pizza', 'Meat Ball', 'Cheese Cake'],
  },
  {
    name: 'Lucy Johnson',
    age: 30,
    favoriteFoods: ['Sushi', 'Ramen', 'Mochi'],
  },
  {
    name: "Jack O'Neil",
    age: 25,
    favoriteFoods: ['Burgers', 'Fries', 'Ice Cream'],
  },
  {
    name: 'Emma Thompson',
    age: 27,
    favoriteFoods: ['Pasta', 'Salad', 'Tiramisu'],
  },
  {
    name: 'Oliver Brown',
    age: 35,
    favoriteFoods: ['Steak', 'Mashed Potatoes', 'Chocolate Cake'],
  },
  {
    name: 'Sophia Davis',
    age: 28,
    favoriteFoods: ['Pad Thai', 'Spring Rolls', 'Mango Sticky Rice'],
  },
  {
    name: 'Liam Wilson',
    age: 40,
    favoriteFoods: ['Barbecue', 'Cornbread', 'Apple Pie'],
  },
  {
    name: 'Ava Martinez',
    age: 24,
    favoriteFoods: ['Tacos', 'Guacamole', 'Churros'],
  },
  {
    name: 'William White',
    age: 33,
    favoriteFoods: ['Lasagna', 'Garlic Bread', 'Cannoli'],
  },
  {
    name: 'Mia Gonzalez',
    age: 26,
    favoriteFoods: ['Falafel', 'Hummus', 'Baklava'],
  },
];

async function createIndividual() {
  try {
    const individual = new Individual({
      name: 'Mossy Smith',
      age: 22,
      favoriteFood: ['Pizza', 'Meat Ball', 'Cheese Cake'],
    });

    const result = await individual.save();
    console.log(result);
  } catch (error) {
    console.log(
      'We could not create an individual'.red.underline,
      error.message
    );
  }
}

async function seedData() {
  try {
    await Individual.create(individuals);
  } catch (error) {
    console.log('We could not add documents'.red.underline, error.message);
  }
}

async function findPeopleWithName(name) {
  try {
    const results = await Individual.find({
      name,
    });

    console.log(results);
  } catch (error) {
    console.log('We could not find documents'.red.underline, error.message);
  }
}

async function findOneIndividual() {
  try {
    const results = await Individual.findOne({
      name: 'William White',
    });

    console.log(results);
  } catch (error) {
    console.log('We could not find document'.red.underline, error.message);
  }
}

async function findIndividualById(id) {
  try {
    const result = await Individual.findById(id);
    console.log(result);
  } catch (error) {
    console.log('We could not find document'.red.underline, error.message);
  }
}

async function updateIndividual(id) {
  try {
    let individual = await Individual.findById(id);

    if (!individual) {
      return;
    }

    individual.favoriteFood.push('Pizza', 'Cheese Burger');

    individual = await individual.save();
  } catch (error) {
    console.log('Something went Wrong'.red.underline, error);
  }
}

async function removeIndividual(id) {
  try {
    const result = await Individual.findByIdAndDelete(id);
  } catch (error) {
    console.log('Something went Wrong'.red.underline, error);
  }
}

async function findSomeIndividuals() {
  try {
    const result = await Individual.find({
      age: { $gt: 30 },
    })
      .sort('name')
      .limit(2)
      .select({
        age: 0,
      });

    console.log(result);
  } catch (error) {
    console.log('Something went Wrong'.red.underline, error);
  }
}
//createIndividual();
//seedData();
//findPeopleWithName('Liam Wilson');
//findOneIndividual();
//findIndividualById('671953e97fcfc3c2a18ce1b8');
//updateIndividual('671953e97fcfc3c2a18ce1b8');
//removeIndividual('671953e97fcfc3c2a18ce1b8');

findSomeIndividuals();
