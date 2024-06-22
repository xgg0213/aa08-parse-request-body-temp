function firstStep(input) {
  // Your code here 
  const res = input.split('&');
  console.log(res);
  return res;
}

function secondStep(input) {
  // Your code here 
  // input is an array of 2 strings
  const res = input.map((el) => el.split('=') );
  console.log(res);
  return res;
}

function thirdStep(input) {
  // Your code here 
  const res = input.map(([k,v]) => [k, v.replace(/\+/g, " ")]);
  console.log(res);

  return res;
}

function fourthStep(input) {
  // Your code here 
  const res = input.map(([k, v]) => [k, decodeURIComponent(v)]);
  console.log(res);

  return res;

}

function fifthStep(input) {
  // Your code here 
  return input.reduce((acc, [k,v]) => {
    acc[k] = v;
    return acc;
  }, {});
}

function parseBody(str) {
  // Your code here 
  const splitString = firstStep(str);
  const splitKvPairs = secondStep(splitString);
  const replacePlus = thirdStep(splitKvPairs);
  const decodeUri = fourthStep(replacePlus);
  const pojo = fifthStep(decodeUri);
  console.log(pojo);
  return pojo;

}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
