/*
[문제]
문자열 my_string이 매개변수로 주어집니다. 
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

[제한사항]
- 1 ≤ my_string의 길이 ≤ 1,000
- my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

[입출력 예]
|     my_string     |   result  |
|-------------------|-----------|
|  "aAb1B2cC34oOp"  |     10    |
|   "1a2b3c4d123"	  |     16    |
*/

function solution(my_string) {
  // 자연수를 찾아 저장할 변수 answer
  var answer = 0;

  // my_string 문자열을 순회
  for (var i of my_string) {
    // 숫자인지 확인하여, 숫자라면 answer에 더하기
    if (!isNaN(i)) {
      answer += Number(i);
    }
  }

  // 결과 출력
  return answer;
}
