package Bronze3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main_2750 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        final int N = Integer.parseInt(br.readLine());
        int[] tempArr = new int[N];

        for(int i = 0; i < N; i++) {
            tempArr[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(tempArr);

        for(int i = 0; i < N; i++) {
            System.out.println(tempArr[i]);
        }
    }
}
