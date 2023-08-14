# [문제] 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 
# return하도록 solution 함수를 완성해주세요.

# [입출력 예]
# |  start | end |           result          |
# |--------|-----|---------------------------|
# |    3   |  10 | [3, 4, 5, 6, 7, 8, 9, 10] |

def solution(start, end):
    answer = []
    
    # range(a,b) : a부터 시작해서 b보다 작으면 for문 안에서 반복문 실행
    # start ~ end + 1 사이의 숫자를 구할 수 있음
    for i in range(start, end + 1):
        answer.append(i)
        
    return answer