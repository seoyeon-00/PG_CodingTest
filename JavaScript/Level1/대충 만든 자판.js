/*
[문제 설명]
휴대폰의 자판은 컴퓨터 키보드 자판과는 다르게 하나의 키에 여러 개의 문자가 할당될 수 있습니다. 
키 하나에 여러 문자가 할당된 경우, 동일한 키를 연속해서 빠르게 누르면 할당된 순서대로 문자가 바뀝니다.

예를 들어, 1번 키에 "A", "B", "C" 순서대로 문자가 할당되어 있다면 1번 키를 한 번 누르면 
"A", 두 번 누르면 "B", 세 번 누르면 "C"가 되는 식입니다.

같은 규칙을 적용해 아무렇게나 만든 휴대폰 자판이 있습니다. 이 휴대폰 자판은 키의 개수가 1개부터 최대 100개까지 있을 수 있으며, 
특정 키를 눌렀을 때 입력되는 문자들도 무작위로 배열되어 있습니다. 
또, 같은 문자가 자판 전체에 여러 번 할당된 경우도 있고, 키 하나에 같은 문자가 여러 번 할당된 경우도 있습니다. 
심지어 아예 할당되지 않은 경우도 있습니다. 따라서 몇몇 문자열은 작성할 수 없을 수도 있습니다.

이 휴대폰 자판을 이용해 특정 문자열을 작성할 때, 키를 최소 몇 번 눌러야 그 문자열을 작성할 수 있는지 알아보고자 합니다.

1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap과 입력하려는 문자열들이
담긴 문자열 배열 targets가 주어질 때, 각 문자열을 작성하기 위해 키를 최소 몇 번씩 
눌러야 하는지 순서대로 배열에 담아 return 하는 solution 함수를 완성해 주세요.

단, 목표 문자열을 작성할 수 없을 때는 -1을 저장합니다.

[제한사항]
- 1 ≤ keymap의 길이 ≤ 100
  - 1 ≤ keymap의 원소의 길이 ≤ 100
  - keymap[i]는 i + 1번 키를 눌렀을 때 순서대로 바뀌는 문자를 의미합니다.
    - 예를 들어 keymap[0] = "ABACD" 인 경우 1번 키를 한 번 누르면 A, 두 번 누르면 B, 세 번 누르면 A 가 됩니다.
  - keymap의 원소의 길이는 서로 다를 수 있습니다.
  - keymap의 원소는 알파벳 대문자로만 이루어져 있습니다.

- 1 ≤ targets의 길이 ≤ 100
  - 1 ≤ targets의 원소의 길이 ≤ 100
  - targets의 원소는 알파벳 대문자로만 이루어져 있습니다.

[입출력]
|        keymap	       |      targets      |   result   |
|----------------------|-------------------|------------|
|  ["ABACD", "BCEFD"]  |  ["ABCD","AABB"]	 |   [9, 4]   |
|        ["AA"]        |       ["B"]       |    [-1]    |
|    ["AGZ", "BSSS"]   |   ["ASA","BGZ"]   |   [4, 6]   |
|        ["BC"]        |    ["AC", "BC"]   |   [-1, 3]  |
|   ["A", "AB", "B"]   |       ["B"]       |     [1]    |
|  ["ABCDE", "ABBCE"]  |     ["ABBEF"]     |    [-1]    |
*/

function solution(keymap, targets) {
  // 정답을 변수 answer, 배열 요소가 targets.length 갯수인 배열 생성
  var answer = new Array(targets.length).fill(0);

  // targets 배열의 각 문자열을 순회
  targets.forEach((item, index) => {
    // 문자열을 각각의 문자로 분리하여 배열로 변환 후 순회
    item.split("").forEach((item2) => {
      // keymap을 순회, 각 문자(item2)의 대하여 해당 문자의 인덱스를 찾아 +1 더한 배열 arr 생성
      let arr = keymap.map((row) => row.indexOf(item2) + 1);

      // arr에서 0, -1을 필터링하여 nonZeroArr 생성
      const nonZeroArr = arr.filter((item) => item !== -1 && item !== 0);

      // nonZeroArr가 0 이상이면 nonZeroArr에서 가장 최소값을 그렇지 않으면 0으로 minIndex에 할당
      const minIndex = nonZeroArr.length > 0 ? Math.min(...nonZeroArr) : 0;

      // answer[index]가 -1이 아닌 경우, minIndex를 answer[index]에 더하고 -1일 경우 0을 더함
      // (answer[index]에 -1이 들어있을 경우 이미 문자열을 작성할 수 없는 조건에 성립하기 때문에 더이상 계산을 진행하지 x)
      answer[index] += answer[index] !== -1 ? minIndex : 0;

      // minIndex가 0이면, answer[index]에 -1을 할당하고 루프 종료
      if (minIndex === 0) {
        return (answer[index] = -1);
      }
    });
  });

  return answer;
}
