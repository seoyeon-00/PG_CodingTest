/*
[문제]
0번부터 n - 1번까지 n명의 학생 중 3명을 선발하는 전국 대회 선발 고사를 보았습니다. 
등수가 높은 3명을 선발해야 하지만, 개인 사정으로 전국 대회에 참여하지 못하는 학생들이 있어 참여가 가능한 학생 중 등수가 높은 3명을 선발하기로 했습니다.
각 학생들의 선발 고사 등수를 담은 정수 배열 rank와 전국 대회 참여 가능 여부가 담긴 boolean 배열 attendance가 매개변수로 주어집니다. 
전국 대회에 선발된 학생 번호들을 등수가 높은 순서대로 각각 a, b, c번이라고 할 때 10000 × a + 100 × b + c를 return 하는 solution 함수를 작성해 주세요.
[제한사항]
- 3 ≤ rank의 길이 = attendance의 길이 ≤ 100
- rank[i]는 i번 학생의 선발 고사 등수를 의미합니다.
- rank의 원소는 1부터 n까지의 정수로 모두 서로 다릅니다.
- attendance[i]는 i번 학생의 전국 대회 참석 가능 여부를 나타냅니다.
- attendance[i]가 true라면 참석 가능, false면 참석 불가능을 의미합니다.
- attendance의 원소 중 적어도 3개는 true입니다.
*/

function solution(rank, attendance) {
  var answer = 0;

  // rank 배열을 스프레드 연산자로 새로운 배열에 복사합니다.
  // sortRank 배열은 오름차순으로 정렬
  let sortRank = [...rank].sort((a, b) => a - b);

  // 구조 분해 할당 sortRank에 숫자와 기존 rank 배열의 아이템 index 찾기
  // 해당 index에 있는 attendance 배열의 요소 값을 가져온 후 true면 index, false는 101을 반환
  // filter으로 sortRank에 있는 101은 모두 제거
  // 최종 값에서 3개의 값 추출 -> a, b, c 값으로 할당
  const [a, b, c] = sortRank
    .map((item) => {
      const idx = rank.indexOf(item);
      return attendance[idx] ? idx : 101;
    })
    .filter((i) => i !== 101)
    .slice(0, 3);

  answer = 10000 * a + 100 * b + c;

  return answer;
}
