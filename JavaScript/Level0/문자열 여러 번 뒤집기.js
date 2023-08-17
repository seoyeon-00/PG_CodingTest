/*
[문제]
문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.

[입출력]
|     my_string    |                queries              |     result      |
|------------------|-------------------------------------|-----------------|
|   "rermgorpsam"  |  [[2, 3], [0, 7], [5, 9], [6, 10]]  |  "programmers"  |
|      "abab"      |              [[2, 3]]               |      "abba"     |
*/

// #1
function solution(my_string, queries) {
  // 반복문을 돌릴 때 마다 바뀐 문자열에 대해서 여러 번 뒤집는 작업이 필요하므로
  // answer 안에 my_string 문자열을 담는다.
  var answer = my_string;

  // 반복문 실행 queries를 순회하며 작업
  for (var i = 0; i < queries.length; i++) {
    // answer 내에서 queries[i][0], queries[i][1] + 1 범위의 문자열을 저장
    var changeStr = answer.slice(queries[i][0], queries[i][1] + 1);

    // changeStr를 배열로 변환해서 뒤집고 다시 문자열로 만들어서 저장
    var reverseStr = changeStr.split("").reverse().join("");

    // ※ 오답 : answer의 대해서 changeStr을 reverseStr로 replace 메서드를 사용
    // 반례 "abab" 경우 ab가 2번 있기 때문에 replace를 사용하면 오류 발생
    // 해결 : answer에서 queries[i][0] 이전 부분 + 바뀌는 부분 reverse + queries[i][1] 이후 부분을 이어붙여서 답을 내린다.
    answer =
      answer.slice(0, queries[i][0]) +
      reverseStr +
      answer.slice(queries[i][1] + 1);
  }

  return answer;
}

// #2 다른 풀이 해석
function solution(my_string, queries) {
  // my_string 문자열을 배열로 변환하여 str에 저장
  let str = my_string.split("");

  // queries 배열에 대한 순회
  queries.forEach(([start, end]) => {
    // 찾을 문자열 findStr에 저장
    // slice : 문자열.slice(시작 index, 종료 index)
    let findStr = str.slice(start, end + 1);

    // str에 대하여 findStr 문자열을 찾아서 그 부분을 뒤집기
    // str 배열 내에서 start 위치부터 changeStr.length만큼의 요소를 삭제 후 findStr.reverse()를 추가
    // splice(배열의 변경을 시작할 인덱스, 배열에서 제거할 요소의 수, 배열에 추가할 요소)
    // ...findStr.reverse() => 스프레드 연산자 : 기존 findStr을 수정하지 않고 새로운 배열을 만드는데 사용
    str.splice(start, findStr.length, ...findStr.reverse());
  });

  return str.join("");
}
