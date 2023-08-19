package Bronze3;

import java.io.*;
import java.util.StringTokenizer;

public class Main_2914 {
    private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int a = Integer.parseInt(st.nextToken());
        int i = Integer.parseInt(st.nextToken());

        bw.write(Integer.toString(a * (i - 1) + 1));
        bw.flush();
        bw.close();
    }
}
