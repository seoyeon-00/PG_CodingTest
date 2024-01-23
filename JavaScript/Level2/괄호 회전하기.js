/*
[문제]
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

(), [], {} 는 모두 올바른 괄호 문자열입니다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 
예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 
예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 
이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 
올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

[제한사항]
- s의 길이는 1 이상 1,000 이하입니다.

[입출력]
|       s       |  result  |
|---------------|----------|
|    "[](){}"   |     3    |
|    "}]()[{"   |     2    |
|     "[)(]"    |     0    |
|      "}}}"    |     0    |
*/

function solution(s) {
  // 올바른 괄호가 들어간 문자열 개수를 저장
  var res = 0;

  // 회전하여 재배치된 문자열 올바른 괄호를 가진 문자열인지 확인하는 함수 isCorrect
  function isCorrect(str) {
    // 비교할 괄호 stack에 저장
    var stack = [];
    // 괄호 문자열 매치를 위해 객체에 저장
    var obj = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    // str의 길이가 홀수일 경우 올바른 괄호 문자열이 나올 수 없기 때문에 false 리턴
    if (str.length % 2 !== 0) {
      return false;
    }

    // 문자열 str을 순회하여 char가 여는 괄호라면 stack에 추가한다.
    for (const char of str) {
      if (obj[char]) {
        stack.push(char);
      } else {
        // 닫는 괄호라면
        const lastBracket = stack.pop(); // 스택에서 마지막 원소 제거 및 lastBracket에 저장
        if (obj[lastBracket] !== char) {
          // 제거된 원소를 key값으로 하는 value 값이 char과 일치하지 않을 경우 false를 리턴
          return false; // 올바른 괄호 문자열이 아니기 때문에 바로 해당 문자열을 false로 리턴하게 된다.
        }
      }
    }

    // false가 아닐 경우 정상적으로 빈 배열의 stack을 리턴하게 된다.
    return stack;
  }

  // 반복문 진행하여 문자열을 회전시킨다.
  for (var i = 0; i < s.length; i++) {
    var rotatedS = s.slice(i) + s.slice(0, i);

    // false가 아니라면 res +1
    if (isCorrect(rotatedS)) {
      res++;
    }
  }

  return res;
}
