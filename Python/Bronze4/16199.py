B_YEAR, B_MONTH, B_DAY = map(int, input().split())
C_YEAR, C_MONTH, C_DAY = map(int, input().split())

만나이 = 0
세는나이 = C_YEAR - B_YEAR + 1
연나이 = C_YEAR - B_YEAR

if B_MONTH < C_MONTH:
    만나이 = C_YEAR - B_YEAR
elif B_MONTH == C_MONTH and B_DAY <= C_DAY:
    만나이 = C_YEAR - B_YEAR
else:
    만나이 = C_YEAR - B_YEAR - 1

print(만나이)
print(세는나이)
print(연나이)