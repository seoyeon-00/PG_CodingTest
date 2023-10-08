/*
[문제]
정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 
연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

단, arr에 2가 없는 경우 [-1]을 return 합니다.

[입출력]
|             arr            |         result        |
|----------------------------|-----------------------|
|    [1, 2, 1, 4, 5, 2, 9]   |    [2, 1, 4, 5, 2]    |
|          [1, 2, 1]         |          [2]          |
|          [1, 1, 1]         |          [-1]         |
|  [1, 2, 1, 2, 1, 10, 2, 1] |  [2, 1, 2, 1, 10, 2]  |
*/

function solution(arr) {
  // arr 배열에서 2가 나온 index를 저장할 빈배열
  var answer = [];

  // 반복문 순회하여 원소가 2인 배열의 index를 answer에 저장
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      answer.push(i);
    }
  }

  // 결과 arr의 2의 시작부터 마지막 index를 넣어 배열 값을 자름
  var result = arr.slice(answer[0], answer[answer.length - 1] + 1);

  // result 배열의 길이가 0이라면 [-1] 그렇지 않으면 result 배열 출력
  return result.length > 0 ? result : [-1];
}
