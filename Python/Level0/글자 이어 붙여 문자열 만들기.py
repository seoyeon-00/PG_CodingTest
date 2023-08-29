# [문제]
# 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. 
# my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을
# 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

# [입출력 예]
# |        my_string       |                index_list                |      result      |
# |------------------------|------------------------------------------|------------------|
# |  "cvsgiorszzzmrpaqpe"  | [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7] |  "programmers"   |
# |        "zpiaz"         |            [1, 2, 0, 0, 3]               |      "pizza"     |

def solution(my_string, index_list):
    answer = ''
    
    # 반복문 실행 index_list 리스트 요소 출력
    for i in index_list:
        
        # my_string 문자열에서 i번째 문자를 answer에 추가
        answer += my_string[i]
        
    return answer