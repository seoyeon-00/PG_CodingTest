# [문제] 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 
# 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면
# 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

# [입출력]
# |     num_list     |           result         |
# |------------------|--------------------------|
# |     [2, 1, 6]    |        [2, 1, 6, 5]      |
# |  [5, 2, 1, 7, 5] |    [5, 2, 1, 7, 5, 10]   |

def solution(num_list):
    answer = num_list

    # 배열의 마지막 index 번호를 추출하기 위해 len 메서드로 num_list 길이 확인
    lastNum = len(num_list)
    
    # 마지막 번호가 이전 번호보다 크다면 => 마지막 수에서 이전 수를 빼서 마지막 배열에 추가
    # 그러지 않은 경우 마지막 번호에 2배를 마지막 배열에 추가
    if(num_list[lastNum - 2] < num_list[lastNum - 1]):
        num_list.append(num_list[lastNum - 1] - num_list[lastNum - 2])
    else:
        num_list.append(num_list[lastNum - 1]  * 2)
    
    return answer