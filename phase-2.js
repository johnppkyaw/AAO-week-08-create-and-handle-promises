function stretch(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft < 1000) {
      reject('Error: you dont have enough time to stretch');
    } else {
      setTimeout(() => resolve(timeLeft - 1000), 1000);
    }
  }).then((timeLeft) => {
    console.log('done stretching')
    return timeLeft;
  })
}

function runOnTreadmill(timeLeft) {
  return new Promise((resolve, reject) => {
    if(timeLeft < 500) {
      reject('Error: you dont have enough time to run on treadmill')
    } else {
      setTimeout(() => resolve(timeLeft - 500), 500);
    }
  }).then((timeLeft) => {
    console.log('done running on treadmill')
    return timeLeft;
  })
}

function liftWeights(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft < 2000) {
      reject('Error: you don\'t have enough time to lift weights')
    } else {
      setTimeout(() => resolve(timeLeft - 2000), 2000);
    }
  }).then((timeLeft) => {
    console.log('done lifting weights')
    return timeLeft;
  })
}

function workout(totalTime) {
  stretch(totalTime)
  .then((timeLeft) => runOnTreadmill(timeLeft))
  .then((timeLeft) => liftWeights(timeLeft))
  .then((timeLeft) => console.log('done working out with ', timeLeft/1000, ' seconds left'))
  .catch((err) => console.log(err));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
//   should print out the following:
//     Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
