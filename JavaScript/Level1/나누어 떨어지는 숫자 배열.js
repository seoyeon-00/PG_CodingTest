/*
[문제]
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

[제한사항]
- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

[입출력]
|      arr      | divisor |     return     |
|---------------|---------|----------------|
| [5, 9, 7, 10] |    5    |  	 [5, 10]     |
| [2, 36, 1, 3] |    1    | [1, 2, 3, 36]  |
|    [3,2,6]    |  	 10   |      [-1]      |
|---------------|---------|----------------|
*/

function solution(arr, divisor) {
  // arr 배열을 순회하며 divisor과 나누어 떨어지는 원소 필터링
  // filter로 걸러진 원소를 오름차순으로 정렬
  const result = arr
    .filter((item) => item % divisor === 0)
    .sort((a, b) => a - b);

  // filter 처리한 데이터가 있다면 result 그렇지 않으면 [-1]을 출력
  return result.length !== 0 ? result : [-1];
}
