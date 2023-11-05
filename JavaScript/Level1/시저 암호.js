/*
[문제]
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
"z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, 
solution을 완성해 보세요.

[제한 조건]
- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

[입출력]
|    s    |    n    |   result  |
|---------|---------|-----------|
|   "AB"  |    1    |    "BC"   |
|   "z"   |    1    |    "a"    |
| "a B z" |  	 4    |  "e F d"  |
*/

function solution(s, n) {
  // 결과를 저장할 answer
  var answer = "";

  // 알파벳 소문자 a-z까지 Array.from()를 사용하여 aplhabet에 저장
  const alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  // 문자열 s를 순회하여 동작 수행
  for (var i of s) {
    let index;
    // 문자가 공백일 경우 answer에 공백을 추가
    if (i === " ") {
      answer += " ";

      // 문자가 소문자일 때 i를 alphabet에서 찾아 index에 할당
      // 이동한 만큼 새로운 idnex를 계산 (z를 넘기면 a로 넘어갈 수 있도록)
      // i에서 n 만큼 이동한 알파벳 answer에 추가
    } else if (i === i.toLowerCase()) {
      index = alphabet.indexOf(i);
      const newIndex = (index + n) % 26;
      answer += alphabet[newIndex];

      // 문자가 대문자일 때 i를 소문자로 변환 후 alphabet에서 찾아 index에 할당
    } else {
      const changeAlphabet = i.toLowerCase();
      index = alphabet.indexOf(changeAlphabet);

      const newIndex = (index + n) % 26;
      answer += alphabet[newIndex].toUpperCase();
    }
  }

  // 암호화된 문자열 반환
  return answer;
}
