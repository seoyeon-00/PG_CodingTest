/*
[문제]
연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 
예를 들면 다음과 같습니다.

- 12 ⊕ 3 = 123
- 3 ⊕ 12 = 312
양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.

단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

[제한사항]
- 1 ≤ a, b < 10,000

[입출력]
|   a   |   b   |  result  |
|-------|-------|----------|
|   2   |   91  |    364   |
|   91  |   2	  |    912   |
*/

function solution(a, b) {
  // 게산A : a, b를 문자열로 변환 후 합치고 다시 숫자로 변환
  var calA = Number(a.toString() + b.toString());
  // 계산 B : 2 * a * b를 계산
  var calB = 2 * a * b;

  // calA가 calB보다 크거나 같을 경우 calA, 작을경우 calB를 출력
  return calA > calB ? calA : calA === calB ? calA : calB;
}
