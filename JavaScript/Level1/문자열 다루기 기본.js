/*
[문제]
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

[제한 사항]
- s는 길이 1 이상, 길이 8 이하인 문자열입니다.
- s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

[입출력]
|    s     |  return  |
|----------|----------|
|  "a234"  |   false  |
|  "1234"  |   true   | 
*/

function solution(s) {
  // s의 길이가 4또는 6일 때 문자열 s를 배열로 변환 후 filter
  // item이 숫자가 아닐 경우에 findStr에 값을 리턴
  // findStr(문자를 담고있는 배열, 숫자만 포함해야 true)의 길이가 0이 아닐 때 false, 0이면 true
  if (s.length === 4 || s.length === 6) {
    const findStr = s.split("").filter((item) => isNaN(item));
    return findStr.length !== 0 ? false : true;
  } else {
    return false; // s의 길이가 4, 6 둘다 아닐 경우 바로 false 리턴
  }
}
