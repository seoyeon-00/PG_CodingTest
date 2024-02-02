/*
[문제]
코니는 매일 다른 옷을 조합하여 입는것을 좋아합니다.

예를 들어 코니가 가진 옷이 아래와 같고, 오늘 코니가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 
다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야합니다.

|     종류    |              이름           |
|-------------|---------------------------- |
|     얼굴    |   동그란 안경, 검정 선글라스  |
|     상의    |         파란색 티셔츠        |
|     하의    |            청바지            |
|     겉옷    |            긴 코트           |

코니는 각 종류별로 최대 1가지 의상만 착용할 수 있습니다. 
예를 들어 위 예시의 경우 동그란 안경과 검정 선글라스를 동시에 착용할 수는 없습니다.
착용한 의상의 일부가 겹치더라도, 다른 의상이 겹치지 않거나, 혹은 의상을 추가로 더 착용한 경우에는 
서로 다른 방법으로 옷을 착용한 것으로 계산합니다.코니는 하루에 최소 한 개의 의상은 입습니다.
코니가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 
return 하도록 solution 함수를 작성해주세요.

[제한사항]
- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 코니가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.

[입출력]
|                              clothes                          |  result  |
|---------------------------------------------------------------|----------|
|  [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], |     5    |
|                ["green_turban", "headgear"]]                  |          |
|     [["crow_mask", "face"], ["blue_sunglasses", "face"],      |     3    |
|                    ["smoky_makeup", "face"]]                  |          |
*/

// 풀이1 - 조합으로 풀이 (테스트 1번 시간 초과)
function solution(clothes) {
  var answer = 0;
  const obj = {};

  // 2차원 배열의 type을 obj key로 만들어 type에 대한 개수를 객체에 저장
  clothes.forEach(([_, type]) => {
    obj[type] ? obj[type]++ : (obj[type] = 1);
  });

  // 객체 obj의 value를 배열로 저장
  var arr = Object.values(obj);

  // 조합 알고리즘 (중복 x)
  function combination(arr, num) {
    const result = [];
    // nC1 => 바로 반환
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((item, index, origin) => {
      const rest = origin.slice(index + 1); // item의 다음 값 부터의 배열을 추출
      // rest 기준으로 다시 조합
      // 현재 item에 대한 조합을 구하고 있으므로 현재 num에서 -1
      const combine = combination(rest, num - 1);
      // item과 combine을 붙여서 result에 추가
      const attached = combine.map((v) => [item, ...v]);
      result.push(...attached);
    });
    return result;
  }

  // arr의 길이가 나올 수 있는 조합의 길이 수
  for (var i = 1; i <= arr.length; i++) {
    // 길이가 1인 경우의 조합 수 answer에 더함
    if (i === 1) {
      const add = combination(arr, i)
        .flat()
        .reduce((acc, cur) => acc + cur, 0);
      answer += add;
    } else {
      // 길이가 1 이상인 경우의 조합 수 answer에 더함
      const add = combination(arr, i)
        .map((item) => {
          return item.reduce((acc, cur) => acc * cur, 1);
        })
        .reduce((acc, cur) => acc + cur);

      answer += add;
    }
  }

  return answer;
}

// 풀이2 [수학공식]
function solution(clothes) {
  const obj = {};

  // type으로 분류한 옷의 개수를 객체에 저장
  clothes.forEach(([_, type]) => {
    obj[type] ? obj[type]++ : (obj[type] = 1);
  });

  // 객체 obj의 value를 배열로 변환 후 배열 원소 순회
  // (모자 2개 + 안입은 경우(1)) * (장갑 3개 + 안입은 경우(1))
  // 즉, 안 입은 경우를 생각하여 1을 더한 후 곱한다.
  // 전체 경우의 수에서 전부다 안입은 경우(-1)를 제외하여 출력하면 된다.
  var arr = Object.values(obj).reduce((acc, cur) => acc * (cur + 1), 1);

  return arr - 1;
}
