package Bronze2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main_5585 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int cost = Integer.parseInt(br.readLine());
        int change = 1000 - cost;
        int[] coinArr = {500, 100, 50, 10, 5, 1};
        int cnt = 0;

        for(int coin: coinArr) {
            if(change / coin > 0) {
                cnt += change / coin;
                change = change % coin;
            }
        }

        System.out.println(cnt);
    }
}
