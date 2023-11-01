/*
[문제]
네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 
일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

- 1478 → "one4seveneight"
- 234567 → "23four5six7"
- 10203 → "1zerotwozero3"

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. 
s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

[제한 사항]
- 1 ≤ s의 길이 ≤ 50
- s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
- return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

[입출력]
|          s         |  result  |
|--------------------|----------|
|  "one4seveneight"  |   1478   |
|    "23four5six7"   |  234567  |
| "2three45sixseven" |  234567  |
|        "123"       |    123   |

*/

function solution(s) {
  // 영단어와 숫자가 대응하는 객체 생성
  const key = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  /*
  key를 순회하여 s에 포함된 문자열이 존재한다면
  문자열 s의 단어를 word와 일치하는 key 객체의 value 값으로 대체 
  최종 결과 s를 정수로 반환하여 출력
  */

  for (var word in key) {
    if (s.includes(word)) {
      s = s.replaceAll(word, key[word]);
    }
  }

  return parseInt(s);
}
