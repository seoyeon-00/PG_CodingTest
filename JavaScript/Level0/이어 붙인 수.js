/*
[문제]
정수가 담긴 리스트 num_list가 주어집니다. 
num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

[입출력 예]
|     num_list     | result |
|------------------|--------|
|  [3, 4, 5, 2, 1] |   393  |
|   [5, 7, 8, 3]   |   581  |
*/

function solution(num_list) {
  // even, odd - 짝수, 홀수를 담는 빈 배열 생성
  var even = [];
  var odd = [];

  // num_list 배열을 순회하면서 짝수인지 홀수인지 판별 배열에 숫자 추가
  num_list.forEach((item) => {
    item % 2 === 0 ? even.push(item) : odd.push(item);
  });

  // 배열에 담긴 숫자 문자열로 변환 -> 숫자로 변환 -> 그 결과 값을 더함
  var answer = Number(even.join("")) + Number(odd.join(""));

  return answer;
}
