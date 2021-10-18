const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map(line => {
    console.log(line)
  let action = line.split(' ')
  console.log(action)
  const capital = action.map(key => key.charAt(0).toUpperCase() + key.slice(1))
  console.log(capital)
  const results = capital.join(' ')
  console.log(results)
  return results
}) 
  
}
