/*
[문제]
어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 
예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 
아니면 0을 return 하는 solution 함수를 작성해 주세요.

[제한사항]
- 1 ≤ my_string의 길이 ≤ 100
- 1 ≤ is_suffix의 길이 ≤ 100
- my_string과 is_suffix는 영소문자로만 이루어져 있습니다.

[입출력 예]
|  my_string |   is_suffix   |  result |
|------------|---------------|---------|
|  "banana"  |     "ana"     |    1    |
|  "banana"	 |     "nan"     |    0    |
|  "banana"	 |   	"wxyz"     |    0    |
|  "banana"	 |   "abanana"   |    0    |
*/

function solution(my_string, is_suffix) {
  // is_suffix를 포함하는 접미사 answer에 저장
  var answer = [];

  // my_string 문자열을 배열로 변환 후 각 요소 순회
  // str에 접미사 저장. is_suffix와 일치하면 answer에 추가
  my_string.split("").forEach((_, index) => {
    let str = my_string.substr(index, my_string.length);
    if (str === is_suffix) answer.push(str);
  });

  // answer의 개수 리턴
  return answer.length;
}
