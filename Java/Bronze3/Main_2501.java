package Bronze3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main_2501 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] numsArr = br.readLine().split(" ");
        final int N = Integer.parseInt(numsArr[0]);
        final int K = Integer.parseInt(numsArr[1]);
        ArrayList<Integer> tempArr = new ArrayList<Integer>();

        for(int i = 1; i <= N; i++) {
            if(N % i == 0) {
                tempArr.add(i);
            }
        }

        if(tempArr.size() < K) {
            System.out.println(0);
        }
        else {
            System.out.println(tempArr.get(K - 1));
        }
    }
}
