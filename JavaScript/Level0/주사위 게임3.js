/*
[문제]

1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

- 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
- 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
- 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
- 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
- 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.

네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때,
얻는 점수를 return 하는 solution 함수를 작성해 주세요.

[입출력 예]
|  a  |   b  |  c  |  d  | result |
|-----|------|-----|-----|--------|
|  2  |   2  |  2  |  2  |  2222  |
|  4  |   1  |  4  |  4  |  1681  |
|  6  |   3  |  3  |  6  |   27   |
|  2  |   5  |  2  |  6  |   30   |
|  6  |   4  |  2  |  5  |    2   |
*/

function solution(a, b, c, d) {
  var answer = 0;

  // arr에 a, b, c, d를 저장
  var arr = [a, b, c, d];
  var arr2 = [];

  // arr에 대해서 el(특정 숫자)가 몇개 있는지 계산 후 arr2 배열에 저장
  const getNum = (arr, el) => arr.filter((v) => v === el).length;
  for (var k = 0; k < 4; k++) {
    arr2.push(getNum(arr, arr[k]));
  }

  // arr2에 4가 포함되어 있다면 (모든 주시위 수가 같을 때)
  if (arr2.includes(4)) {
    answer = 1111 * arr[0];

    // arr2에 3이 포함되어 있다면 (3개의 주사위가 일치하고 나머지는 다른 1개)
  } else if (arr2.includes(3)) {
    // arr를 순회하며 arr의 원소가 포함된 index 값을 추출해서 arr2에 그 index를 넣은 후
    // 주사위 숫자의 빈도수를 저장한 배열 arr2[index] === 3과 일치하는 arr 원소를 p에 할당.
    // 즉, arr 배열에서 세 개의 같은 숫자를 가진 주사위 숫자가 할당
    const p = arr.find((val) => arr2[arr.indexOf(val)] === 3);

    // arr 배열에서 하나만 존재하는 주사위 숫자가 할당됩니다.
    const q = arr.find((val) => arr2[arr.indexOf(val)] === 1);

    // Math.pow(a,b)  a를 밑으로 하고, b를 지수로하여 거듭제곱한 값을 반환하는 JavaScript의 내장 함수
    answer = Math.pow(10 * p + q, 2);

    // arr2에 2이 포함되어 있다면 (2개의 주사위가 일치하고 나머지는 다르거나 같거나)
  } else if (arr2.includes(2)) {
    // 두 숫자가 같고 다른 두 숫자가 다른 경우
    if (arr2.includes(1)) {
      // arr를 순회하며 arr의 원소가 포함된 index 값을 추출해서 arr2에 그 index를 넣은 후
      // 주사위 숫자의 빈도수를 저장한 배열 arr2[index] === 1과 일치하는 arr 인덱스를 qIndex에 할당.
      const qIndex = arr.findIndex((val) => arr2[arr.indexOf(val)] === 1);

      //index를 넣어서 arr에서 해당하는 값 저장
      const q = arr[qIndex];

      // qIndex와 다른 인덱스이면서 arr2에서 해당 인덱스의 빈도수가 1인 경우인 index를 find
      const rIndex = arr.findIndex(
        (val, index) => index !== qIndex && arr2[index] === 1
      );
      const r = arr[rIndex];
      answer = q * r;

      // 두 숫자가 같고 다른 두 숫자가 같은 경우
    } else {
      // arr를 순회하며 arr의 원소가 포함된 index 값을 추출해서 arr2에 그 index를 넣은 후
      // 주사위 숫자의 빈도수를 저장한 배열 arr2[index] === 2와 일치하는 arr 인덱스를 pIndex에 할당.
      const pIndex = arr.findIndex((val) => arr2[arr.indexOf(val)] === 2);
      const p = arr[pIndex];

      // p와 다른 값이면서 arr2에서 해당 인덱스의 빈도수가 2인 경우인 index를 find
      const qIndex = arr.findIndex(
        (val, index) => val !== p && arr2[index] === 2
      );
      const q = arr[qIndex];
      answer = (p + q) * Math.abs(p - q);
    }

    // 모든 주시위 수가 다를 때
  } else {
    answer = Math.min(...arr);
  }

  return answer;
}
