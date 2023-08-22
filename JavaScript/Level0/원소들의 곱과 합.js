/*
[문제]
정수가 담긴 리스트 num_list가 주어질 때, 
모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
  var multiply = 1;

  // num_list의 합
  var add = num_list.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);

  // num_list의 곱
  for (let i = 0; i < num_list.length; i++) {
    multiply *= num_list[i];
  }

  // 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0
  // Math.pow(a,b) -> a를 b번 거듭제곱한 값을 반환
  return multiply < Math.pow(add, 2) ? 1 : 0;
}
