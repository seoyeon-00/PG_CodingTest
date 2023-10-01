/*
[문제]
정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠
n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

[입출력 예]
|     num_list    |   n   |      result     |
|-----------------|-------|-----------------|
|    [2, 1, 6]    |   1   |    [1, 6, 2]    |
| [5, 2, 1, 7, 5] |   3   | [7, 5, 5, 2, 1] |
*/
function solution(num_list, n) {
  // num_list.slice(n) : num_list에서 n번째 index부터 배열 끝까지 복사
  // concat : 배열 합치기
  // num_list.slice(0, n) : num_list의 0번째 index부터 n 번째 index 전까지 복사
  const result = num_list.slice(n).concat(num_list.slice(0, n));
  return result;
}
