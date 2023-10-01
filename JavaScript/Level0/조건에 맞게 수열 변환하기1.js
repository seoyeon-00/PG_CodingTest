/*
[문제]
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

[입출력]
|           arr          |         result        |
|------------------------|-----------------------|
| [1, 2, 3, 100, 99, 98] | [2, 2, 6, 50, 99, 49] |
*/

function solution(arr) {
  // 기본 배열 arr를 순회하여 새로운 배열 result 생성
  // arr item이 50 이상이고 짝수일 때 item을 2로 나누고 50 미만 홀수 일때 item을 2로 곱하고 그렇지 않을 경우 item 출력
  const result = arr.map((item) => {
    return item >= 50 && item % 2 === 0
      ? item / 2
      : item < 50 && item % 2 !== 0
      ? item * 2
      : item;
  });
  return result;
}
