# [문제] 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
# 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 
# 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

# [입출력 예]
# |    my_string     | overwrite_string |  s  |      result      |
# |------------------|------------------|-----|------------------|
# |   "He11oWor1d"   |     "lloWorl"    |  2  |   "HelloWorld"   |
# | "Program29b8UYP" |     "merS123"    |  7  | "ProgrammerS123" |
# |    "aaaaaa"      |       "bbb"      |  3  |     "aaabbb"     |

def solution(my_string, overwrite_string, s):
    answer = ''

    # overwrite_string의 문자열 길이
    overwriteLength = len(overwrite_string)

    # replace로 변경될 텍스트와 변경할 텍스트를 지정하는 것은 위치를 직접 지정하는 것이 아니기 때문에
    # 원하지 않은 곳에서 변경될 수 있다. 그렇기 때문에 해당 방법으로 텍스트 변경을 진행한다.
    # s자리 까지 유지 + 변경되는 문자열 + ( 변경되는 문자열 자리수 + 유지된 문자수 )에서 마지막 까지의 문자
    answer = my_string[:s] + overwrite_string + my_string[s + overwriteLength:]
    return answer