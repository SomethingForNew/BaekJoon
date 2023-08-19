package Bronze2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main_15829 {
    static final int M = 1234567891;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int len = Integer.parseInt(br.readLine());
        String str = br.readLine();
        long hashValue = 0;
        long pow = 1;

        for(int i = 0; i < len; i++) {
            hashValue += ((str.charAt(i) - 96) * pow);
            pow = (pow * 31) % M;
        }

        System.out.println(hashValue % M);
    }
}
