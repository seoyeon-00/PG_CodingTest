/*
[문제]
정수 num이 짝수일 경우 "Even"을 반환하고 
홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

[입출력]
|   num   |  result  |
|---------|----------|
|    3    |  "Odd"   |
|    4    |  "Even"  |
*/

function solution(num) {
  // num을 2로 나눠서 나머지가 0이면 "Even", 0이 아니면 "Odd"
  return num % 2 === 0 ? "Even" : "Odd";
}
