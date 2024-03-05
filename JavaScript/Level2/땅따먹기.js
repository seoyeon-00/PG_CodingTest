/*
땅따먹기 게임을 하려고 합니다. 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 
모든 칸에는 점수가 쓰여 있습니다. 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다. 
단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.

예를 들면,

| 1 | 2 | 3 | 5 |
| 5 | 6 | 7 | 8 |
| 4 | 3 | 2 | 1 |

로 땅이 주어졌다면, 1행에서 네번째 칸 (5)를 밟았으면, 2행의 네번째 칸 (8)은 밟을 수 없습니다.

마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요. 
위 예의 경우, 1행의 네번째 칸 (5), 2행의 세번째 칸 (7), 3행의 첫번째 칸 (4) 땅을 밟아 
16점이 최고점이 되므로 16을 return 하면 됩니다.

[제한사항]
- 행의 개수 N : 100,000 이하의 자연수
- 열의 개수는 4개이고, 땅(land)은 2차원 배열로 주어집니다.
- 점수 : 100 이하의 자연수

[입출력]
|                            land                            |   result   |
|------------------------------------------------------------|------------|
|         [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]         |     16     |
|   	    [[1, 1, 3, 1], [2, 3, 2, 2], [1, 4, 1, 1]]         |      9     |
| [[6, 7, 1, 2], [2, 3, 10, 8], [1, 3, 9, 4], [7, 11, 4, 9]] |     35     |
|                [[0, 1, 1, 10], [0, 1, 1, 100]]             |     101    |
|         	[[1, 4, 3, 2], [9, 8, 7, 6], [10, 4, 2, 1]]      |     21     |

첫번째 풀이 방법으로는 테스트 case 5문제 통과했으며 채점 결과 오답으로 나왔습니다.
for문 루프가 아닌 DP로 문제를 해결하는 문제로 다이나믹 프로그래밍 개념을 익히며 문제를 접근했습니다.

*/

// 방법1 - 테스트 case 통과. 채점 미통과
function solution(land) {
  let answer = 0;
  let column = 0;

  for (let i = 0; i < land.length; i++) {
    // 이전 행에서 열을 밟았을 때, 현재 행의 열 값을 0으로 업데이트
    if (i !== 0) {
      land[i][column] = 0;
    }

    // 현재 행에서 최대값
    const maxItem = Math.max(...land[i]);

    // 다음 행이 존재하는 경우
    if (land[i + 1]) {
      // 두 번째 최대값 구하기
      const sortedRow = land[i].slice().sort((a, b) => b - a);
      const secondMaxItem = sortedRow[1];
      const findIdx = land[i].indexOf(maxItem); // 최대값의 index

      // 다음 행의 복사본 생성. 현재 행 최대값 index를 다음행 열의 index에 0으로 업데이트
      const copyNextArr = land[i + 1].slice();
      copyNextArr[findIdx] = 0;

      // maxItem 기준 다음 행 최대값
      const findNextMaxItem = Math.max(...copyNextArr);
      // 다음 행의 findIdx 값
      const nextItemByPrev = land[i + 1][findIdx];

      // (포인트) 현재 행에서 최대값의 열이 다음 행에서 큰 값으로 작용될 수 있음
      // 현재 행에서 2번째로 큰 값과 현재 행 최대값 열을 가진 다음 행의 같은 열의 합산한 값이
      // 현재 행에서 가장 큰 값과 다음 행에서 이전 열에 속하지 않은 최대 값을 합산한 값보다 클 경우를 생각해야 함
      const condition =
        secondMaxItem + nextItemByPrev > maxItem + findNextMaxItem;

      if (condition) {
        // 현재 열을 0으로 초기화하고 다시 최대값을 찾아 열 인덱스 갱신
        land[i][findIdx] = 0;
        const reFindMaxItem = Math.max(...land[i]);
        column = land[i].indexOf(reFindMaxItem);
        answer += reFindMaxItem;
      } else {
        // 이전에 찾은 최대값을 그대로 사용
        column = land[i].indexOf(maxItem);
        answer += maxItem;
      }
    } else {
      answer += maxItem;
    }
  }

  // 최종 점수
  return answer;
}

// 방법2 - 테스트 case 통과. 채점 통과
function solution(land) {
  const len = land.length;
  const dp = Array.from({ length: len }, () => Array(4).fill(0));

  // 첫번째 행은 그대로 복사
  dp[0] = land[0];

  // 두 번째 행부터 dp를 적용하여 최대값 갱신
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          dp[i][j] = Math.max(dp[i][j], land[i][j] + dp[i - 1][k]);
        }
      }
    }
  }

  // 마지막 행의 최대값 반환
  return Math.max(...dp[len - 1]);
}
