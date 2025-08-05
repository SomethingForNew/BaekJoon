import sys

def hour_wall(sab: int, fab:int) -> str:
    """
    입력 소요 시간을 비교하여 사람들이 어떤 교통편을 더 많이 이용하는지 판별

    Args:
        sab: 고속철도로 a역에서 b역으로 이동시 소요시간 (1min <= n <= 738min)
        fab: 항공편으로 a역에서 b역으로 이동시 소요시간 (1min <= n <= 738min)

    Returns:
        sab가 4시간 보다 오래 걸리면 'flight'를 반환
        사람들이 고속철도를 더 많이 이용하면 'high speed rail'을 그렇지 않다면 'flight'를 반환
    """
    if sab >= 260:
        return 'high speed rail'
    else:
        return 'high speed rail' if sab < fab else 'flight'

def main():
    """
    백준 32775번 문제를 해결하는 함수입니다.
    입력을 받아 a역에서 b역으로 이동할 때 어느 교통수단을 더 많이 이용하는지를 구합니다.
    """
    try:
        sab = int(sys.stdin.readline().strip()) # a역에서 b역 까지 고속철도로 이용했을 때 소요시간
        fab = int(sys.stdin.readline().strip()) # a역에서 b역 까지 항공편을 이용했을 때 소요시간
        result = hour_wall(sab, fab)
        print(result)
    except ValueError:
        pass

if __name__ == "__main__":
    main()