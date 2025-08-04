import sys

def is_number_in_multipleication_table(n: int) -> int:
    """
    입력 받은 정수가 구구단 2단부터 9단까지의 구구단표(A X B = C)에 등장하는지 판별합니다.

    구구단표의 A, B, C 값 중 하나라도 n과 일치하면 등장한것으로 간주합니다.

    Args:
    targe
    """
    for a in range(2, 10):
        for b in range(1, 10):
            c = a * b

            if n == a or n == b or n == a * b:
                return 1


    return 0
        

def main():
    """
    백준 32710번 문제를 해결하는 함수입니다.
    입력을 받아 구구단 2단부터 9단까지에 해당하는 정수인지 확인하고
    해당하는 정수라면 1을 아니면 0을 출력한다.
    """

    try:
        n = int(sys.stdin.readline().strip())
        result = is_number_in_multipleication_table(n)
        print(result)
    except ValueError:
        pass

if __name__ == "__main__":
    main()