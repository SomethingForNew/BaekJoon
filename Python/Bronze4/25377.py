max = 1001
answer = max

for _ in range(int(input())):
    A, B = map(int, input().split())

    if A <= B and answer >= B:
        answer = min(max, B)
    
if max == answer:
    print(-1)
else:
    print(answer)