
// STATE
// Add array of freelancers

const names = ['Mariana', 'Ozan', 'Simba', 'Luis', 'Celdy', 'Gui', 'Julia', 'Travis', 'Brian', 'Charbel', 'Carl']
const occupations = ['Singer', 'Architect', 'President', 'Programmer', 'Dancer', 'Athlete', 'Psychologist', 'Politician', 'Actor', 'Author', 'Clown']
const freelancers = [
  {
    name: 'Mariana',
    occupation: 'Singer',
    price: 27
  },
  {
    name: 'Simba',
    occupation: 'President',
    price: 72
  },
]

// setInterval will call 'addFreelancer' every 5000 miliseconds (5 second)
const addFreelancerIntervalId = setInterval(addFreelancer, 5000)

render(); // Call this function once to render initial state

function render() {
  // Render the names
  const names = document.querySelector('#names');
  const nameElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = ('name', freelancer.name);
    // element.classList.add('name', freelancer.name);
    return element;
  })
  names.replaceChildren(...nameElements)

  // render the occupations
  const occupations = document.querySelector('#occupations');
  const occupationElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = ('occupation', freelancer.occupation);
    return element;
  })
  occupations.replaceChildren(...occupationElements)
  
  // render the prices
  const prices = document.querySelector('#prices');
  const priceElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = ('price', freelancer.price);
    return element;
  })
  prices.replaceChildren(...priceElements)

  // render the average price
  const averagePrice = calculateAveragePrice(freelancers);
  const averagePrices = document.querySelector('#average-price');
  averagePrices.textContent = `The average starting price is $${averagePrice}`;

}

function calculateAveragePrice() {
  const total = freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0);
  const average = total / freelancers.length;
  return average.toFixed(2); // Limits average to 2 decimal places
}

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 100);  


  
  freelancers.push({name, occupation, price});

  
  render();

}
