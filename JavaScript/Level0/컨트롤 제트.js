/*
[문제]
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 
문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 
더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 
머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

[입출력]
|        s       |    result    |
|----------------|--------------|
|    "1 2 Z 3"   |       4      |
|  "10 20 30 40" |      100     |
|  "10 Z 20 Z 1" |       1      |
|   "10 Z 20 Z"  |       0      |
|  "-1 -2 -3 Z"  |      -3      |
*/

function solution(s) {
  var answer = 0;

  // 문자열을 " "(공백)을 기준으로 배열을 생성
  var arr = s.split(" ");

  // 반복문을 통해 배열 순회
  for (var i = 0; i < arr.length; i++) {
    // Z가 아니면 arr[i] 숫자를 더하고
    // "Z"인 경우 arr[i-1]의 숫자를 빼준다.
    if (arr[i] !== "Z") {
      answer += parseInt(arr[i]);
    } else {
      answer -= parseInt(arr[i - 1]);
    }
  }

  return answer;
}
