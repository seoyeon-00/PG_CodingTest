/*
[문제]
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

[입출력 예]
|       arr       |               queries              |      result     |
|-----------------|------------------------------------|-----------------|
| [0, 1, 2, 4, 3] |  	[[0, 4, 1],[0, 3, 2],[0, 3, 3]]  | [3, 2, 4, 6, 4] |
*/
function solution(arr, queries) {
  // arr를 복사해서 answer에 저장
  var answer = [...arr];

  // arr.length 만큼 반복문 실행
  // queries 배열의 원소 [s,e,k]를 추출하여 i와 비교하여
  // 삼항연산자의 조건과 일치하면 answer[i] + 1, 그렇지 않으면 answer[i]
  // answer[i] 자리에 변경된 값 저장해서 정답 출력
  for (let i = 0; i < arr.length; i++) {
    queries.forEach(([s, e, k]) => {
      const a =
        s <= i && e >= i
          ? i % k === 0
            ? answer[i] + 1
            : answer[i]
          : answer[i];
      answer[i] = a;
    });
  }
  return answer;
}
