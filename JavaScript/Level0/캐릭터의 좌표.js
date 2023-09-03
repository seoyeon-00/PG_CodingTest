/*
[문제]
머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 
예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 
머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 
키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

- [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.

[입출력]
|                        keyinput                       |   board   |  result  |
|-------------------------------------------------------|-----------|----------|
|        ["left", "right", "up", "right", "right"]      |  [11, 11] |  [2, 1]  |
|        ["down", "down", "down", "down", "down"]       |   [7, 9]  |  [0, -4] |
| ["right", "right", "right", "right", "right", "left"] |   [9, 5]  |  [3, 0]  |

# 마지막 입출력 예제는 8번 에러에 대한 반례
-> 이동 범위에 벗어난 값이 계산 도중에 있을 수 있기 때문에 ketiput을 순회하면서 board 범위도 같이 확인해줘야 함.
*/

function solution(keyinput, board) {
  // 좌표 0,0에서 시작
  var answer = [0, 0];

  // board의 x,y축 max 값을 변수에 저장
  let xMax = parseInt(board[0] / 2);
  let yMax = parseInt(board[1] / 2);

  // keyinput 배열을 순회하여 case의 일치하는 데이터에 대하여 연산 진행
  for (var i of keyinput) {
    switch (i) {
      case "left":
        answer[0] -= 1;
        break;
      case "right":
        answer[0] += 1;
        break;
      case "up":
        answer[1] += 1;
        break;
      case "down":
        answer[1] -= 1;
        break;
      default:
        break;
    }

    // 연산 후 board의 max 범위를 초과했는지 확인 후 넘어갔으면,
    // 더 이상 넘어가지 못하도록 값을 고정
    if (answer[0] > xMax || answer[0] < -xMax) {
      answer[0] = answer[0] > 0 ? xMax : -xMax;
    }

    if (answer[1] > yMax || answer[1] < -yMax) {
      answer[1] = answer[1] > 0 ? yMax : -yMax;
    }
  }

  return answer;
}
