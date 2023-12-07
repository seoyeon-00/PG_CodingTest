/*
[문제]
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 
인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

[제한 조건]
- strings는 길이 1 이상, 50이하인 배열입니다.
- strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
- strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
- 모든 strings의 원소의 길이는 n보다 큽니다.
- 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

[입출력]
|          strings          |    n   |             return             |
|---------------------------|--------|--------------------------------|
|	  ["sun", "bed", "car"]   |    1   |     ["car", "bed", "sun"]      |
|  ["abce", "abcd", "cdx"]  |    2   |   	["abcd", "abce", "cdx"]     |
*/

function solution(strings, n) {
  // strings 길이만큼 빈 객체 생성
  // 기존 문자열과 n번째 문자의 ASCII 코드를 저장
  var obj = new Array(strings.length)
    .fill("")
    .map((_, index) => ({ string: "", sortStr: 0 }));

  // string을 순회하여 obj 객체의 속성값 갱신
  strings.map((item, index) => {
    obj[index].string = item;
    obj[index].sortStr = item[n].charCodeAt(0); //문자열의 n번째 문자의 ASCII 코드
  });

  // sortStr 기준으로 정렬
  // sortStr이 같을 경우 localeCompare 함수를 사용하여 문자열을 비교하여 정렬

  /*
  localeCompare()
  두 문자를 앞 혹은 뒤에 오는지 비교하여 수치로 반환
  "a".localeCompare("k"); // a는 k전에 위치 음수 값 반환 -> -1
  */

  // map 함수로 string 속성 추출
  const sort = obj
    .sort((a, b) => {
      if (a.sortStr > b.sortStr) return 1;
      if (a.sortStr < b.sortStr) return -1;
      if (a.sortStr === b.sortStr) {
        return a.string.localeCompare(b.string);
      }
    })
    .map((item) => item.string);

  return sort;
}
