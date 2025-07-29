import sys

input = sys.stdin.readline()
N = int(input)

def factorial3(N):
  result = 1

  for i in range(1, N+1):
    result *= i

  print(result)  


factorial3(N)