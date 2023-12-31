/*
[문제]
3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 
3x 마을 사람들의 숫자는 다음과 같습니다.

10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자

|  10진법  |  3x 마을에서 쓰는 숫자	10진법  |
|----------|------------------------------|
|     1    |               1              |
|     2    |               2              |
|     3    |               4              |
|     4    |               5              |
|     5    |               7              |
|     6    |               8              |
|     7    |              10              |
|     8    |              11              |
|     9    |              14              |
|    10    |              16              |

정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

[제한사항]
1 ≤ n ≤ 100

[입출력]
|    n     |  result |
|----------|---------|
|    15    |    25   |
|    40    |    76   |
*/

function solution(n) {
  // 입력한 n의 값에 대해 3x 마을에서 사용하는 수를 저장
  var useNum = 1;

  // n번 반복문 실행
  for (var i = 1; i <= n; i++) {
    // 만약 useNum이 3의 배수거나, 문자열로 변환했을 때 "3"을 포함하면 useNum을 1 증가시킴
    while (true) {
      if (useNum.toString().includes("3") || useNum % 3 === 0) {
        useNum += 1;
      } else {
        // 그렇지 않으면 answer 배열에 useNum을 추가하고 무한 루프를 탈출
        useNum += 1;
        break;
      }
    }
  }

  // 최종적으로 찾은 숫자의 이전 숫자를 반환 (useNum - 1)
  return useNum - 1;
}
