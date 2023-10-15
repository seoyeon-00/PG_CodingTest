/*
[문제]
정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 
담은 리스트를 return하도록 solution 함수를 완성해주세요.

[제한사항]
- 2 ≤ num_list의 길이 ≤ 30
- 1 ≤ num_list의 원소 ≤ 9
- 1 ≤ n ≤ num_list의 길이

[입출력]
|    num_list	    |   n   |     result     |
|-----------------|-------|----------------|
|    [2, 1, 6]    |   3   |      [6]       |
| [5, 2, 1, 7, 5] |   2   |  [2, 1, 7, 5]  |
*/

function solution(num_list, n) {
  // 결과를 저장할 빈배열
  var answer = [];
  // num_list에서 n번째는 배열의 index 기준으로 -1을 적용하여 n번째 부터 마지막 원소까지 추출
  answer = num_list.slice(n - 1);
  return answer;
}
