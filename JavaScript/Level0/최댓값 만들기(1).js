/*
[문제]
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

[입출력]
|          numbers          |   result   |
|---------------------------|------------|
|      [1, 2, 3, 4, 5]      |     20     |
|   [0, 31, 24, 10, 1, 9]   |     744    |
*/

function solution(numbers) {
  // 배열을 오름차순으로 정렬
  const sortNumbers = numbers.sort((a, b) => a - b);
  // Array.at()으로 배열의 요소 접근
  // Ex. array.at(-1) - 배열의 마지막 요소
  // 배열의 마지막, 마지막 전 배열의 곱을 리턴
  return sortNumbers.at(-1) * sortNumbers.at(-2);
}
