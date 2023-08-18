# [문제]
# 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, 
# num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

# [입출력 예]
# |        num_list       |    n    |    return    |
# |-----------------------|---------|--------------|
# |    [1, 2, 3, 4, 5]    |     3   |       1      |
# |  [15, 98, 23, 2, 15]  |    20   |       0      |

def solution(num_list, n):
    answer = 0
    
    # num_list 에 n이 포함된다면 1, 아니면 0을 출력
    if n in num_list:
        answer = 1
    else:
        answer = 0
    return answer