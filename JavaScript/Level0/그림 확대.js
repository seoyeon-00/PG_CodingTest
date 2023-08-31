/*
[문제] 
직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다. 
이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때, 이 그림 파일을 가로 세로로 k배 늘린 
그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

[입출력]
|                   picture                 |  k  |                                           result                                         |
|-------------------------------------------|-----|------------------------------------------------------------------------------------------|
|       [".xx...xx.", "x..x.x..x",          |     |             ["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx",           |
|       "x...x...x", ".x.....x.",           |  2  |             "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx",            |
|   "..x...x..", "...x.x...", "....x...."]  |     |  "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", |
|                                           |     | "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]  |
|-------------------------------------------|-----|------------------------------------------------------------------------------------------|
|          ["x.x", ".x.", "x.x"]            |  3  | 	          ["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...",            |
|          ["x.x", ".x.", "x.x"]            |     |                     "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]                  |
*/

function solution(picture, k) {
  var answer = [];

  // forEach문으로 배열 요소 순회
  picture.forEach((item) => {
    // 새로운 배열 요소를 담아줄 변수 생성
    let addStr = "";

    // for ~ of 반복문으로 문자열을 순회
    // k번 만큼 문자를 반복 출력하여 addStr에 누적하여 추가
    for (let i of item) {
      addStr += i.repeat(k);
    }

    // k번 만큼 새로운 배열 answer에 addStr을 추가해야 하므로
    // k번 만큼 반복문을 돌려 배열 요소로 추가
    for (let repeat = 0; repeat < k; repeat++) {
      answer.push(addStr);
    }
  });

  return answer;
}

// 다른 풀이
// map()은 각 요소에에 대하여 콜백한 결과를 출력하여 새로운 배열을 반환한다는 점을 이용하여 문제 풀이
function solution(picture, k) {
  var answer = [];

  // picture 배열 순회
  picture.map((item) => {
    // addStr 변수에 배열 디스트럭처링을 사용하여 요소를 개별적인 문자열로 분리
    // repeat 문자열을 k번 반복하여 문자열 배열로 반환하고 join하여 배열의 요소들을 하나의 문자열로 결합
    const addStr = [...item].map((i) => i.repeat(k)).join("");

    // 반복문으로 k번 answer 요소로 addStr을 추가
    for (var i = 0; i < k; i++) answer.push(addStr);
  });

  return answer;
}
