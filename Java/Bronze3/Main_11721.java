package Bronze3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main_11721 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String word = br.readLine();
        br.close();
        int cnt = 0;

        for(int i = 0; i < word.length(); i++) {
            System.out.print(word.charAt(i));
            cnt++;

            if(cnt == 10) {
                System.out.println();
                cnt = 0;
            }
        }

    }
}
