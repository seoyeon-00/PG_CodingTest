/*
[문제]
정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. 
slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.

- n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
- n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
- n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
- n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.

[입출력 예]
|  n  |    slicer   |          num_list             |       result      |
|-----|-------------|-------------------------------|-------------------|
|  3  |  [1, 5, 2]  |  [1, 2, 3, 4, 5, 6, 7, 8, 9]  |  [2, 3, 4, 5, 6]  |
|  4  |  [1, 5, 2]  |  [1, 2, 3, 4, 5, 6, 7, 8, 9]  |     [2, 4, 6]     |
*/

function solution(n, slicer, num_list) {
  // 배열 디스트럭처링을 사용하여 slicer 배열의 값을 a, b, c 변수에 할당
  var [a, b, c] = slicer;

  if (n === 1) {
    return num_list.slice(0, a + 1);
  } else if (n === 2) {
    return num_list.slice(a);
  } else if (n === 3) {
    return num_list.slice(a, b + 1);

    // n = 4, slicer의 0, 1 인덱스의 2 간격으로 슬라이싱한 리스트를 담기 위해 반복문 for 실행
    // 리스트를 담아줄 빈배열 생성
    // 범위 slicer[0] ~ slicer[1] + 1 만큼 slicer[2] 간격으로 슬라이싱한 리스트 생성
    // answer에 리스트 저장
  } else if (n === 4) {
    const arr = [];
    for (var i = a; i < b + 1; i += c) {
      arr.push(num_list[i]);
    }

    return arr;
  }
}
