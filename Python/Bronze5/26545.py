import sys

def mathematics():
  """
  백준 26545번 문제를 해결하는 함수입니다.
  입력을 받아 총 합계를 계산하여 출력합니다.
  """

  # 첫 번째 줄에서 n (입력될 숫자의 개수)을 읽습니다.
  # readline()은 개행 문자(\n)를 포함하므로, strip()으로 제거하고 int()로 형 변환합니다.
  n = int(sys.stdin.readline().strip())

  total_sum = 0

  # n번 반복하여 각각의 숫자를 읽고 합계에 더합니다.
  for _ in range(n):
    # 각줄의 정수 x를 읽고 int()로 형 변환 합니다.
    x = int(sys.stdin.readline().strip())

    # 읽어들인 x를 total_sum에 누적합니다.
    total_sum += x

  # 계산된 총 합계를 출력합니다.
  print(total_sum)


if __name__ == "__main__":
  mathematics()