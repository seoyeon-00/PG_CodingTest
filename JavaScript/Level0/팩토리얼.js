/*
[문제]
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 
return 하도록 solution 함수를 완성해주세요.

[입출력]
|      n      | result |
|-------------|--------|
|   3628800   |   10   |
|      7      |    3   |
*/

function solution(n) {
  // n과 비교할 팩토리얼 값을 저장
  var answer = 1;
  let num = 0;

  // 반복문을 돌려서 answer에 n을 곱함
  // 곱셈이 끝나면 num에 1 증가
  while (true) {
    answer *= num + 1;
    num++;

    // answer이 n보다 크면 루프를 종료
    if (answer > n) {
      break;
    }
  }

  // answer이 n보다 크면 해당 조건 이하의 최대 팩토리얼을 결과값으로 내려야하기 때문에
  // num에서 1을 뺀다.
  return num - 1;
}
