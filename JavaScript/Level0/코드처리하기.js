/*
[문제]
문자열 code가 주어집니다.
code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.

# mode가 0일 때
code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.

# mode가 1일 때
code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.

[입출력]
|      code      |    result    |
|----------------|--------------|
|  "abc1abc1abc" |    "acbac"   |
*/

function solution(code) {
  var answer = "";
  var mode = 0;

  // code의 string 수 만큼 반복문 실행
  for (i = 0; i < code.length; i++) {
    // mode가 0일 때
    // 삼항연산자 - 코드의 i번째 단어가 1이 아니고 짝수일 경우 answer에 단어 추가. 그렇지 않을 경우 공백
    // 단어가 1이면 mode 변경함
    if (mode === 0) {
      answer += code[i] !== "1" && i % 2 === 0 ? code[i] : "";
      mode = code[i] === "1" ? 1 : mode;
    } else {
      answer += code[i] !== "1" && i % 2 !== 0 ? code[i] : "";
      mode = code[i] === "1" ? 0 : mode;
    }
  }

  // 정답이 빈 문자열이면 "EMPTY"를 띄운다.
  return answer || "EMPTY";
}

console.log(solution("abc1abc1abc"));
