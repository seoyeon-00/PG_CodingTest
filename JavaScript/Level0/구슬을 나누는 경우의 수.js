/*
[문제]
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 
머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

[입출력]
| balls | share |    result   |
|-------|-------|-------------|
|   3   |   2   |      3      |
|   5   |   3   |      10     |
|   30  |   15  |  155117520  |
*/

function solution(balls, share) {
  // n에 대하여 팩토리얼 계산하는 함수 작성
  function factorial(n) {
    var res = 1;
    for (var i = n; i > 0; i--) {
      res *= i;
    }
    return res;
  }

  // balls와 share가 같은 경우 1출력,
  // 아닐경우 balls개 중 share개를 뽑는 경우의 수 공식 적용
  // Math.round()를 사용하여 결과를 반올림하여 정수 형태로 반환
  return balls > share
    ? Math.round(
        factorial(balls) / (factorial(balls - share) * factorial(share))
      )
    : 1;
}
