/*
[문제]
어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 
예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 
아니면 0을 return 하는 solution 함수를 작성해 주세요.

[입출력 예]
|  my_string |  is_prefix | result |
|------------|------------|--------|
|  "banana"  |    "ban"   |    1   |
|  "banana"  |    "nan"   |    0   |
|  "banana"  |   	"abcd"  |    0   |
|  "banana"  |  "bananan" |    0   |
|------------|------------|--------|
*/

function solution(my_string, is_prefix) {
  // 접두사가 될 수 있는 단어를 저장하는 answer 빈배열 생성
  var answer = [];

  // 문자열인 my_string을 배열로 변환
  var stringArray = Array.from(my_string);

  // stringArray를 순회하여 answer에 my_string 첫글자 부터 첫글자에서 마지막 문자를 answer 배열에 저장
  stringArray.forEach((i, value) => {
    answer.push(my_string.slice(0, value + 1));
  });

  // anwer에 is_prefix를 포함하고 있으면 1, 그렇지 않으면 0을 출력
  return answer.includes(is_prefix) ? 1 : 0;
}
