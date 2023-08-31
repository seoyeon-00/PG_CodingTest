# [문제] 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
# n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

# [입출력 예]
# |    n   |  result  |
# |--------|----------|
# |   7    |    16    |
# |   10   |    220   |

def solution(n):
    answer = 0
    
    # 짝수일 때
    if n % 2 == 0:
        # n이하의 짝수 추출 
        for i in range(2, n + 1, 2):
            answer += (i ** 2)
    # 홀수일 떄
    else:
        # n이하의 홀수 추출 
        for i in range(1, n + 1, 2):
            answer += i
            
    return answer