package Silver4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main_11399 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] timeArr = new int[n];

        for(int i = 0; i < n; i++) {
            timeArr[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(timeArr);

        int prev = 0;
        int sum = 0;

        for(int i = 0; i < timeArr.length; i++) {
            sum += prev + timeArr[i];
            prev += timeArr[i];
        }

        System.out.println(sum);
    }
}
