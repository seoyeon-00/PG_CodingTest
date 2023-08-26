/*
[문제]
boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 
다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.

[입출력 예]
|   x1   |    x2   |   x3   |   x4   | result |
|--------|---------|--------|--------|--------|
|  false |   true  |  true  |  true  |  true  |
|  true  |  false  |  false |  false |  false |

*/

function solution(x1, x2, x3, x4) {
  // (x1 || x2) (x3 || x4)는 하나라도 true이면 true, 모두 false면 false를 출력
  // 위에서 계산한 boolean값으로 계산 둘다 true면 true를 출력 하나라도 false면 false를 출력한다.
  return (x1 || x2) && (x3 || x4);
}
