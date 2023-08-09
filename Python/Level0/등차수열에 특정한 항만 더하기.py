# [문제] 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때,
# 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

def solution(a, d, included):
    answer = 0
    # 빈배열
    arr = []

    # for문 - 등차수열로 만들어진 배열을 담아준다
    for i in included:
        if(len(arr) == 0):
            arr.append(a)
        else:
            arr.append(arr[-1] + d)
  
    # included가 false일 경우 배열에서 제거
    # reversed - 순서대로 하면 index가 꼬이기 때문에 뒤에서 부터 제거
    for index, isTrue in reversed(list(enumerate(included))):
        if not isTrue:
            
            # 해당 index의 배열 요소를 제거
            arr.pop(index)
    
    answer = sum(arr)
    return answer

print(solution(3, 4, [True, False, False, True, True]))