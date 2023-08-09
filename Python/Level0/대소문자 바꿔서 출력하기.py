# [문제] 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 
# 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

str = input("대문자 소문자를 포함한 단어를 입력해주세요.")
answer = ""

# 반복문 str 문자를 i에 저장해서 반복실행
for i in str:
    
    # i가 대문자면 소문자로, 소문자면 대문자로 변경 후 answer에 추가
    if(i == i.upper()):
        answer += i.lower()
    else:
        answer += i.upper()
        
print(answer)