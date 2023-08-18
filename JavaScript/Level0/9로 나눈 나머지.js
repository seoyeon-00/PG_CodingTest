/*
[문제]
음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

[입출력]
|          number         |  result  |
|-------------------------|----------|
|          "123"          |     6    |
|  "78720646226947352489" |     2    |
*/

function solution(number) {
  // number을 배열로 변환
  let arr = number.split("");

  // 배열의 합계를 구함. arr 배열은 문자열로된 숫자이기 때문에
  // Number로 문자열을 숫자로 변환한다.
  let sum = arr.reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);

  // 정답 : 총합에서 9로 나눈 나머지
  return sum % 9;
}
