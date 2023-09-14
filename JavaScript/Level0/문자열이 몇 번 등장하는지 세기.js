/*
[문제]
문자열 myString과 pat이 주어집니다. 
myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

[입출력]
|  myString  |   pat   | result  |
|------------|---------|---------|
|  "banana"  |  "ana"	 |    2    |
|   "aaaa"   |  "aa"	 |    3    |
*/

function solution(myString, pat) {
  // 빈배열 생성
  var answer = [];
  // 순회할 횟수를 저장
  // myString의 총 길이에서 pat 문자열 길이만큼 빼기
  const turnNumber = myString.length - pat.length;

  // turnNumber 횟수만큼 순회하며 myString에서 pat개수와 일치하는 연속된 문자 추출하여 answer에 할당
  for (var i = 0; i <= turnNumber; i++) {
    answer.push(myString.substr(i, pat.length));
  }

  // answer에서 pat과 일치하는 문자열 찾기
  const result = answer.filter((item) => item === pat);

  // answer 배열 개수 출력
  return result.length;
}
