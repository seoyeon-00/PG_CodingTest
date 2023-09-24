/*
[문제]
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.

이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다. 
이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.

단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.

[입출력 예]
|           arr          |   result   |
|------------------------|------------|
| [1, 2, 3, 100, 99, 98] |     5      |
*/

function solution(arr) {
  // 반복 횟수를 저장
  var count = 0;
  // 현재 배열을 저장
  var array = [...arr];
  // 이전 배열을 저장
  var previousArray = [];

  // 이전배열과 현재 배열이 같은지 비교하는 함수
  function arrayCompare(previousArray, array) {
    // for문을 순회하여 previousArray, array 배열이 일치하는지 확인 일치하면 True, 틀리면 False 출력
    for (var i = 0; i < previousArray.length; i++) {
      if (array[i] !== previousArray[i]) {
        return false;
      }
    }
    return true;
  }

  // 반복문 무한 루프
  while (true) {
    // 이전 배열 저장
    var previousArray = [...array];

    // 각 원소를 순회하여 조건에 맞는 연산을 수행하여 array에 저장
    array = array.map((item) => {
      if (item >= 50 && item % 2 === 0) {
        return item / 2;
      } else if (item < 50 && item % 2 !== 0) {
        return item * 2 + 1;
      } else {
        return item;
      }
    });

    // while 루프 돌아갈 때 +1 추가
    count++;

    // 이전 배열과 현재 배열과 비교하여 일치하면 무한 루프 종료
    if (arrayCompare(previousArray, array)) {
      break;
    }
  }

  // 총 카운트에서 이전 숫자 결과로 출력
  return count - 1;
}
