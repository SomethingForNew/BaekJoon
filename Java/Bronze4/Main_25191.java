package Bronze4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main_25191 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        final int chicken = Integer.parseInt(br.readLine());
        final String[] drinkArray = br.readLine().split(" ");
        final int coke = Integer.parseInt(drinkArray[0]);
        final int bear = Integer.parseInt(drinkArray[1]);

        System.out.println(Math.min(chicken, coke / 2 + bear));

    }
}
