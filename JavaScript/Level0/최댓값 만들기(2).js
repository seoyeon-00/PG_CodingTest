/*
[문제]
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

[제한사항]
- 10,000 ≤ numbers의 원소 ≤ 10,000
- 2 ≤ numbers 의 길이 ≤ 100

[입출력 예]
|            numbers           |  result  |
|------------------------------|----------|
|       [1, 2, -3, 4, -5]      |    15    |
|    [0, -31, 24, 10, 1, 9]    |    240   |
|   [10, 20, 30, 5, 5, 20, 5]  |    600   |
*/

function solution(numbers) {
  // 숫자 오름차순 정렬
  var sortNum = numbers.sort((a, b) => a - b);

  // 배열의 처음, 두번째 곱과 끝과 끝에서 하나 전의 index를 곱한 값을 비교하여 더 큰 값 출력
  return Math.max(
    sortNum[0] * sortNum[1],
    sortNum[numbers.length - 1] * sortNum[numbers.length - 2]
  );
}
