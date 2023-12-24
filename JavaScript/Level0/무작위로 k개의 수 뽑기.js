/*
[문제]
랜덤으로 서로 다른 k개의 수를 저장한 배열을 만드려고 합니다. 
적절한 방법이 떠오르지 않기 때문에 일정한 범위 내에서 무작위로 수를 뽑은 후, 
지금까지 나온적이 없는 수이면 배열 맨 뒤에 추가하는 방식으로 만들기로 합니다.

이미 어떤 수가 무작위로 주어질지 알고 있다고 가정하고, 실제 만들어질 길이 k의 배열을 예상해봅시다.

정수 배열 arr가 주어집니다. 문제에서의 무작위의 수는 arr에 저장된 순서대로 주어질 예정이라고 했을 때, 
완성될 배열을 return 하는 solution 함수를 완성해 주세요.

단, 완성될 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채워서 return 합니다.

[제한사항]
- 1 ≤ arr의 길이 ≤ 100,000
- 0 ≤ arr의 원소 ≤ 100,000
- 1 ≤ k ≤ 1,000

[입출력]
|           arr          |    k    |      result       |
|------------------------|---------|-------------------|
|   [0, 1, 1, 2, 2, 3]   |    3    |   	 [0, 1, 2]     |
|    [0, 1, 1, 1, 1]	   |    4    |   [0, 1, -1, -1]  |
*/

function solution(arr, k) {
  // 연산 결과를 담을 변수 answer
  var answer = [];

  // arr 배열을 순회, answer에 item이 포함되지 않는다면 answer에 추가
  arr.forEach((item) => {
    if (!answer.includes(item)) {
      answer.push(item);
    }
  });

  // answer의 길이가 k보다 크다면 k수 만큼 배열을 잘라준다.
  if (answer.length > k) {
    return answer.slice(0, k);

    // 그렇지 않은 경우 k수 만큼 길이를 채우기 위해, 채워야할 배열 arr 생성
    // Array.from() 사용. 첫번째 매개변수로 원하는 길이, 두번째 매게변수로 원하는 값을 반환하는 콜백함수
    // concat. answer배열에 arr 배열을 추가한다.
  } else {
    const arr = Array.from({ length: k - answer.length }, () => -1);
    return answer.concat(arr);
  }
}
