/*
[문제]
두 수가 n과 m이라면
- ">", "=" : n >= m
- "<", "=" : n <= m
- ">", "!" : n > m
- "<", "!" : n < m

두 문자열 ineq와 eq가 주어집니다. 
ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 
그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

# [입출력 예]
# |  ineq  |   eq   |  n |  m | result |
# |--------|--------|----|----|--------|
# |   "<"  |   "="  | 20 | 50 |    1   |
# |   ">"  |   "!"  | 41 | 78 |    0   |
*/

function solution(ineq, eq, n, m) {
  var answer = 0;

  // (삼항연산자) eq가 = 일때, 아닐 때로 나눠서 연산자를 합친다.
  var operator = eq === "=" ? ineq + "=" : ineq + "";

  // eval - 문자열을 JavaScript 코드로 해석하여 해석된 코드를 실행
  if (eval(n + operator + m)) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}
