# [문제]
# 문자열 binomial이 매개변수로 주어집니다. 
# binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수,
# op는 '+', '-', '*' 중 하나입니다. 
# 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

def solution(binomial):
    answer = 0

    # " "(공백)을 기준으로 a, op, c 생성
    a, op, c = binomial.split(" ")
    
    # a, c를 정수로 반환
    a = int(list[0])
    c = int(list[2])
    
    # op의 값에 따라 연산을 수행
    if op == "+":
        answer = a + c
    elif op == "-":
        answer = a - c
    elif op == "*":
        answer = a * c
    
    return answer