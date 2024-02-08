/*
[문제]
0과 1로 이루어진 2n x 2n 크기의 2차원 정수 배열 arr이 있습니다. 
당신은 이 arr을 쿼드 트리와 같은 방식으로 압축하고자 합니다. 구체적인 방식은 다음과 같습니다.

당신이 압축하고자 하는 특정 영역을 S라고 정의합니다.
만약 S 내부에 있는 모든 수가 같은 값이라면, S를 해당 수 하나로 압축시킵니다.
그렇지 않다면, S를 정확히 4개의 균일한 정사각형 영역(입출력 예를 참고해주시기 바랍니다.)으로 쪼갠 뒤, 
각 정사각형 영역에 대해 같은 방식의 압축을 시도합니다.
arr이 매개변수로 주어집니다. 위와 같은 방식으로 arr을 압축했을 때, 
배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

[제한사항]
- arr의 행의 개수는 1 이상 1024 이하이며, 2의 거듭 제곱수 형태를 하고 있습니다. 즉, arr의 행의 개수는 1, 2, 4, 8, ..., 1024 중 하나입니다.
  - arr의 각 행의 길이는 arr의 행의 개수와 같습니다. 즉, arr은 정사각형 배열입니다.
  - arr의 각 행에 있는 모든 값은 0 또는 1 입니다.

[입출력]
|                                       arr                                   |   result    |
|-----------------------------------------------------------------------------|-------------|
|                    [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]                |    [4, 9]   |
|-----------------------------------------------------------------------------|-------------|
|            [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],          |             |
|  [0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],   |   [10, 15]  |
|                               [0,0,0,0,1,1,1,1]]                            |             |
*/

function solution(arr) {
  // 큐브를 1/4로 중첩(재귀함수)하여 쪼개는 함수
  function cutCube(arr) {
    let arrLen = arr.length / 2;
    let arrNew = [];

    // arrLen을 간격으로 반복문 실행
    for (let i = 0; i < arr.length; i += arrLen) {
      let leftBox = [];
      let rightBox = [];

      // i부터 arrLen까지 반복문 실행
      for (let s = i; s < i + arrLen; s++) {
        leftBox.push(arr[s].slice(0, arrLen));
        rightBox.push(arr[s].slice(arrLen, arr.length));
      }

      // 쪼갠 arr의 원소들이 모두 일치하는지 확인하기
      // 중첩배열 1차원 배열로 변환
      const checkLeftBox = [].concat(...leftBox);
      const checkRightBox = [].concat(...rightBox);

      // 배열의 원소가 모두 일치하는지 확인하는 함수
      function areAllElementsEqual(arr) {
        return arr.every((element) => element === arr[0]);
      }

      // areAllElementsEqual 조건 true => 일치하는 원소 출력
      // false => 재귀함수) containLeft / containRight에 대하여 박스 쪼개기 진행
      arrNew.push(
        !areAllElementsEqual(checkLeftBox) ? cutCube(leftBox) : checkLeftBox[0]
      );
      arrNew.push(
        !areAllElementsEqual(checkRightBox)
          ? cutCube(rightBox)
          : checkRightBox[0]
      );
    }

    return arrNew;
  }

  // 중첩배열을 1차원 배열로 변환
  function flattenArray(arr) {
    let result = [];

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        result = result.concat(flattenArray(element));
      } else {
        result.push(element);
      }
    });
    return result;
  }

  let result = cutCube(arr);

  // result의 모든 원소가 0, 1로 동일하다면 해당 조건문 실행한다.
  const checkAllZeroAndOne = flattenArray(result).every(
    (element) => element === result[0]
  );
  if (checkAllZeroAndOne) {
    return result[0] === 1 ? [0, 1] : [1, 0];
  }

  // 1차원 배열로 변환한 array의 0 개수
  const numZero = flattenArray(result).filter((v) => v === 0).length;
  return [numZero, flattenArray(result).length - numZero];
}
