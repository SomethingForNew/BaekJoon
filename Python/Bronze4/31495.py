import sys

def whatIsThatCode():
  """
  백준 31495번 문제를 해결하는 함수입니다.
  입력을 받아 정확한 문자열이면 문자열을 출력합니다.
  """

  # 첫 번째 줄에서 문자열을 읽습니다.  
  str = sys.stdin.readline().strip()

  # ""빈 문자열인지 확인 합니다.
  if len(str) <= 2:
    print("CE")
  # 양쪽 끝에 쌍따옴표(") 있는지 확인합니다.
  elif str[0] != '"' or str[len(str)-1] != '"':
    print("CE")
  # 완벽한 문자열인 경우 쌍따옴표(")를 제거 하고 출력합니다.
  else:
    print(str.replace('"', ''))

if __name__ == "__main__":
  whatIsThatCode()