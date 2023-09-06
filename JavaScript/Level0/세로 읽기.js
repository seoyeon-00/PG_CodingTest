/*
[문제]
문자열 my_string과 두 정수 m, c가 주어집니다.
my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 
세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

[입출력 예]
|        my_string       | m | c |      result     |
|------------------------|---|---|-----------------|
| "ihrhbakrfpndopljhygc" | 4 | 2 |     "happy"     |
|      "programmers"     | 1 | 1 |  "programmers"  |
*/

function solution(my_string, m, c) {
  // 빈배열을 담는 answer
  var answer = [];

  // my_string의 요소를 순회하며 my_string을 m개씩 추출해서 answer에 배열로 저장
  // slice 함수를 사용하여 부분 문자열을 추출하고, push 함수를 사용
  for (var i = 0; i < my_string.length; i += m) {
    const addStr = my_string.slice(i, i + m);
    answer.push(addStr);
  }

  // answer 배열의 요소를 순회하며 c번째 텍스트 (index는 -1)를 추출하여 res에 저장
  var res = answer.map((item) => item[c - 1]);
  // 배열을 문자열로 전환
  return res.join("");
}
