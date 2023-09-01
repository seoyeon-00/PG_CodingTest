/*
[문제]
문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

[입출력]
|      my_string      |  n  |       result       |
|---------------------|-----|--------------------|
|   "Progra21Sremm3"  |  11 |   	"grammerS123"  |
|      "He110W0r1d"   |  5  | 	     "W0r1d"     |

*/

function solution(my_string, n) {
  // my_string에서 뒤에서 n개의 단어 추출하기
  return my_string.slice(-n);
}
