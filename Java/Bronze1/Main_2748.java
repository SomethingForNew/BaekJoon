package Bronze1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main_2748 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        final long n = Long.parseLong(br.readLine());
        ArrayList<Long> tempArr = new ArrayList<Long>();
        tempArr.add(0L);
        tempArr.add(1L);

        for(int i = 1; i < n; i++) {
            tempArr.add(tempArr.get(i - 1) + tempArr.get(i));
        }

        System.out.println(tempArr.get(tempArr.size() - 1));
    }
}
