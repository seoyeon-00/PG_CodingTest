/*
[문제]
정수 배열 arr이 매개변수로 주어집니다. 
arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. 
arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

[제한사항]
- 1 ≤ arr의 길이 ≤ 1,000
- 1 ≤ arr의 원소 ≤ 1,000

[입출력]
|    my_string     |        result        |
|------------------|----------------------|
|   "i love you"   | ["i", "love", "you"] |
|   "programmers"  |   ["programmers"]    |
*/

function solution(arr) {
  // a를 0으로 초기화. 거듭제곱 값을 저장
  var a = 0;

  // 반복문 실행
  while (true) {
    // arr의 길이가 2의 a 제곱일 경우 arr 배열 그대로 리턴
    if (arr.length === Math.pow(2, a)) {
      return arr;
    }

    // 2의 a 제곱이 아닐 경우 최소한의 2의 거듭제곱 값을 구하기
    if (arr.length < Math.pow(2, a)) {
      // 최소한의 거듭제곱 값과 arr의 길이의 차 => 0을 추가 개수
      const cal = Math.pow(2, a) - arr.length;
      // arr 얕은 복사 + cal 만큼 0을 채운 새로운 배열 반환
      return [...arr, ...Array(cal).fill(0)];
    }

    a++;
  }
}
