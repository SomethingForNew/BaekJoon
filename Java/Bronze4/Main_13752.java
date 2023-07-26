package Bronze4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main_13752 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        final int n = Integer.parseInt(br.readLine());

        for(int i = 0; i < n; i++) {
            System.out.println("=".repeat(Integer.parseInt(br.readLine())));
        }
    }
}
