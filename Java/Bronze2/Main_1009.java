package Bronze2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_1009 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());

        for(int i = 0; i < t; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            int result = customPow(a, b);

            if(result == 0) {
                System.out.println("10");
            } else {
                System.out.println(result);
            }
        }
    }

    public static int customPow(int a, int b) {
        int base = 1;

        for(int i = 0; i < b; i++) {
            if(base > 10) {
                base %= 10;
            }

            base *= a;
        }
        return base % 10;
    }
}
