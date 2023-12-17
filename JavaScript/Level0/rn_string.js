/*
[문제]
'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, 
rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

[제한사항]
- 1 ≤ rny_string의 길이 ≤ 100
- rny_string은 영소문자로만 이루어져 있습니다.

*/

function solution(rny_string) {
  // rny_string 문자열에서
  // 정규 표현식에 일치하는 모든 문자열 치환. "m"단어를 "rn"으로 치환하여 리턴
  return rny_string.replaceAll(/[\m]/gi, "rn");
}
