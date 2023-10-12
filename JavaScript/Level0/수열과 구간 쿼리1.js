/*
[문제]
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.

각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

[입출력]
|         arr        |         queries            |      result     |
|--------------------|----------------------------|-----------------|
|   [0, 1, 2, 3, 4]  |   [[0, 1],[1, 2],[2, 3]]   | [1, 3, 4, 4, 4] |
*/

function solution(arr, queries) {
  // qureies 배열 순회하여 2차원 배열 각 원소(query)의 a,b값 추출.
  // a, b 범위에서 반복문 실행 arr[a] ~ arr[b] 까지의 원소에 대하여 +1 증가.
  queries.map(([a, b]) => {
    for (var i = a; i <= b; i++) {
      arr[i] = arr[i] + 1;
    }
  });

  // 수정된 arr 배열을 리턴
  return arr;
}
