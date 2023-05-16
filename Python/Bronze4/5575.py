for _ in range(3):
    sh, sm, ss, eh, em, es = map(int, input().split())
    startTime = sh * 3600 + sm * 60 + ss
    endTime = eh * 3600 + em * 60 + es
    totalTime = endTime - startTime
    print((totalTime // 3600) % 24, (totalTime // 60) % 60, totalTime % 60)