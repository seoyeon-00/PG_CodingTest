/*
[문제]
머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

[입출력 예]
|    price    |   result  |
|-------------|-----------|
|   150,000   |  142,500  |
|   580,000	  |  464,000  |
*/
function solution(price) {
  var answer = 0;

  // 가격이 50만원 이상일 때 20% 할인
  if (price >= 500000) {
    answer = price * 0.8;

    // 가격이 30만원 이상일 때 10% 할인
  } else if (price >= 300000) {
    answer = price * 0.9;

    // 가격이 10만원 이상일 때 5% 할인
  } else if (price >= 100000) {
    answer = price * 0.95;

    // 모든 조건에 만족하지 않으면 할인 x
  } else {
    answer = price;
  }

  // 소수값이 존재할 때 내림 처리
  return Math.floor(answer);
}
