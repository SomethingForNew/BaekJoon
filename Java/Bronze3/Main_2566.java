package Bronze3;

import java.io.*;
import java.util.StringTokenizer;

public class Main_2566 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int numbersArray[][] = new int[9][9];
        int maxNumber = 0;
        int row = 0;
        int column = 0;

        for(int i = 0; i < numbersArray.length; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            for(int j = 0; j < numbersArray[i].length; j++) {
                numbersArray[i][j] = Integer.parseInt(st.nextToken());

                if(numbersArray[i][j] > maxNumber) {
                    maxNumber = numbersArray[i][j];
                    row = i;
                    column = j;
                }
            }
        }

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        bw.write(Integer.toString(maxNumber));
        bw.newLine();
        bw.write((row + 1) + " " + (column + 1));
        bw.flush();
        bw.close();
    }
}
