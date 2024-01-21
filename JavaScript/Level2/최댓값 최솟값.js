/*
[문제]
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

[제한 조건]
- s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

[입출력]
|       s       |    result   |
|---------------|-------------|
|   "1 2 3 4"   |    "1 4"    |
| "-1 -2 -3 -4"	|   "-4 -1"   |
|    "-1 -1"    |   "-1 -1"   |
*/

function solution(s) {
  // 문자열을 배열로 변환하여 오름차순으로 숫자 정렬
  var sortNum = s.split(" ").sort((a, b) => a - b);
  // 배열 첫번째 값 + 공백 + 배열 마지막 값 합쳐 출력
  return sortNum[0] + " " + sortNum[sortNum.length - 1];
}
