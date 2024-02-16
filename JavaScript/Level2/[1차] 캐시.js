/*
[문제]
지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 
관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.
이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 
제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.
어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 제이지는 DB 캐시를 적용하여 
성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.

어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.

[입력 형식]
- 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
- cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
- cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
- 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 
  도시 이름은 최대 20자로 이루어져 있다.

[출력 형식]
입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력한다.

[조건]
- 캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
- cache hit일 경우 실행시간은 1이다.
- cache miss일 경우 실행시간은 5이다

[입출력]
| cacheSize |                          cities                           |   time   |
|-----------|-----------------------------------------------------------|----------|
|     3     |         ["Jeju", "Pangyo", "Seoul", "NewYork", "LA",      |    50    |
|           |  		   "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]        |          |
|     3     |  ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul",   |    21    |
|           |  		           "Jeju", "Pangyo", "Seoul"]                 |          |
|     0     |  		  ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]        |    25    |

[LRU 알고리즘]
페이지 교체 알고리즘 [LRU] -> 가장 오랫동안 참조되지 않은 페이지를 교체
캐시가 사용할 수 있는 리소스의 크기는 제한되어 있어 캐시는 
제한된 용량 안에서 데이터를 저장, 접근, 제거할 수 있어야 한다.
*/

function solution(cacheSize, cities) {
  var answer = 0; // 실행시간 저장
  let cache = []; // cacheSize에 따라 저장하고 있는 데이터

  cities.forEach((ele) => {
    // 대소문자 구분없이 도시이름을 체크하기 위해 cache의 모든 원소를 소문자로 변환
    const changeLowerCase = cache.map((v) => v.toLowerCase());
    // 기존 배열에 ele을 가지고 있다면, 그 원소의 index 저장
    const findIdx = changeLowerCase.indexOf(ele.toLowerCase());

    // cache.length가 cacheSize와 같거나 캐시에 ele을 포함할 경우
    if (
      cache.length === cacheSize ||
      changeLowerCase.includes(ele.toLowerCase())
    ) {
      if (changeLowerCase.includes(ele.toLowerCase())) {
        // cache hit
        cache = cache
          .slice(0, findIdx)
          .concat(cache.slice(findIdx + 1, cache.length)); // 중복된 요소 제거
        cache.push(ele);
        answer += 1;
      } else {
        // cache miss
        cache.shift(); // 리스트에서 가장 오래 사용되지 않은 요소 shift
        cache.push(ele); // 새로운 요소 추가
        answer += 5;
      }
    }

    // cacheSize보다 cache가 작고 중복된 요소가 없을 경우
    if (
      cache.length < cacheSize &&
      !changeLowerCase.includes(ele.toLowerCase())
    ) {
      cache.push(ele);
      answer += 5;
    }
  });

  // cache 사이즈가 0일 경우 따로 계산 처리
  return cacheSize === 0 ? cities.length * 5 : answer;
}
