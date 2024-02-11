/* 
[문제]
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 
각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 
각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 
몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

[제한 사항]
- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 
  예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

[입출력]
|        progresses         |         speeds       |    result    |
|---------------------------|----------------------|--------------|
|       [93, 30, 55]        |     	[1, 30, 5]     |    [2, 1]    | 
| [95, 90, 99, 99, 80, 99]  |  [1, 1, 1, 1, 1, 1]  |  [1, 3, 2]   |  
*/
function solution(progresses, speeds) {
  var answer = [];

  // 작업량과 속도에 따라 작업이 완료되는 기간(일)
  const successWork = progresses.map((item, index) =>
    Math.ceil((100 - item) / speeds[index])
  );
  let up = 1; // 배포 순서에 따라 기준이 되는 배포일의 간격을 저장

  for (let i = 0; i < successWork.length; i += up) {
    const compareEle = successWork[i]; // 기준이 되는 작업 일수 저장
    let arrInner = [compareEle]; // 함께 배포될 작업 저장
    let checkUP = 1;

    // compareEle 기준 다음 작업 일수 비교하여 compareEle과 같거나 빠르게 배포된 작업 찾기
    for (let s = i + 1; s < successWork.length; s++) {
      if (compareEle >= successWork[s]) {
        arrInner.push(successWork[s]);
        checkUP++;
        if (s === successWork.length - 1) up = checkUP; // s가 succesWork의 마지막 원소라면
      } else {
        up = checkUP;
        break;
      }
    }
    answer.push(arrInner); // 함께 배포될 작업 answer에 묶어서 저장
  }

  return answer.map((item) => item.length);
}
