import sys

def vEvent():
  """
  백준 25740번 문제를 해결하는 함수입니다.
  출석 도장 개수 N과 물건 가격 P를 입력 받습니다.
  최소 지불 금액을 계산하여 출력합니다.
  """

  N = int(sys.stdin.readline())
  P = int(sys.stdin.readline())

  # 최소 금액을 저장할 리스트
  # 할인이 금액보다 큰 경우 0원이기에 0원을 포함하여 초기화
  discounts = [0]

  if N >= 5:
    discounts.append(500)

  if N >= 10:
    discounts.append(int(P * 0.1))

  if N >= 15:
    discounts.append(2000)
    
  if N >= 20:
    discounts.append(int(P * 0.25))

  # 가장 큰 할인 금액을 찾는다.
  max_discount = max(discounts)

  # 최종 지불 금액을 계산한다.
  final_price = P - max_discount

  if final_price < 0:
    print(0)
  else:
    print(final_price)

if __name__ == "__main__":
  vEvent()