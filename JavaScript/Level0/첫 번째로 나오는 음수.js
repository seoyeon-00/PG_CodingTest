/*
[문제]
정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 
음수가 없다면 -1을 return합니다.

[제한사항]
- 5 ≤ num_list의 길이 ≤ 100
- -10 ≤ num_list의 원소 ≤ 100

[입출력]
|            num_list            |  result  |
|--------------------------------|----------|
|   [12, 4, 15, 46, 38, -2, 15]  |     5    |
|     [13, 22, 53, 24, 15, 6]    |    -1    |
*/

function solution(num_list) {
  // num_list에서 조건(음수)에 만족하는 요소를 반환
  const findNegative = num_list.filter((item) => item < 0);
  // findNegative 배열의 길이가 1이상일 때 처음 나온 음수의 index를 길이가 0일때 -1을 반환
  return findNegative.length > 0 ? num_list.indexOf(findNegative[0]) : -1;
}
