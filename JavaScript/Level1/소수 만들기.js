/*
[문제]
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

[제한사항]
- nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
- nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

// 함수 선언식 : 소수를 판별하여 true, false로 출력
function isPrime(num) {
  // num이 2로 나누어 떨어지면 false
  if (num % 2 === 0) {
    return false;
  }

  // 2의 배수는 위에서 모두 제거. 3부터 시작
  // num의 루트값 까지만 반복문 실행하면 됨.
  // 소수는 2를 제외한 모든 홀수 이므로 이미 +2 씩 증가하여 홀수에 대한 소수판별 진행
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  // 위에서 걸러지지 않는다면 true 리턴 (num은 소수)
  return true;
}

function solution(nums) {
  // 소수의 개수를 카운팅
  var count = 0;

  // 반복문 실행하여 nums 배열안의 모든 3가지 조합을 만듬
  // 세 조합의 합이 소수라면 count +1
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      for (let j = k + 1; j < nums.length; j++) {
        if (isPrime(nums[i] + nums[k] + nums[j])) {
          count++;
        }
      }
    }
  }

  // 결과 출력
  return count;
}
