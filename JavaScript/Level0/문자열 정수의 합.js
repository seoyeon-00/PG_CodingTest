/*
[문제]
한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 
각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

[제한사항]
- 3 ≤ num_str ≤ 100

[입출력]
|    num_str    |  result  |
|---------------|----------|
|  "123456789"	|    45    |
|   "1000000"   |     1    |
*/

function solution(num_str) {
  // 문자열을 배열로 변환하여 reduce로 숫자의 합을 리턴
  return num_str.split("").reduce((acc, cur) => acc + Number(cur), 0);
}
