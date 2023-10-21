/*
[문제]
두 정수 left와 right가 매개변수로 주어집니다. 
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

[제한사항]
1 ≤ left ≤ right ≤ 1,000

[입출력]
|  left  |  right  |  result  |
|--------|---------|----------|
|   13   |    17   |    43    |
|   24   |    27   |    52    |
*/

function solution(left, right) {
  // 생성자함수 - 객체 생성
  const obj = new Object();
  // 결과값 저장
  var answer = 0;

  // 약수의 개수를 구하는 함수
  function divisor(n) {
    let index = 1;
    let arr = [];
    // index가 n이 될 때까지 루프
    while (index <= n) {
      // n에서 index로 나눴을 때 나머지가 0이라면 index arr에 추가.
      if (n % index === 0) arr.push(index);
      // index +1
      index++;
    }
    return arr.length;
  }

  // left 부터 right까지의 수들을 순회하여 약수를 obj 객체에 저장
  for (let i = left; i <= right; i++) {
    obj[i] = divisor(i);
  }

  // obj을 순회하여 value값의 홀, 짝 여부 판단. 짝수면 + key값, 홀수면 - key값
  for (let i in obj) {
    obj[i] % 2 === 0 ? (answer += Number(i)) : (answer -= Number(i));
  }

  return answer;
}
