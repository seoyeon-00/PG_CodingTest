# [문제] 정수 n과 k가 주어졌을 때,
# 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로
# 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

# [입출력 예]
# |   n   |  k  |     result      |
# |-------|-----|-----------------|
# |   10  |  3  |    [3, 6, 9]    |
# |   15  |  5  |   [5, 10, 15]   |

def solution(n, k):
    answer = []
    
    # 1 ~ n 까지의 숫자를 생성 (그렇기 때문에 n+1을 사용)
    for i in range(1, n+1):
        
        # i가 k의 배수일 경우, answer에 숫자 추가
        if i % k == 0:
            answer.append(i)
    return answer