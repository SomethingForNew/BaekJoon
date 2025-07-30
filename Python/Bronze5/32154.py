import sys

input = sys.stdin.readline
N = int(input())

def solution(n):
    score_data = {
      1: (11, 'A B C D E F G H J L M'),
      2: (9, 'A C E F G H I L M'),
      3: (9, 'A C E F G H I L M'),
      4: (9, 'A B C E F G H L M'),
      5: (8, 'A C E F G H L M'),
      6: (8, 'A C E F G H L M'),
      7: (8, 'A C E F G H L M'),
      8: (8, 'A C E F G H L M'),
      9: (8, 'A C E F G H L M'),
      10: (8, 'A B C F G H L M')
    }

    # 튜플을 언패킹
    count, str_list = score_data[n]
  
    print(count)
    print(str_list)

solution(N)