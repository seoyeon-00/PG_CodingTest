/*
[문제]
문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 
사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 빈 문자열은 반환할 배열에 넣지 않습니다.

[제한사항]
- 1 ≤ myString ≤ 100,000
- myString은 알파벳 소문자로 이루어진 문자열입니다.

[입출력]
|     myString     |           result          |
|------------------|---------------------------|
|    "axbxcxdx"    |     ["a","b","c","d"]     |
|  "dxccxbbbxaaaa" |  ["aaaa","bbb","cc","d"]  |
*/

function solution(myString) {
  // 1. 문자열을 "x" 기준으로 배열로 변환
  // 2. "" 빈 문자열은 배열에서 제거 (filter)
  // 3. 유니코드 순서에 따라 오름차순 정렬
  return myString
    .split("x")
    .filter((item) => item !== "")
    .sort();
}
