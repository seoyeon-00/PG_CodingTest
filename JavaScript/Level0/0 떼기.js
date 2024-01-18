/*
[문제]
정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 
0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

[제한사항]
- 2 ≤ n_str ≤ 10
- n_str이 "0"으로만 이루어진 경우는 없습니다.

[입출력]
|     n_str    |    result    |
|--------------|--------------|
|    "0010"    |     "10"     |
|   "854020"   |   "854020"   |
*/

function solution(n_str) {
  // 문자열 n_str 반복문 실행
  for (var i = 0; i < n_str.length; i++) {
    // 0일 경우 0을 " "로 변환
    if (n_str[i] === "0") {
      n_str = n_str.replace("0", " ");
    } else {
      // 0이 아닐경우 break;
      break;
    }
  }

  // 문자열 좌우 공백제거해서 출력
  return n_str.trim();
}
