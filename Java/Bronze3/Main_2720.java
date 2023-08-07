package Bronze3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main_2720 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());

        for(int i = 0; i < t; i++) {
            int change = Integer.parseInt(br.readLine());

            int quarter = change / 25;
            change %= 25;

            int dime = change / 10;
            change %= 10;

            int nickel = change / 5;
            change %= 5;

            int penny = change;

            System.out.println(quarter + " " + dime + " "  + nickel + " "  + penny );
        }

//        while(t-- > 0) {
//            int change = Integer.parseInt(br.readLine());
//
//            int quarter = change / 25;
//            change %= 25;
//
//            int dime = change / 10;
//            change %= 10;
//
//            int nickel = change / 5;
//            change %= 5;
//
//            int penny = change;
//
//            System.out.println(quarter + " " + dime + " "  + nickel + " "  + penny );
//        }

    }
}
