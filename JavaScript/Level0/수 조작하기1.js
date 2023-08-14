/*
[문제]
정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, 
control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

# [입출력 예]
# | n |      control     | result |
# |---|------------------|--------|
# | 0 |   "wsdawsdassw"  |   -1   |
*/

function solution(n, control) {
  var answer = n;

  // control의 문자열 수만큼 반복
  for (var i = 0; i < control.length; i++) {
    // control 문자열마다 조건문 실행
    switch (control[i]) {
      case "w":
        answer += 1;
        break;
      case "s":
        answer -= 1;
        break;
      case "d":
        answer += 10;
        break;
      case "a":
        answer -= 10;
        break;
      default:
        break;
    }
  }

  return answer;
}
