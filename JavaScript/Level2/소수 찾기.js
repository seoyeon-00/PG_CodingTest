/*
[문제]
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 
흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 
종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

[제한사항]
- numbers는 길이 1 이상 7 이하인 문자열입니다.
- numbers는 0~9까지 숫자만으로 이루어져 있습니다.
- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

[입출력]
|  numbers  |   result   |
|-----------|------------|
|    "17"   |      3     |
|   "011"   |      2     |
*/

function solution(numbers) {
  // 만들 수 있는 종이 조각에서 소수의 개수 저장할 변수 answer
  let answer = 0;

  // 가질 수 있는 조합 저장
  let arr = [];
  let numArr = numbers.split("");

  // numbers가 가질 수 있는 조합을 구하는 함수 (중복 포함)
  function combination(num, n) {
    let result = [];

    if (n === 1) {
      return num.map((v) => [v]);
    }

    num.forEach((item, index) => {
      const rest = num.slice(0, index).concat(num.slice(index + 1)); // item을 제외한 배열
      const combine = combination(rest, n - 1);
      const attached = combine.map((v) => [item, ...v]);

      result.push(...attached);
    });
    return result;
  }

  // numbers의 개수 만큼 (= 최대 가질 수 있는 자리 수) 반복문 실행
  for (let i = 1; i <= numbers.length; i++) {
    arr.push(combination(numArr, i));
  }

  // 중첩 배열인 arr을 하나의 배열로 만들고 각 원소(하위 배열)를 문자열로 변환
  // 각 문자열을 정수로 변환 후 중복된 원소 filter
  const result = []
    .concat(...arr)
    .map((v) => v.join(""))
    .map((v) => parseInt(v))
    .filter((item, index, origin) => {
      if (!origin.slice(0, index).includes(item)) return item;
    });

  // 소수 확인하는 함수
  const isPrime = (num) => {
    if (num === 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  // result 배열에서 소수인 배열 판별
  for (const item of result) {
    if (isPrime(item)) answer++;
  }

  return answer;
}
