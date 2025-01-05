
let iterationsCount = 100000; // Default own value.
let generatedNumbers = 0; // Additional variable created in case if iterationsCount will not equal generatedNumbers in any reasons.
let oddCount = 0;
let evenCount = 0;


function getRandomInt(min = 100, max = 1000) { // Defalult function arguments added due task description.
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max) + 1; // Fixed max border issue in the stolen function.
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


const isEven = (num) => num % 2 === 0;


function generateNums(iterationsCount) {
    do {
        let result = getRandomInt(); 
        if (isEven(result)) {
            evenCount++;
        }
        else oddCount++;
    iterationsCount--;  
    generatedNumbers++;  
} while (iterationsCount);
}


function percentCalculate(numCount){
   let result = (numCount / generatedNumbers) * 100;
   return result.toFixed(1); // For pretty view.
}


function possibilityTheory() {
    generateNums(iterationsCount);
    let evensPercent = percentCalculate(evenCount);
    let oddsPercent = percentCalculate(oddCount);
    console.log(`Generated numbers count: ${generatedNumbers} \nEvens: ${evenCount} - ${evensPercent}% \nOdds: ${oddCount} - ${oddsPercent}%`)
}


possibilityTheory()