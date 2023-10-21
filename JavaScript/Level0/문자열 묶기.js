/*
[문제]
문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 
묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

[입출력]
|             strArr             |  result  |
|--------------------------------|----------|
|   ["a","bc","d","efg","hi"]	   |     2    |
*/

function solution(strArr) {
  // 생성자 함수. 객체 생성
  var obj = new Object();

  // strArr를 순회 objLength에 item의 길이 저장
  strArr.forEach((item) => {
    const objLength = item.length;
    // obj에 존재하는 key면 +1 존재하지 않으면 key, value 생성
    obj[objLength] ? (obj[objLength] += 1) : (obj[objLength] = 1);
  });

  // obj의 최대 value 값 출력
  // [...Object.values(obj)] -> obj의 value 추출 하여 ex.[2,2,1] 최대값 구함
  return Math.max(...Object.values(obj));
}
