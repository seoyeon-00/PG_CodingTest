/*
[문제]
정수를 저장한 배열, 
arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

[제한 조건]
- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

[입출력]
|     arr     |  return  |
|-------------|----------|
|  [4,3,2,1]  | [4,3,2]  |
|     [10]    |   [-1]   |
*/

function solution(arr) {
  // 빈배열 answer return 값을 저장
  var answer = [];

  // arr의 길이가 1이면 [-1]을 리턴
  // 1 이상 -> removeNum에 arr을 복사하여 오름차순으로 정렬 후 가장 작은 원소 저장
  // arr 배열을 순회하여 removeNum와 일치하지 않는 원소만 남긴 결과 저장
  if (arr.length === 1) {
    answer = [-1];
  } else {
    var removeNum = [...arr].sort((a, b) => a - b)[0];
    answer = arr.filter((item) => item !== removeNum);
  }
  return answer;
}
