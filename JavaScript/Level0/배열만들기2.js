/*
[문제]
정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을
return 하는 solution 함수를 완성해 주세요.
만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

[입출력]
|     l    |     r    |                result                |
|----------|----------|--------------------------------------|
|     5    |    555   |    [5, 50, 55, 500, 505, 550, 555]   |
|     10   |    20    |                	[-1]                 |
*/

function solution(l, r) {
  var answer = [];

  // 정규식 - /^[05]+$/는 문자열이 0과 5만 포함하고 있을 때에만 true를 반환
  // ^: 특정 문자열로 시작
  // [05]: 0과 5 중 하나와 매칭됩니다. -> /[abc]/ : "a" 또는 "b" 또는 "c" 를 포함하는
  // +: 최소 한개 or 여러개
  // $: 특정 문자열로 끝남
  var regex = /^[05]+$/;

  while (true) {
    // test() 메서드는 정규 표현식을 판별해서, 그 여부를 true 또는 false로 반환
    var res = regex.test(l);

    // true일 경우 배열에 추가
    if (res) {
      answer.push(l);
    }

    // 1씩 증가
    l++;

    // r + 1 일경우, 반복문 중지
    if (l === r + 1) {
      break;
    }
  }

  return answer.length !== 0 ? answer : [-1];
}
