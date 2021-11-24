const submissions =[
    {
        Name: 'Jane',
        Score: 95,
        Date: `2020-01-24`,
        Passed: true,
    },
    {
        Name: 'Joe',
        Score: 75,
        Date: `2018-05-14`,
        Passed: true,
    },
    {
        Name: 'Jack',
        Score: 59,
        Date: `2019-07-05`,
        Passed: false,
    },
    {
        Name: 'Jill',
        Score: 88,
        Date: `2020-04-22`,
        Passed: false,
    }
];

const addSubmission = (array, newName, newScore, newDate) => {
    array.push(
        {
            Name: newName,
            Score: newScore,
            Date: newDate,
            Passed: (newScore >= 60)? true: false,
        }
    );
}

addSubmission(submissions, `James`, 86, `01-06-2022`);
console.log(submissions);

// using .splice to delete
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
}

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
    let index = array.indexOf(name);
    array.splice(index, 1);
}

// deleteSubmissionByName(submissions, `James`);
// console.log(submissions);

const editSubmission = (array, index, score) => {
    array[index].Score = score;
    array[index].Passed = (score >= 60) ? true: false;
}

editSubmission(submissions, 4, 98);
console.log(submissions);


// // How to do it with for loop (manuelly)
// const findSubmissionByName = (array, name) => {
//     let foundSub = {};
//     // console.log(name);
//     for(let i=0; i<array.length; i++){
//         if(array[i].Name === name){
//             // console.log(array[i].Name);
//             foundSub = array[i]
//         }
//     }
//     return foundSub;
// }


// How to use the .find function
const findSubmissionByName = (array, name) => {
    let foundSub = array.find(sub => sub.Name === name);
    return foundSub;
}

console.log(findSubmissionByName(submissions, `Joe`));


const findLowestScore = (array) => {
    let lowScore = [];
    for (let i = 0; i < array.length; i++) {
        lowScore.push(array[i].Score)
    }
    // console.log(lowScore);
    let lowestScore = Math.min(...lowScore);
    // console.log(lowestScore);
    return lowestScore;
}

console.log(findLowestScore(submissions));

// Using for of loop to find average of value score.
const findAverageScore = (array) => {
    let allScore = 0;
    for (const potatoArray of array) {
        allScore = allScore + potatoArray.Score;
    }
    // console.log(allScore);
    let result = allScore / array.length;
    // console.log(result);
    return result;
}

console.log(findAverageScore(submissions));

const filterPassing = (array) => {
   let passingStudents = array.filter(future => future.Passed === true);
   return passingStudents;
}

console.log(filterPassing(submissions));

// How to use .filter function
const filter90AndAbove = (array) => {
    let lowestScore = array.filter(grade => grade.Score >= 90);
    return lowestScore;
}

console.log(filter90AndAbove(submissions));