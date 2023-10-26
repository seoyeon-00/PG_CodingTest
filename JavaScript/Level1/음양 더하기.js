/*
[문제]
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

[제한사항]
⇒ absolutes의 길이는 1 이상 1,000 이하입니다.
  ˚ absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
⇒ signs의 길이는 absolutes의 길이와 같습니다.
  ˚ signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

[입출력]
|  absolutes  |        signs        |  result  |
|-------------|---------------------|----------|
|   [4,7,12]  |  [true,false,true]  |     9    |
|   [1,2,3]   |	 [false,false,true] |     0    |
*/

function solution(absolutes, signs) {
  // 계산한 결과 저장
  var answer = 0;
  // sign 배열 순회하여 sign[i] true면 +, false - 진행
  for (var i = 0; i < signs.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
