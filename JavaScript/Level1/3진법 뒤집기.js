/*
[문제]
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 
이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

[제한사항]
n은 1 이상 100,000,000 이하인 자연수입니다.

[입출력]
|    n     | result |
|----------|--------|
|    45    |    7   |
|    125   |   229  |
*/

function solution(n) {
  // 앞뒤 반전 3진법 출력 함수
  function three(number) {
    // n을 3으로 나눴을 때 나머지를 저장
    let answer = [];
    // number가 0이 될 때까지 반복문 실행
    // number를 3으로 나눴을 때 나머지를 answer의 요소로 저장
    // number를 3으로 나눴을 때 몫을 소수값을 버린 후 number로 설정
    while (number !== 0) {
      answer.push(number % 3);
      number = Math.floor(number / 3);
    }
    return answer;
  }

  // 앞뒤 반전된 n의 배열 저장
  const base3 = three(n);
  // base3의 길이 저장
  const len = base3.length;

  // base3을 순회하여 3진법을 10진법으로 변환 후 새로운 배열로 반환(map)
  // 반환된 배열의 합(reduce)을 출력

  // base3 각 요소와 3의 거듭제곱 값을 곱하여 리턴
  // 첫번째 자릿수 item * 3^0 , 두번째 자릿수 item * 3^1....
  return base3
    .map((item, index) => {
      const calIndex = len - index - 1;
      return item * Math.pow(3, calIndex);
    })
    .reduce((acc, cur) => acc + cur, 0);
}
