/*
[문제]
다트 게임
카카오톡에 뜬 네 번째 별! 심심할 땐? 카카오톡 게임별~

카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다.
다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

1. 다트 게임은 총 3번의 기회로 구성된다.
2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 
   1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
4. 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 
   아차상(#) 당첨 시 해당 점수는 마이너스된다.
5. 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
6. 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
7. 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
9. 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

[입력 형식]
"점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
예) 1S2D*3T

- 점수는 0에서 10 사이의 정수이다.
- 보너스는 S, D, T 중 하나이다.
- 옵선은 *이나 # 중 하나이며, 없을 수도 있다.


[출력 형식]
3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
예) 37

[입출력]
| dartResult | answer |              설명              |
|------------|--------|--------------------------------|
|	  1S2D*3T  |   37   |    1^1 * 2 + 2^2 * 2 + 3^3     |
|  1D2S#10S  |    9   |    1^2 + 2^1 * (-1) + 10^1     |
|   1D2S0T   |    3   | 	      1^2 + 2^1 + 0^3        |
|  1S*2T*3S  |   23   |  	1^1 * 2 * 2 + 2^3 * 2 + 3^1  |
|  1D#2S*3S  |    5   | 1^2 * (-1) * 2 + 2^1 * 2 + 3^1 |
|   1T2D3D#  |   -4   |   	1^3 + 2^2 + 3^2 * (-1)     |
|   1D2S3T*  |   59   | 	 1^2 + 2^1 * 2 + 3^3 * 2     |
*/

function solution(dartResult) {
  // 다트 게임을 3번 던지므로 3개의 원소를 저장할 배열 arr
  var arr = [];
  // 문자별 제곱하여 스코어를 계산할 객체 저장
  var score = {
    S: 1,
    D: 2,
    T: 3,
  };

  // dartResult 문자열을 순회
  for (var i = 0; i < dartResult.length; i++) {
    // dartResult[i]가 숫자일 경우
    if (!isNaN(dartResult[i])) {
      // 만약 dartResult[i] 다음에도 숫자일 경우 즉, 10일 경우
      if (!isNaN(dartResult[i + 1])) {
        // 해당 숫자를 추출하여 twoDigitNum에 저장
        const twoDigitNum = dartResult.substr(i, 2);
        // twoDigitNum의 제곱한 수를 계산하여 arr에 추가
        const cal = Math.pow(twoDigitNum, score[dartResult[i + 2]]);

        // 다음 숫자를 제거 => 제거하지 않으면 다음 문자(0)로 순회하면서 계산을 진행
        dartResult =
          dartResult.substring(0, i + 1) + dartResult.substring(i + 2);
        arr.push(cal);
      } else {
        // 다음 문자가 숫자가 아닐경우 계산 진행 후 arr에 저장
        const cal = Math.pow(dartResult[i], score[dartResult[i + 1]]);
        arr.push(cal);
      }
      // dartResult[i]가 "*"일 경우
    } else if (dartResult[i] === "*") {
      // arr 배열의 마지막과, 마지막 앞 원소 2배 진행
      arr.splice(arr.length - 1, 1, arr[arr.length - 1] * 2);
      // 만약 0번째 index에서 2배를 진행하게 될 경우 앞에 원소가 없기 때문에 진행할 수 없도록 if문 처리
      if (arr[arr.length - 2]) {
        arr.splice(arr.length - 2, 1, arr[arr.length - 2] * 2);
      }
      // dartResult[i]가 "#"일 경우
    } else if (dartResult[i] === "#") {
      // arr 마지막 원소 -1
      arr.splice(arr.length - 1, 1, arr[arr.length - 1] * -1);
    }
  }

  // 3번의 다트 점수를 arr에 저장, 이후 합산하여 결과 리턴
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// ## 다른 해결 방안 - match와 정규식 사용 ##
// dartResult 문자열에서 숫자 다음에 S, D, T 중 하나가 오고, 그 뒤에 옵션으로
// * 또는 #이 올 수 있는 패턴을 찾아 배열로 반환
const dartResult = "1S2D*3T";
let darts = dartResult.match(/\d{1,}[SDT][*#]?/g);
console.log(darts); //[ '1S', '2D*', '3T' ]
