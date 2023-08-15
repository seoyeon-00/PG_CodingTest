/*
[문제]
알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수,
my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 
배열을 return 하는 solution 함수를 작성해 주세요.

[입출력]
|       my_string      |                                       result                                       |
|----------------------|------------------------------------------------------------------------------------|
|     "Programmers"    |    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  |
|                      |   1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]    |
*/

function solution(my_string) {
  // A-Z 그리고 a-z 까지 담을 배열 arr를 생성
  var arr = [];

  // 알파벳과 매치하여 my_string에 포함된 알파벳 수를 담기 위한 배열 생성
  var answer = [];

  // 유니코드를 사용하여 숫자를 문자로 바꾸는 방법
  // 65 - 122는 유니코드에서 A-Z, a-z를 포함하지만 중간에 다른 특수문자도 포함
  // 그렇기 때문에 if문을 통해 범위를 지정하여 특정 코드에 일치하는 문자만 arr에 추가
  for (let i = 65; i <= 122; i++) {
    if ((i >= 65 && i <= 90) || (i >= 97 && i <= 122)) {
      arr.push(String.fromCharCode(i));
    }
  }

  // arr에서 반복문을 통해 알파벳을 출력
  for (let i = 0; i < arr.length; i++) {
    // #solution_01
    // pattern 변수에 정규식을 할당
    // arr[i]를 찾으며, g는 문자열 내에서 해당 패턴에 매칭되는 모든 부분을 찾도록 한다.
    const pattern = new RegExp(`[${arr[i]}]`, "g");

    // my_string 문자열에서 pattern에 매칭되는 부분을 찾아 res1에 저장
    // 매칭되는 부분이 없으면 null을 반환
    const res1 = my_string.match(pattern);

    // 매칭이 없으면 null을 반환하기 때문에, 매칭이 있을 경우 res1의 문자열 길이만큼 answer에 추가
    // 없으면 0을 배열에 추가
    if (res1 !== null) {
      answer.push(res1.length);
    } else {
      answer.push(0);
    }

    // #solution_02
    // my_string을 arr[i] 문자를 구분자로 사용하여 분할한 배열의 길이를 계산
    const res2 = my_string.split(arr[i]).length - 1;
    answer.push(res2);
  }

  return answer;
}
