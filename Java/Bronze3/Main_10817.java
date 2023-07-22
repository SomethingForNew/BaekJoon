package Bronze3;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Main_10817 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        ArrayList<Integer> intArr = new ArrayList<>();

        for (int i = 0; i < 3; i++) {
            intArr.add(Integer.parseInt(st.nextToken()));
        }

        br.close();
        Collections.sort(intArr);

        System.out.println(intArr.get(1));
    }
}
