/*
[문제]
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 
최빈값이 여러 개면 -1을 return 합니다.

[입출력 예]
|             array           | result |
|-----------------------------|--------|
|      [1, 2, 3, 3, 3, 4]     |    3   |
|         [1, 1, 2, 2]        |   -1   |
|              [1]            |    1   |
|           [44, 55]          |   -1   |
| [0, 1, 2, 3, 4, 5, 6, 7, 8] |   -1   |
*/

// 내가 작성한 풀이
function solution(array) {
  var answer = 0;
  // new 연산자 객체 생성
  var result = new Object();
  // 가장 빈도 수가 높은 key값을 finishNum에 저장
  var finishNum = [];

  // array 배열 순회하여 객체 i인 key와 배열 안에 i의 개수를 value로 저장
  for (let i of array) {
    let arrNum = array.join("").split(i).length - 1;
    result[i] = arrNum;
  }

  // 객체의 value 값만 뽑아서 배열로 반환
  let arrValue = Object.values(result);

  // 배열 중에서 가장 최대값을 max에 저장
  let max = Math.max(...arrValue);

  // result 객체의 키값 순회하여 value값이 max와 일치하면 finishNum에 키값 저장
  for (let j in result) {
    if (result[j] === max) {
      finishNum.push(j);
    }
  }

  // finishNum이 2이상이면 최빈값이 중복이기 때문에 -1을, 그렇지 않으면 finishNum의 값을 출력
  answer = finishNum.length >= 2 ? -1 : Number(finishNum[0]);
  return answer;
}

// 참고한 풀이
function solution(array) {
  // new Map 객체 생성
  const frequencyMap = new Map();

  // array 배열을 순회
  for (const num of array) {
    // frequencyMap에 num을 가지고 있다면 num인 key에 value를 저장
    // frequencyMap num을 조회하여 +1
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);

      // frequencyMap에 num을 가지고 있지 않다면 num인 key에 value 1을 저장
    } else {
      frequencyMap.set(num, 1);
    }
  }

  // 최대 빈도 값을 저장
  let maxFrequency = 0;

  // 최빈값을 갖는 요소를 저장, 초기값 -1
  let mode = -1;

  // frequencyMap 객체 순회하여
  for (const [num, frequency] of frequencyMap) {
    // maxFrequency이 frequency보다 크다면 maxFrequency에 frequency값 저장
    // mode에는 frequencyMap의 key값 저장
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mode = num;

      // 현재 maxFrequency값과 같은 frequency를 가진 요소가 있다면 mode -1을 반환
      // (동일한 최빈값이 있을 때)
    } else if (frequency === maxFrequency) {
      mode = -1;
    }
  }

  return mode;
}
