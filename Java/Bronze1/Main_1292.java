package Bronze1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main_1292 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        ArrayList<Integer> numberList = new ArrayList<Integer>();

        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int sum = 0;

        for(int i = 0; i < b; i++) {
            for(int j = 0; j <= i; j++) {
                numberList.add(i + 1);
            }
        }

        for(int i = a - 1; i <= b - 1; i++) {
            sum += numberList.get(i);
        }

        System.out.println(sum);
    }
}
