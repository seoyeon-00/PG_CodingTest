/*
[문제]
길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. 
parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 
각 my_strings의 원소의 parts에 해당하는 부분 문자열을 
순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

[제한사항]
1 ≤ my_strings의 길이 = parts의 길이 ≤ 100
1 ≤ my_strings의 원소의 길이 ≤ 100
parts[i]를 [s, e]라 할 때, 다음을 만족합니다.
0 ≤ s ≤ e < my_strings[i]의 길이

[입출력 예]
|                       my_strings                    |               parts            |     result    |
|-----------------------------------------------------|--------------------------------|---------------|
|["progressive", "hamburger", "hammer", "ahocorasick"]|[[0, 4], [1, 2], [3, 5], [7, 7]]| "programmers" |
|-----------------------------------------------------|--------------------------------|---------------|
*/

function solution(my_strings, parts) {
  // parts 이차원 배열을 순회하여 배열의 요소 [a, b]를 구조 분해할당을 통해 a와 b로 추출
  // i는 배열의 index
  // mt_string 문자열에서 a, b까지 문자열을 slice 메서드로 추출하여 result에 저장
  const result = parts.map(([a, b], i) => {
    return my_strings[i].slice(a, b + 1);
  });
  // 배열을 join 메서드를 사용하여 문자열로 변환
  return result.join("");
}
