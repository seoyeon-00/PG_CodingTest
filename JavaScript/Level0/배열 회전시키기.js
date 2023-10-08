/*
[문제]
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

[입출력]
|            numbers          | direction |             result           |
|-----------------------------|-----------|------------------------------|
|           [1, 2, 3]         |  "right"  |           [3, 1, 2]          |
|  [4, 455, 6, 4, -1, 45, 6]  |   "left"  |  	[455, 6, 4, -1, 45, 6, 4]  |
*/

function solution(numbers, direction) {
  if (direction === "right") {
    // 배열에서 마지막 요소를 추출한 후 배열의 맨 앞에 삽입
    const lastElement = numbers.pop();
    numbers.unshift(lastElement);
  } else {
    // 첫 번째 요소를 추출한 후 배열 마지막에 삽입
    const firstElement = numbers.shift();
    numbers.push(firstElement);
  }

  return numbers;
}
