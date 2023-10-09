/*
[문제]
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 
입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. 
a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 

나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

[입출력 예]
|   age   |  result  |
|---------|----------|
|    23   |   "cd"   |
|    51   |   "fb"   |
|   100   |   "baa"  |
*/

function solution(age) {
  var answer = "";
  // 0-9까지 age로 출력될 알파벳 저장
  const alphabetAge = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  // age를 배열로 변환 후, 각 원소를 순회하여 index와 일치하는 알파벳 answer에 추가
  String(age)
    .split("")
    .forEach((item) => {
      answer += alphabetAge[item];
    });

  return answer;
}

// ## 다른 풀이 ##

// String.fromCharCode() 사용하기
// UTF-16 코드 유닛으로 부터 문자열을 반환
// 예시로 String.fromCharCode(65, 66); -> 65, 66은 "AB" 반환

function solution(age) {
  // age 배열로 변환
  // String.fromCharCode(97 + Number(n))를 사용하여 숫자를 알파벳으로 변환
  return String(age)
    .split("")
    .map((n) => String.fromCharCode(97 + Number(n)))
    .join("");
}
