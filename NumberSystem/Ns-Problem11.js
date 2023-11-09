// Q. Find out sum of all digits of a given number?

function sumNumber(number) {
    const numSum = Array.from(number.toString(), Number).reduce((sum, digit) => sum + digit);
    return numSum;
  }
  const num = 12345;
  const totalnum = sumNumber(num);
  console.log(totalnum);