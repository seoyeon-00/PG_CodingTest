/*
[문제]
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 
배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

[제한사항]
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

[입출력]
|          strings          |    n   |             return             |
|---------------------------|--------|--------------------------------|
|	  ["sun", "bed", "car"]   |    1   |     ["car", "bed", "sun"]      |
|  ["abce", "abcd", "cdx"]  |    2   |   	["abcd", "abce", "cdx"]     |

*/

// 해설1 - 효울성 테스트 통과X
// 2중으로 배열을 순회할 경우 최대 100,000명의 참가자가 출전할 수 있으므로
// 최대 100000 * 100000번까지 연산할 수 있어 효율성에서 통과하지 못한 코드이다.
function solution(participant, completion) {
  // completion 배열을 순회하여 원소 i가 participant에 포함되어 있다면 participant 배열에서 제거
  for (var i of completion) {
    if (participant.includes(i)) {
      const includeIdx = participant.indexOf(i);
      participant.splice(includeIdx, 1);
    }
  }

  // 제거하고 남은 0번째 원소 출력
  return participant[0];
}

// 해설2 - 효율성 테스트 통과
function solution(participant, completion) {
  // 두 배열을 정렬
  participant = participant.sort();
  completion = completion.sort();

  // participant 만큼 순회하여
  // participant와 completion의 i 번째 자리가 동일하지 않다면 participant의 index 원소 출력
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
