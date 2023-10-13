/*
[문제]
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 
n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

[제한사항]
# 5 ≤ num_list의 길이 ≤ 20
# 1 ≤ num_list의 원소 ≤ 9
# 1 ≤ n ≤ 4

[입출력]
|      num_list	     |   n   |   result   |
|--------------------|-------|------------|
| [4, 2, 6, 1, 7, 6] |   2   |  [4, 6, 7] |
| [4, 2, 6, 1, 7, 6] |   4   |   [4, 7]   |
*/

function solution(num_list, n) {
  // 결과를 저장하는 빈 배열 answer
  var answer = [];

  // 반복문 - num_list 배열 순회 0부터 시작하여 n씩 증가
  for (var i = 0; i < num_list.length; i += n) {
    // answer에 num_list[i] 추가
    answer.push(num_list[i]);
  }
  return answer;
}
