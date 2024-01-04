/*
[문제]
문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 
처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

[제한사항]
- 1 ≤ s의 길이 ≤ 10,000
- s는 영어 소문자로만 이루어져 있습니다.

[입출력]
|          s         | return |
|--------------------|--------|
|      "banana"      |    3   |
|    "abracadabra"   |  	6   |
|  "aaabbaccccabba"  |  	3   |
|         "a"        |  	1   |
|      "abaabab"     |  	2   |
*/

function solution(s) {
  // 나눈 문자열의 개수 저장
  var answer = 0;

  // 반복문 다음 나눠야할 문자열 계산. 숫자로 변환하여 사용
  let str = "";
  // str 변수의 길이 누적
  let strLen = 0;
  // s의 길이가 1이라면, 1 리턴
  if (s.length === 1) {
    return 1;
  }

  // i ~ i.length 길이 str.length 만큼 증가하는 반복문 실행
  for (var i = 0; i < s.length; i += str.length) {
    // 첫글자 저장
    let cur = s[i];

    // count => 0이 되면, x와 x가 아닌 숫자가 같아지는 순간
    let count = 1;

    // cur에 대하여 x와 x가 아닌 숫자가 같아지는 순간을 찾기위한 반복문 실행
    for (var k = i + 1; k < s.length; k++) {
      if (cur === s[k]) {
        count++; // 같으면 count +
      } else {
        count--; // 다르면 count -
      }

      // count가 "0"이라면
      // answer 추가// str에 부분 문자열 재할당// str 누적 길이 저장
      if (count === 0) {
        answer++;
        str = s.slice(i, k + 1);
        strLen = strLen + s.slice(i, k + 1).length;
        break;
      }

      // 문자열이 끝날때까지 count가 0이 아니라면 반복문 중단
      if (k === s.length - 1) {
        str = s.slice(i, k + 1);
        break;
      }
    }
  }

  // 최종적으로 strLen이 s보다 작으면 answer +1
  if (strLen < s.length) {
    answer++;
  }

  return answer;
}
