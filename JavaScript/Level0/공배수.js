// [문제] 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(number, n, m) {
  // answer를 변수로 생성해준다.
  var answer = 0;
  // number에 대하여 n과 m으로 나누었을 때 둘다 나머지가 0일경우 1을 반환, 그렇지 않으면 0을 반환한다.
  if (number % n === 0 && number % m === 0) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}

// 입출력
console.log(solution(60, 2, 3));
console.log(solution(55, 5, 0));
