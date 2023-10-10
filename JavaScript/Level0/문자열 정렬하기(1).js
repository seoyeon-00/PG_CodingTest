/*
[문제]
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 
오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

[입출력]
|   my_string   |      result     |
|---------------|-----------------|
|   "hi12392"   | [1, 2, 2, 3, 9] |
|  "p2o4i8gj2"  | 	[2, 2, 4, 8]  |
|   "abcde0"    |  	     [0]      |
*/

function solution(my_string) {
  // 문자열을 배열로 변환
  // isNaN() :: NaN 값인지 확인하는 함수 EX) isNaN(4) -> false, isNaN("안녕") -> true
  // 배열을 순회하여 숫자만 배열에 저장 후 오름차순으로 정렬
  // 순회하여 각 요소를 숫자형으로 변환하여 출력
  return my_string
    .split("")
    .filter((item) => !isNaN(item))
    .sort((a, b) => a - b)
    .map((item) => Number(item));
}
