/*
[문제 설명]
문자열 s는 한 개 이상의 단어로 구성되어 있습니다.각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, 
solution을 완성하세요.

[제한 사항]
⇒ 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
⇒ 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

[입출력]
|           s         |         result       |
|---------------------|----------------------|
|  "try hello world"  |   "TrY HeLlO WoRlD"  |

[입출력 예 설명]
"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 
따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
*/

function solution(s) {
  // s를 단어 기준으로 구분하여 배열로 만든다.

  // #정규표현식에서 \b는 경계 메타 문자. 메타 문자 기준으로 split을 한다면?
  // str = "hello  world !";
  // str.split(/\b/) => ["hello", "  ", "world", "!"]

  // s에서 단어 기준으로 나눈 후 그 단어 내부를 순회하여, index 기준 짝수는 대문자. 홀수는 소문자로 변환
  // 2차원 배열로 되어있기 때문에 안에서 한번 밖에서 한번 join을 한다.
  return s
    .split(/\b/)
    .map((word) => {
      return word
        .split("")
        .map((item, index) =>
          index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
        )
        .join("");
    })
    .join("");
}
