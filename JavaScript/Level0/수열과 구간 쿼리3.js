/*
[문제]
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

[입출력 예]
|       arr       |          queries        |      result     |
|-----------------|-------------------------|-----------------|
| [0, 1, 2, 3, 4] |  [[0, 3],[1, 2],[1, 4]  | [3, 4, 1, 0, 2] |
*/

function solution(arr, queries) {
  // 기존 배열을 유지하기 위해서 복사한 arr를 answer에 저장
  var answer = [...arr];

  // forEach문을 통해 queries를 순회하면서 요소 안에 배열 a,b를 추출
  queries.forEach(([a, b]) => {
    // 배열 요소 교환하기
    // answer[a] = answer[b] 과정으로 원본 answer[a] 값을 잃어버리지 않도록 copy에 저장
    const copy = answer[a];
    answer[a] = answer[b];
    answer[b] = copy;
  });

  return answer;
}
