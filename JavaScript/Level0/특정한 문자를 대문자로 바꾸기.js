/*
[문제]
영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 
문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 
대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

[입출력]
|     my_string    |   alp   |    result     |
|------------------|---------|---------------|
|   "programmers"  |   "p"   | "Programmers" |
|    "lowercase"   |   "x"   |  "lowercase"  |
*/

function solution(my_string, alp) {
  // 정규표현식 (생성자방식) : 입력 문자열에서 패턴의 모든 발생을 검색
  // const regex = new RegExp('abapplec', flags);
  // flags에 옵션을 선택 g: 전역, i: 대소문 구분없음
  var pattern = new RegExp(alp, "g");

  // 패턴을 검색하여 일치하는 문자를 대문자로 변경
  return my_string.replace(pattern, alp.toUpperCase());
}
