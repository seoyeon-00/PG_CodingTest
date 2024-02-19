/*
[문제]
게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.

U: 위쪽으로 한 칸 가기
D: 아래쪽으로 한 칸 가기
R: 오른쪽으로 한 칸 가기
L: 왼쪽으로 한 칸 가기

캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 
좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 
오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다. 
예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. 
(8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)
단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.

명령어가 매개변수 dirs로 주어질 때, 
게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

[제한사항]
- dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.
- dirs의 길이는 500 이하의 자연수입니다.

[입출력]
|      dirs     |   result   |
|---------------|------------|
|  "ULURRDLLU"  |      7     |
|  "LULLLLLLU"  |      7     |
*/

function solution(dirs) {
  var start = [0, 0];
  var path = [];

  const direction = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  // 전체 걸어본 경로 저장
  // [출발 지점, 도착 지점]로 path에 저장
  for (var dir of dirs) {
    const vd = direction[dir];
    const prevLocation = start;

    start = start.map((item, idx) => {
      // 5, -5를 넘어갈 경우 제자리에 머물러야 한다.
      if (item + vd[idx] > 5 || item + vd[idx] < -5) {
        return item;
      } else {
        return item + vd[idx];
      }
    });

    path.push([prevLocation, start]);
  }

  // 전체 걸어 온 경로에서 중복하여 걸어본 길 제거
  let uniqueArray = [];

  for (var i = 0; i < path.length; i++) {
    let currentItem = path[i];
    let isDuplicate = false;

    // 출발한 위치와 도착한 위치와의 비교
    // 서로 같을 경우 [경계를 넘어가는 명령 무시]
    // 배열은 참조 타입이기 때문에 객체나 배열을 비교하기 위해서는 문자열 형태로 변환해야 함
    // JSON.stringify() 함수를 사용하면 JavaScript 객체나 배열을 JSON 문자열로 변환하여 비교 가능.
    if (JSON.stringify(currentItem[0]) === JSON.stringify(currentItem[1])) {
      isDuplicate = true;
    }

    for (var j = 0; j < uniqueArray.length; j++) {
      // 중복되는 경로라면
      if (JSON.stringify(currentItem) === JSON.stringify(uniqueArray[j])) {
        isDuplicate = true;
        break;
      }

      // reverse - 같은 경로이지만 반대로 통과할 경우도 중복 처리해야 한다.
      if (
        JSON.stringify(currentItem.reverse()) === JSON.stringify(uniqueArray[j])
      ) {
        isDuplicate = true;
        break;
      }
    }

    // 중복값이나 무시되는 명령이 아니라면 uniqueArray에 추가
    if (!isDuplicate) uniqueArray.push(currentItem);
  }

  return uniqueArray.length;
}
