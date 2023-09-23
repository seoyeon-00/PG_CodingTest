/*
정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 
홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요.
두 값이 같을 경우 그 값을 return합니다.

[입출력]
|       num_list      | result |
|---------------------|--------|
|  [4, 2, 6, 1, 7, 6] |   17   |
|   [-1, 2, 5, 6, 3]  |    8   |
*/

function solution(num_list) {
  // 홀수, 짝수의 합을 저장할 변수 생성
  var odd = 0;
  var even = 0;

  //num_list 배열을 순회하여 짝수는 even에 추가하고, 홀수는 odd에 추가
  num_list.map((item, index) => {
    index % 2 ? (even += item) : (odd += item);
  });

  // 최종적으로 더 큰 수를 출력
  return odd > even ? odd : even;
}
