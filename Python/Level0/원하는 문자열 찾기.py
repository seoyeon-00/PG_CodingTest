# [문제]
# 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다.
# myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.
# 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

# [입출력 예]
# |    myString     |      pat     |    return    |
# |------------- ---|--------------|--------------|
# |    "AbCdEfG"    |     "aBc"    |       1      |
# |     "aaAA"      |    "aaaaa"   |       0      |
 
def solution(myString, pat):
    answer = 0

    # 대소문자 상관없이 일치하는지 비교하기 위해 myString, pat을 소문자로 변환
    lower = myString.lower()
    lowerPat = pat.lower()
    
    # find() 함수는 찾고자하는 문자가 포함되면 처음 나온 인덱스를 반환, 없다면 -1을 반환
    result = lower.find(lowerPat);
    
    # result가 -1이 아닐 경우 answer은 1, -1인 경우 answer은 0이 된다.
    if result != -1:
        answer = 1
    else:
        answer = 0
    
    return answer