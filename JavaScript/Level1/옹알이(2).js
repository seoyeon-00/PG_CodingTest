/*
[문제]
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과
네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다.
문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

[제한사항]
- 1 ≤ babbling의 길이 ≤ 100
- 1 ≤ babbling[i]의 길이 ≤ 30
- 문자열은 알파벳 소문자로만 이루어져 있습니다.

[입출력]
|                     babbling                    | result |
|-------------------------------------------------|--------|
|           ["aya", "yee", "u", "maa"]            |    1   |
| ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]  |    2   |
|  	                 ["myea"]                     |    0   |
|                 	["yeayaye"]                   |    1   |
*/

function solution(babbling) {
  var useArr = ["aya", "ye", "woo", "ma"];

  return babbling.filter((item) => {
    let i = item;

    // 연속된 단어가 존재한다면 false 리턴
    for (let babble of useArr) {
      const continueStr = babble + babble;
      if (i.includes(continueStr)) {
        return false;
      }
    }

    // useArr 순회, use에 대하여 i에 포함되어 있다면
    // 문자열에 존재하는 use를 " "로 치환
    // # ""로 변경할 경우, 새롭게 조합된 단어가 합쳐져 useArr에 포함된 단어가 반복문을 통해 제거될 수 있음
    for (let use of useArr) {
      let regex = new RegExp(use, "g");
      if (i.indexOf(use) != -1) {
        i = i.replace(regex, " ");
      }
    }

    return i.replaceAll(" ", "").length === 0;
  }).length;
}
