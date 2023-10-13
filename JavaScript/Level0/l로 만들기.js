/*
[문제]
알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 
알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 
solution 함수를 완성해 주세요.

[입출력]
|     myString     |      result     |
|------------------|-----------------|
|   "abcdevwxyz"   |   "lllllvwxyz"  |
|   "jjnnllkkmm"   |   "llnnllllmm"  |
*/

function solution(myString) {
  // 소문자 알파벳(a-z) 배열로 저장
  // 대문자 : Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  const arrAlphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  // myString을 배열로 변환, map 함수로 각 원소를 순회하여 새로운 배열 changeArr 생성
  // Array.indexOf() - 배열의 index 찾기
  // arrAlphabet 배열 item의 index와 arrAlphabet의 l의 index를 비교
  // l를 포함한 이후의 알파벳은 그대로 출력, 이전 알파벳은 "l"로 대체
  const changeArr = myString.split("").map((item) => {
    return arrAlphabet.indexOf(item) >= arrAlphabet.indexOf("l") ? item : "l";
  });

  // 배열을 문자열로 변환 후 반환
  return changeArr.join("");
}
