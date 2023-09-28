/*
[풀이]
임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.
예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.
문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 
나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, 
return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.

[입출력]
|          myStr        |            result           |
|-----------------------|-----------------------------|
|  "baconlettucetomato" |  ["onlettu", "etom", "to"]  |
|         "abcd"        |            ["d"]            |
|         "cabab"       |          ["EMPTY"]          |
*/

function solution(myStr) {
  let res = [];
  let str = "";

  // myStr 문자열을 배열로 전환, 각 요소를 순회
  myStr.split("").forEach((item) => {
    // 요소가 a, b, c 이고 str이 빈 문자열이 아니라면 현재 문자열을 결과 배열에 추가
    // 그리고 현재 문자열 str 초기화
    // a, b, c가 아닐 경우 item을 str에 문자 추가
    if (item === "a" || item === "b" || item === "c") {
      if (str !== "") {
        res.push(str);
        str = "";
      }
    } else {
      // 현재 문자열에 문자 추가
      str += item;
    }
  });

  // 순회가 끝나고 str이 빈문자열이 아니라면 str을 res에 저장
  if (str !== "") {
    res.push(str);
  }

  // res가 빈 문자열이면 "EMPTY" 출력, 그렇지 않으면 배열 출력
  let result = res.length > 0 ? res : ["EMPTY"];
  return result;
}

// 다른 사람 풀이
function solution(myStr) {
  // 정규 정규식 사용
  // myStr 문자열에서 abc를 찾아서 split, 빈 문자열은 제외 비어있지 않은 문자열만 result에 저장
  const result = myStr.split(/[abc]/).filter((e) => e);
  // 배열의 길이 확인하여 빈비열이면 ["EMPTY"] 출력
  return result.length > 0 ? result : ["EMPTY"];
}
