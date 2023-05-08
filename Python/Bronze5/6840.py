def whoIsTheMiddle(bowlList):
    data = sorted(bowlList)
    centerIndex = len(data) // 2
    
    return int((data[centerIndex ] + data[-centerIndex - 1]) / 2)

bowlList = []

for _ in range(3):
    bowl = int(input())
    bowlList.append(bowl)

print(whoIsTheMiddle(bowlList))