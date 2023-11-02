/*
[문제]
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

[제한 조건]
- 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

[입출력]
|       arr1       |      arr2      |     return      |
|------------------|----------------|-----------------|
|   [[1,2],[2,3]]  |  [[3,4],[5,6]]	|  [[4,6],[7,9]]  |
|     [[1],[2]]    |	 	[[3],[4]]   |    [[4],[6]]    |
*/

function solution(arr1, arr2) {
  // 결과를 저장하는 answer
  var answer = [];

  // 2차원 배열 구조 변경 arr1의 길이 만큼 2차원 배열 요소 어레이 생성
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
  }

  // 행을 기준으로 순회
  for (var i = 0; i < arr1.length; i++) {
    // 열을 기준으로 순회
    for (var k = 0; k < arr1[i].length; k++) {
      //answer[i]열에 arr1[i]의 k번째 값 + arr2[i]의 k번째 값을 삽입
      answer[i].push(arr1[i][k] + arr2[i][k]);
    }
  }

  // 결과 출력
  return answer;
}
