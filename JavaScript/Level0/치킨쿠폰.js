/*
[문제]
프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 
쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 
시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 
solution 함수를 완성해주세요.

[입출력]
|  chicken  |    result    |
|-----------|--------------|
|    100    |      11      |
|   1,081   |     120      |
*/

function solution(chicken) {
  // 치킨 쿠폰을 계산하여 저장하는 변수
  let answer = 0;
  // 현재 쿠폰 개수를 저장
  let coupon = chicken;
  // 쿠폰을 계산하고 나머지 저장
  let rest = 0;
  // 유효한 쿠폰을 저장하는 변수
  let result = 0;

  // 무한 루프
  while (true) {
    // 현재 쿠폰 개수에서 10을 나눈 몫을 저장
    answer = Math.floor(coupon / 10);
    // 현재 쿠폰 개수에서 10을 나눈 나머지 저장
    rest = Math.floor(coupon % 10);
    // coupon을 answer와 rest 합으로 갱신 - 쿠폰과 나머지 쿠폰을 합쳐서 새로운 쿠폰 발급
    coupon = answer + rest;
    // 유효한 쿠폰 개수를 result에 저장
    result += answer;

    // answer의 값이 0이 되었을 때 루프 종료
    if (answer === 0) {
      break;
    }
  }

  return result;
}
