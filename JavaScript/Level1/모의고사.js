/*
[문제]
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

[제한 조건]
- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

[입출력]
|     answer    | return  |
|---------------|---------|
|  [1,2,3,4,5]  |   [1]   |
|  [1,3,2,4,2]  | [1,2,3] |
*/

function solution(answers) {
  // (수포자의 정답 저장) 시험은 최대 10,000 문제까지 구성하므로,
  // 수포자 3명을 대상으로 입력 패턴에 맞게 문제 수에 맞게 정답 순서를 answer에 저장
  var answer = new Array(3);

  // 수포자 3명의 정답 패턴
  var examinee = {
    1: "12345",
    2: "21232425",
    3: "3311224455",
  };

  // 정답을 확인을 위한 배열 - 맞춘 갯수 만큼 저장
  var answerCheck = new Array(3).fill(0);

  // answers 문제수 만큼 수포자들의 정답 순서 배열에 저장
  // answers 길이 만큼 순회
  for (var i = 0; i < answers.length; i++) {
    // examinee 객체 순회
    for (var key in examinee) {
      const examineePattern = examinee[key].length;
      const currentAnswer = examinee[key][i % examineePattern]; //

      // answer[parseInt(key) - 1]이 undefined일 경우 빈 문자열 ("")로 초기화
      answer[parseInt(key) - 1] = answer[parseInt(key) - 1] || "";
      answer[parseInt(key) - 1] += currentAnswer;
    }
  }

  // 정답 확인 및 갯수 카운트
  for (var k = 0; k < answers.length; k++) {
    for (var key in answer) {
      // k번 문제가 현재 수포자의 정답과 answer정답이 일치할 경우
      if (parseInt(answer[key][k]) === parseInt(answers[k])) {
        answerCheck[parseInt(key)] += 1; // +1
      }
    }
  }

  // 가장 많이 맞힌 수포자 찾기
  const max = Math.max(...answerCheck); // 가장 많이 맞힌 갯수

  // answerCheck의 순회하여 item이 max값과 일치하면 해당 index 출력, 그렇지 않으면 빈값
  // filter - 배열 필터링 빈값 제거
  const result = answerCheck
    .map((item, index) => (item === max ? index + 1 : ""))
    .filter((item) => item !== "");

  return result;
}
