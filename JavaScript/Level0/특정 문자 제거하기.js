/*
[문제]
문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

[입출력]
|  my_string  |  letter  |   result   |
|-------------|----------|------------|
|   "abcdef"  |    "f"   |   "abcde"  |
|   "BCBdbe"  |    "B"   |    "Cdbe"  |
*/

function solution(my_string, letter) {
  // my_string을 문자열을 배열로 변환하여 filter 함수 사용
  // 순회하여 현재 배열 요소가 letter가 아닌 요소만 배열에 반환
  const result = my_string.split("").filter((item) => item !== letter);

  // 배열을 문자열로 변환
  return result.join("");
}
