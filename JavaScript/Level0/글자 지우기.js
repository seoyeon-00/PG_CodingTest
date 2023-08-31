/*
[문제]
문자열 my_string과 정수 배열 indices가 주어질 때,
my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

[입출력]
|          arr         |    query    |    result    |
|----------------------|-------------|--------------|
|  [0, 1, 2, 3, 4, 5]  |  [4, 1, 2]  |  [ 1, 2, 3]  |
*/

function solution(my_string, indices) {
  var answer = my_string;

  // indices 배열 순회하여 원소 추출
  // indices에 해당하는 index 번째의 원소를 제거 => 임시로 "|"를 삽입
  // => index가 틀어지면 안되기 때문에 기존의 index를 유지하기 위함
  indices.forEach((item) => {
    answer = answer.slice(0, item) + "|" + answer.slice(item + 1);
  });

  // answer에 있는 | 제거하여 다시 문자열로 만들어서 저장
  return answer.split("|").join("");
}
