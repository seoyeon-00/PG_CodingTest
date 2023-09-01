/*
[문제]
정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다.
intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다. 
닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.

이때 배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열을 
만들어 return 하는 solution 함수를 완성해 주세요.

[입출력]
|         arr        |     intervals      |           result          |
|--------------------|--------------------|---------------------------|
|   [1, 2, 3, 4, 5]  |  [[1, 3], [0, 4]]  |  [2, 3, 4, 1, 2, 3, 4, 5] |
*/

function solution(arr, intervals) {
  var answer = [];

  // interval 배열을 순회하여
  for (var interval of intervals) {
    //arr에서 interval의 [0]번째 값에서 [1]번째 값의 범위의 데이터를 추출
    // 배열을 "," 기준으로 문자열로 변환하여 answer에 저장
    answer.push(arr.slice(interval[0], interval[1] + 1).join(","));
  }

  // 배열을 "," 기준으로 문자열로 변환 후 "," 기준으로 배열로 변환
  // 문자열 데이터를 숫자형으로 만들어준다.
  return answer.join(",").split(",").map(Number);
}
