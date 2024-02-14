/*
[문제]
n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 
예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 
숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

[제한사항]
- 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
- 각 숫자는 1 이상 50 이하인 자연수입니다.
- 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

[입출력]
|      numbers       |    target   |   return   |
|--------------------|-------------|------------|
|   [1, 1, 1, 1, 1]	 |       3     |      5     |
|    [4, 1, 2, 1]	   |       4     |      2     |
*/

function solution(numbers, target) {
  // numbers로 만들 수 있는 모든 조합을 배열로 출력하는 함수
  function num(numbers) {
    var arr = [];

    // numbers 길이가 1일 때 (numbers의 마지막 원소)
    // 해당 요소와 그 음수를 배열에 넣어 반환
    if (numbers.length === 1) {
      arr.push(numbers[0]);
      arr.push(-numbers[0]);
      return arr;
    }

    // 첫번째 원소를 제외한 나머지 배열 num 함수를 재귀적으로 호출
    // rest 배열에서 생성될 수 있는 조합들의 합으로 이루어진 배열을 리턴한다.
    const rest = numbers.slice(1);
    const add = num(rest);

    // add 배열을 순회하여 배열의 합을 arr에 push
    for (let i = 0; i < add.length; i++) {
      arr.push(numbers[0] + add[i]);
      arr.push(-numbers[0] + add[i]);
    }
    return arr;
  }

  // target과 일치하는 원소의 개수 리턴
  return num(numbers).filter((ele) => ele === target).length;
}

// 다른 사람 풀이
// 배열의 활용 없이 DFS 방법으로 문제를 간단하게 해결할 수 있었습니다.
function solution(numbers, target) {
  let answer = 0;

  // 함수 cal은 i와 value를 매개변수로 받는다.
  // i는 현재의 index를 저장, value는 현재의 합을 저장
  function cal(i, value) {
    // 재귀함수를 이용하여 number.length까지 value의 합을 구함
    if (i < numbers.length) {
      cal(1 + i, value + numbers[i]);
      cal(1 + i, value - numbers[i]);
    } else {
      // value의 합이 target과 일치하는지 확인하고, 일치한다면 answer 값을 증가
      if (value === target) {
        answer++;
      }
    }
  }
  cal(0, 0);

  return answer;
}
