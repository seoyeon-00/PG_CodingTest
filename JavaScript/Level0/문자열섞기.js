/*
[문제]
길이가 같은 두 문자열 str1과 str2가 주어집니다.
두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
*/

function solution(str1, str2) {
  var answer = "";

  // str의 대한 길이를 구함
  var repeatNum = str1.length;

  // str 길이 만큼 반복문을 돌리며 문자열 index와 일치하는 단어끼리 섞어서 answer 안에 문자열을 담는다.
  for (i = 0; i < repeatNum; i++) {
    answer += str1[i];
    answer += str2[i];
  }

  return answer;
}

console.log(solution("aaaaa", "bbbbb"));
