/*
[문제]
전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

구조대 : 119
박준영 : 97 674 223
지영석 : 11 9552 4421
전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

[제한 사항]
- phone_book의 길이는 1 이상 1,000,000 이하입니다.
- 각 전화번호의 길이는 1 이상 20 이하입니다.
- 같은 전화번호가 중복해서 들어있지 않습니다.

[입출력]
|               phone_book           |   result   |
|------------------------------------|------------|
|  ["119", "97674223", "1195524421"] |   false    |
|         ["123","456","789"]	       |    true    |
|   ["12","123","1235","567","88"]   |   false    |
*/
function solution(phone_book) {
  // 결과를 저장할 변수 초기화
  var answer = true;

  // phone_book을 오름차순으로 정렬
  // 반복되는 계산을 줄이기 위해서 전화번호부 배열을 정렬한다.
  // 예를 들어, 119와 비교할 때 다음으로 오는 1195524421를 비교합니다. 다음 오는 숫자는 119와 같거나 큰 숫자가 되므로
  // 다음 번호만 비교하면 119를 포함하는 숫자인지 여부를 판단을 할 수 있습니다.
  var sortBook = phone_book.sort();

  // 반복문 실행
  for (var i = 0; i < sortBook.length; i++) {
    let numLen = sortBook[i].length;

    // sortBook[i]와 그 다음 번호의 numLen 자리 수가 서로 일치하면
    // answer에 false를 할당하고 반복문을 종료
    if (
      sortBook[i + 1] &&
      sortBook[i] === String(sortBook[i + 1]).substr(0, numLen)
    ) {
      answer = false;
      break;
    }
  }

  return answer;
}
