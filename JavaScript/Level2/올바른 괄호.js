/*
[문제]
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 

예를 들어
- "()()" 또는 "(())()" 는 올바른 괄호입니다.
- ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

[제한사항]
- 문자열 s의 길이 : 100,000 이하의 자연수
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

[입출력]
|     n    |  result  |
|----------|----------|
|  "()()"  |   true   |
| "(())()" |   true   |
|  ")()("  |   false  |
|  "(()("  |   false  |
*/

function solution(s) {
  // 객체 생성
  var obj = {
    "(": 0,
    ")": 0,
  };

  // 문자열 s 순회하여 "(", ")" 단어 구분
  // obj["("] === 0이면서 ")"으로 시작하면 false 리턴
  // 두 숫자가 같아질 경우 0으로 리셋
  s.split("").forEach((item) => {
    if (obj["("] === 0 && item === ")") {
      return false;
    }

    if (item === "(") {
      obj["("] += 1;
    } else {
      obj[")"] += 1;
    }

    if (obj["("] === obj[")"]) {
      obj["("] = 0;
      obj[")"] = 0;
    }
  });

  // obj의 각 key의 value 값이 같다면 true 다르면 false
  return obj["("] === obj[")"] ? true : false;
}

// 다른 풀이
function solution(s) {
  var num = 0;

  // ")"으로 시작하면 false 리턴
  if (s[0] == ")") return false;

  // 문자열 순회
  for (var i = 0; i < s.length; i++) {
    // "(" => +1
    // ")" => - 1
    s[i] === "(" ? (num += 1) : (num -= 1);

    // 음수값일 때 false 리턴
    if (num < 0) {
      return false;
    }
  }

  // num이 0이면 true 0이 아니면 false (괄호의 개수가 불일치 하므로 짝이 지어질 수 없는 구조)
  return num === 0 ? true : false;
}
