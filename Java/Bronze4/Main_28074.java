package Bronze4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main_28074 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String alphabets = br.readLine();

        if (alphabets.contains("M") && alphabets.contains("O") && alphabets.contains("B") && alphabets.contains("B") && alphabets.contains("I") && alphabets.contains("S")) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }
    }
}
