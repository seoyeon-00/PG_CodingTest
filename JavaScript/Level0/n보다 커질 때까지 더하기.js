/*
[문제]
정수 배열 numbers와 정수 n이 매개변수로 주어집니다. 
numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간
이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

[입출력]
|          numbers	       |    n    |  result  |
|--------------------------|---------|----------|
| [34, 5, 71, 29, 100, 34] |   123   |    139   |
|   [58, 44, 27, 10, 100]  |   139   |    239   |
*/

function solution(numbers, n) {
  var result = 0;
  // numbers 배열을 반복하여 각 요소의 합을 계산하며, 조건 합계가 n보다 작거나 같을 때
  // 계산을 진행하며 n을 초과했을 시 결과 값을 return 합니다.
  result = numbers.reduce((acc, cur) => {
    if (acc <= n) acc += cur;
    return acc;
  }, 0);
  return result;
}
