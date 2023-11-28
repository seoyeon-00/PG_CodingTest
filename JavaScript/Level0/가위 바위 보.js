/*
[문제]
가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 
문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 
경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

[제한사항]
- 0 < rsp의 길이 ≤ 100
- rsp와 길이가 같은 문자열을 return 합니다.
- rsp는 숫자 0, 2, 5로 이루어져 있습니다.

[입출력]
|   rsp   |  result  |
|---------|----------|
|   "2"   |    "0"   |
|  "205"  |   "052"  |
*/

function solution(rsp) {
  // 결과를 저장할 변수 answer
  var answer = "";
  // 가위 바위 보 이기는 순서를 배열에 저장
  var arr = [2, 0, 5];

  // rsp를 순회하여 arr 배열의 index를 idx에 저장
  for (var i of rsp) {
    const idx = arr.indexOf(Number(i));

    // idx가 arr의 마지막 원소라면, answer에 arr[0]
    // 즉 보라면, arr 배열 0번째 index를 answer에 저장
    // 그렇지 않으면 arr 배열의 idx + 1 인덱스 값 answer에 저장
    if (arr.length - 1 === idx) {
      answer += arr[0];
    } else {
      answer += arr[idx + 1];
    }
  }

  // 결과 출력
  return answer;
}
