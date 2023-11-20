/*
[문제]
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

[제한사항]
- s는 길이가 1 이상, 100이하인 스트링입니다.

[입출력]
|      s     |  answer  |
|------------|----------|
|   "abcde"  |    "c"   |
|   "qwer"   |   "we"   |
*/

function solution(s) {
  // 변수 answer에 결과 값 저장
  var answer = "";

  // s의 길이가 짝수 일때
  // s의 길이의 중간 index 값에서 길이 2 만큼 answer에 저장
  if (s.length % 2 === 0) {
    answer += s.substr(parseInt(s.length / 2) - 1, 2);

    // 홀수 일 경우 s의 중간값을 answer에 저장
  } else {
    answer += s.substr(parseInt(s.length / 2), 1);
  }
  return answer;
}
