let personName: string= "Ayesha Imran"

//lowercase
console.log("lowercase:",personName.toLowerCase());

//uppercase
console.log("uppercase:",personName.toUpperCase());

//titlecase
console.log("titlecase:",personName.replace(/\bw/g,c =>c.toUpperCase()));