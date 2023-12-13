/*
[문제]
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 

예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

[제한 조건]
- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

[입출력]
|   a   |   b    |   result  |
|-------|--------|-----------|
|   5   |   24   |   "TUE"   |
*/

function solution(a, b) {
  // 1 ~ 12월 까지의 일 수를 배열로 선언
  const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 요일을 배열로 선언 (2016년도 1월 1일은 금요일)
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  // a월의 이전까지의 일 수의 합을 계산.
  // monthDays의 0 ~ a 인덱스까지 복사하여 배열의 요소의 합을 구함
  const totalDays = monthDays.slice(0, a).reduce((acc, cur) => acc + cur, 0);

  // 총 일 수와 선택한 일(`b`)을 이용하여 요일 인덱스 계산
  const weekIndex = (totalDays + b - 1) % 7;

  return week[weekIndex];
}
