/*
[문제] 
정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다.
변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.

- 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
- stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
- stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.

[입출력]
|        arr       |   result    |
|------------------|-------------|
|  [1, 4, 2, 5, 3] |  [1, 2, 3]  |
*/

function solution(arr) {
  var stk = [];
  var i = 0;

  // while문 - arr.length와 i가 같으면 반복문 중지
  while (true) {
    // arr의 길이가 i와 같으면 반복문을 종료
    // i 값은 실제로 4까지만 받고 5에서 부터 종료되면 된다.
    if (arr.length === i) {
      break;
    }

    // stk 값이 없거나, arr[i]의 요소가 stk 배열의 마지막 요소보다 크다면
    // stk 배열에 arr[i] 값을 추가한 후 i에 +1을 합니다.
    if (stk.length === 0 || arr[i] > stk[stk.length - 1]) {
      stk.push(arr[i]);
      i++;

      // 만약 stk 값이 없지 않고, arr[i]의 요소가 stk 배열의 마지막 요소보다 작거나 같다면
      // skt의 마지막 요소를 제거합니다.
    } else if (stk.length !== 0 && arr[i] <= stk[stk.length - 1]) {
      stk.pop();
    }
  }

  return stk;
}
