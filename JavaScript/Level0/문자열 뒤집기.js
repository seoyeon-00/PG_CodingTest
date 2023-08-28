/*
[문제]
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, 
my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

[입출력]
|      my_string      |  s  |   e  |       result       |
|---------------------|-----|------|--------------------|
|   "Progra21Sremm3"  |  6  |  12  |  "ProgrammerS123"  |
|  "Stanley1yelnatS"  |  4  |  10  | 	"Stanley1yelnatS" |

*/

function solution(my_string, s, e) {
  // 문자열 뒤집기 => my_string에서 범위 s,e -> slice(s, e + 1)을 추출해서
  // reverse한 문자를 revStr에 저장
  var revStr = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");

  // result -> 1. 문자열 시작부터 s까지의 문자열 추출
  // 2. 문자를 추출해서 뒤집는 부분 삽입
  // 3. e+1 부터 문자열 끝까지의 문자열을 추출
  // 모든 부분을 합쳐서 결과를 res에 저장
  var res = my_string.slice(0, s) + revStr + my_string.slice(e + 1);

  return res;
}
