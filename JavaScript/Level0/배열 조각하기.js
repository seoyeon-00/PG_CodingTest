/*
[문제]
정수 배열 arr와 query가 주어집니다.

query를 순회하면서 다음 작업을 반복합니다.
- 짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
- 홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.

위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.

[입출력]
|          arr         |    query    |    result    |
|----------------------|-------------|--------------|
|  [0, 1, 2, 3, 4, 5]  |  [4, 1, 2]  |  [ 1, 2, 3]  |
*/

function solution(arr, query) {
  var answer = [...arr];

  // query 배열 순회하면서 item, index 사용
  query.forEach((item, index) => {
    // index가 짝수면 0 부터 item + 1 범위까지 잘라서 answer에 할당
    // index가 홀수면 item부터 마지막까지 잘라 answer에 할당
    answer = index % 2 === 0 ? answer.slice(0, item + 1) : answer.slice(item);
  });
  return answer;
}
