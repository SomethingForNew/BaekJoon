import sys


def get_consumed_time(hh:int, mm:int) -> int:
    """
    to compute the time consumed for the problem solved by Charlie's team.

    Args:
        hh: 9 <= hh <= 11
        mm: 0 <= mm <= 59

    Returns:
        the time consumed for the only problem solved by Charlie's team.
    """

    return (hh - 9) * 60 + (mm - 0)

def main():
    """
    This is a function that solves problem number 26307 of BEAKJOON.
    """
    try:
        hh, mm = map(int, sys.stdin.readline().split())
        result = get_consumed_time(hh, mm)
        print(result)
    except ValueError:
        pass

if __name__ == "__main__":
    main()
