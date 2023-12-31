/*
[문제]
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

[제한 조건]
- n은 10,000,000,000이하인 자연수입니다.

[입출력]
|     n     |    result    |
|-----------|--------------|
|   12345   |  [5,4,3,2,1] |
*/

function solution(n) {
  // n 숫자형을 문자열로 전환 후 문자열을 배열로 변경
  // 배열을 뒤집고 배열을 순회하여 각 요소를 숫자형으로 전환 후 리턴
  return Array.from(String(n))
    .reverse()
    .map((num) => Number(num));
}
