/*
[문제]
정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

[제한사항]
- 1 ≤ n ≤ 100

[입출력 예]
|   n   |            result           |
|-------|-----------------------------|
|   10  |     	[1, 3, 5, 7, 9]       |
|   15  | [1, 3, 5, 7, 9, 11, 13, 15] |
*/

function solution(n) {
  var answer = [];
  // for문 index 1부터 n까지 시작해서 2씩 증가
  for (var i = 1; i <= n; i += 2) {
    // 홀수 index를 배열 요소로 추가
    answer.push(i);
  }

  return answer;
}
