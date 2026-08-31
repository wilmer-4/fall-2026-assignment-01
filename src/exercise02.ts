export function transcribeDNA(dna: string): string {
  let rna = "" // rna is an empty string, we will use the for loop to give it values.
  for (let i = 0; i < dna.length; i++) {
    const nucleotide = dna[i]; //assign nucleotide to be the current index
   if (nucleotide === "A") {
    rna += "U"
   } else if (nucleotide === "T") {
    rna += "A"
   } else if (nucleotide === "C") {
    rna += "G"
   } else if (nucleotide === "G") {
    rna += "C" //use the for loop to add the corresponding characeters to dna
   } else {
    throw new Error("There was an invalid nucleotide input!") //if an invalid nucelotide entered, this error will popup
   }
  
      
    
  }
  
return rna;

}
