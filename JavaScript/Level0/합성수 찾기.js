/*
[문제]
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 
자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

[제한사항]
- 1 ≤ n ≤ 100

[입출력]
|   n    | result  |
|--------|---------|
|   10   |    5    |
|   15   |    8    |
*/

function solution(n) {
  var answer = 0;

  // 약수의 개수를 구하는 함수 divisor
  function divisor(num) {
    let result = [];
    let index = 1;

    // num의 제곱근까지만 확인
    // index와 곱하여 num이 되는 값을 함께 출력하면서, 중복된 값도 피할 수 있음
    while (index <= Math.sqrt(num)) {
      if (num % index === 0) {
        result.push(index);

        // 중복된 값을 피하기 위한 조건
        // num / index !== index 조건이 성립할 경우 이미 추가한 값이므로 중복을 피할 수 있음
        if (num / index !== index) result.push(num / index);
      }
      index++;
    }

    // num의 약수의 개수 출력
    return result.length;
  }

  // 1부터 n까지 약수의 개수를 구하고 결과가 3이상이면 answer 증가
  for (var i = 1; i <= n; i++) {
    divisor(i) >= 3 ? (answer += 1) : (answer += 0);
  }

  return answer;
}
