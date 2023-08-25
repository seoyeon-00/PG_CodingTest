/*
[문제]
정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 
차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

[입출력]
| start_num |  end_num  |           result            |
|-----------|-----------|-----------------------------|
|     10    |     3     |  [10, 9, 8, 7, 6, 5, 4, 3]  |
*/

function solution(start_num, end_num) {
  // 빈 배열 생성
  var answer = [];

  // 'for' 루프로 start_num에서 end_num 까지 순회, 마이너스 1씩 감소
  for (var i = start_num; i >= end_num; i--) {
    // answer 배열에 추가, 역순으로 숫자 추가
    answer.push(i);
  }
  return answer;
}
