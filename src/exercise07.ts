//TASK: Use fs.readFileSync to read this file synchronously.
//Define and export an object type named Gradebook using index signatures
//to cleanly represent this open-ended data structure. Write and export a function 
//The function must load the JSON file, parse it using your Gradebook contract.
//and calculate the average score for the given subject across all students who enrolled.
import fs from 'fs';

export function calculateSubjectAverage(subject: string): number {
  type Gradebook = {
    [name: string]: {
      [subject: string]: number

    }
  }

  
  const data = fs.readFileSync('data/gradebook.json', {encoding: 'utf8', flag: 'r'});


  const parsed: Gradebook = JSON.parse(data)
  

  let total = 0;
  let count = 0;

  for (const name in parsed) {
    if (subject in parsed[name]) {
      total += parsed[name][subject];
      count++
    }
    if (count === 0)
      return 0; //had to add this to make to handle 0 gracefully.
  }

  return total / count;
}
