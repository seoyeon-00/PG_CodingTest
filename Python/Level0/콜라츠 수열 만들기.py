# [문제]
# 모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고, x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면
# 언젠가는 반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제라고 부릅니다.
# 그리고 위 과정에서 거쳐간 모든 수를 기록한 수열을 콜라츠 수열이라고 부릅니다.
# 계산 결과 1,000 보다 작거나 같은 수에 대해서는 전부 언젠가 1에 도달한다는 것이 알려져 있습니다.
# 임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때 초기값이 n인 콜라츠 수열을 return 하는 solution 함수를 완성해 주세요.

# [입출력 예]
# |   n   |          result         |
# |-------|-------------------------|
# |   10  | [10, 5, 16, 8, 4, 2, 1] |

def solution(n):
    # 초기값 n, answer에 저장
    answer = [n]

    # 반복문 실행
    # answer[-1] : answer 배열의 마지막 원소
    # answer의 마지막 원소가 1이 아니라면 반복문 실행
    while answer[-1] != 1:
        
        # 짝수일때
        if answer[-1] % 2 == 0:
            mn = answer[-1] // 2
            answer.append(mn)
        
        # 홀수일때
        else:
            mn = ( 3 * answer[-1] ) + 1
            answer.append(mn)
            
    return answer