# [문제] 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

# input 함수를 통해 사용자에게 값을 요청 후 변수 a에 값을 담는다.
a = int(input("숫자를 입력해주세요."))
check = ""

# a가 짝수 일때 check에 even, 그렇지 않으면 odd
if(a % 2 == 0):
    check = "even"
else:
    check = "odd"

# 결과 출력
print(f"{a} is {check}")