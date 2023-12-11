/*
[문제]
문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다. 
str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 
문자열들을 순서대로 담은 리스트를, 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 
오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요. 
"l"이나 "r"이 없다면 빈 리스트를 return합니다.

[제한사항]
- 1 ≤ str_list의 길이 ≤ 20
- str_list는 "u", "d", "l", "r" 네 개의 문자열로 이루어져 있습니다.

[입출력 예]
|        str_list       |    result   |
|-----------------------|-------------|
|  ["u", "u", "l", "r"] |  ["u", "u"] |
|         ["l"]         |      []     |
*/

function solution(str_list) {
  // str_list를 순회, 요소가 "l", "s"일 때 조건에 대하여 return
  for (var i = 0; i < str_list.length; i++) {
    // "l"일 경우 l 이전의 배열 요소들 리턴
    if (str_list[i] === "l") {
      return str_list.slice(0, i);
    }

    // "r"일 경우 r 이후의 배열 요소들 리턴
    if (str_list[i] === "r") {
      return str_list.slice(i + 1);
    }
  }

  // "l", "r" 둘다 없는 경우 [] 빈배열 리턴
  return [];
}
