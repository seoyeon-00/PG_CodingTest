# input 함수를 통해 사용자에게 값을 요청 후 변수 a, b에 값을 담는다
a, b = input("반복할 문자와 횟수를 입력해주세요.").strip().split(' ')
b = int(b)

# a라는 문자를 b번 반복
print(a * b)