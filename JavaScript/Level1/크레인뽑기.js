function solution(board, moves) {
  var answer = 0;
  var boxSize = board.length;
  var container = [];

  //5x5 - 2차원 배열 생성
  var arr = Array.from(Array(boxSize), () => new Array(boxSize));

  //행과 열을 바꿔준다. 새로 만든 2차원 배열에 넣어줌
  //[[0,0,0,4,3],[0,0,2,2,5],[0,1,5,4,1],[0,0,0,4,3],[0,3,1,2,1]]
  for (let i = 0; i < boxSize; i++) {
    for (let j = 0; j < boxSize; j++) {
      arr[j][i] = board[i][j];
    }
  }

  //arr에서 0 제거하기
  //[[4,3],[2,2,5],[1,5,4,1],[4,3],[3,1,2,1]]
  const newArr = arr.map((v) => {
    return v.filter((item) => item !== 0);
  });

  //moves위치 위쪽에 있는 인형 뽑아서 container 빈 배열에 담기
  //moves는 1 ~ 5, newArr는 0 ~ 4 index를 사용하기 때문에 => i - 1
  for (let i of moves) {
    if (!newArr[i - 1][0] == []) {
      container.push(newArr[i - 1][0]);
      //크레인에서 가져간 인형 제거
      newArr[i - 1].shift();
    }
  }

  //container에서 연속으로 2개 쌓인 인형 제거
  while (true) {
    // found 변수를 추가하여, 이전 루프에서 중복 숫자를 찾지 못한 경우 루프를 종료합니다
    let found = false;
    for (let j = 0; j < container.length - 1; j++) {
      if (container[j] === container[j + 1]) {
        found = true;
        answer++; //중복인형 제거하면 +1
        container.splice(j, 2); //중복된 인형은 제거
      }
    }
    if (!found) {
      break;
    }
  }

  //*2 제거된 인형 수
  return answer * 2;
}
