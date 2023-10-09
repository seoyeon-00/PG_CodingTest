/*
[문제]
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 
담은 리스트를 return하도록 solution 함수를 완성해주세요.

[입출력]
|           num_list           |          result         |
|------------------------------|-------------------------|
|  [12, 4, 15, 46, 38, 1, 14]  |    [1, 4, 12, 14, 15]   |
*/

function solution(num_list) {
  // num_list를 오름차순으로 정렬하여 작은 수 부터 5개의 수를 결과로 return
  const sortResult = num_list.sort((a, b) => a - b);
  return sortResult.slice(0, 5);
}
