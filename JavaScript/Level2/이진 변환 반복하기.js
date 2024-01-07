/*
[문제]
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 
계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 
제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

[제한사항]
- s의 길이는 1 이상 150,000 이하입니다.
- s에는 '1'이 최소 하나 이상 포함되어 있습니다.

[입출력]
|         s        |  result  |
|----------- ------|----------|
|  "110010101001"  |   [3,8]  |
|      "01110"     |   [3,3]  |
|     "1111111"    |   [4,1]  |
*/

function solution(s) {
  // 반복문 진행한 개수 저장
  let count = 0;
  // 제거한 0의 개수를 저장
  let zeroCount = 0;

  // s의 길이가 1이 될때까지 반복문 진행
  while (s.length !== 1) {
    // 문자열에서 0을 제거
    var deleteZero = s.split("0").join("");
    // 제거한 0의 개수 zeroCount에 추가
    zeroCount += s.length - deleteZero.length;
    // deleteZero의 길이에 대하여 이진 변환 후 재할당
    s = deleteZero.length.toString(2);
    // count +1
    count++;
  }

  // 반복문이 끝나면 count, zeroCount 배열화하여 출력
  return [count, zeroCount];
}
