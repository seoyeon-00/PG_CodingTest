
# [문제]
# 문자들이 담겨있는 배열 arr가 주어집니다. 
# arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.

# [제한사항]
# - 1 ≤ arr의 길이 ≤ 200
#   - arr의 원소는 전부 알파벳 소문자로 이루어진 길이가 1인 문자열입니다.

# [입출력]
# |     num_list     |           result         |
# |------------------|--------------------------|
# |     [2, 1, 6]    |        [2, 1, 6, 5]      |

def solution(arr):
    answer = ''

    # 배열 arr 각 요소에 대하여 answer에 저장
    for i in arr:
           answer += i; 
        
    return answer