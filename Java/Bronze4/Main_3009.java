package Bronze4;

import java.io.*;
import java.util.StringTokenizer;

public class Main_3009 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int xCoordinateArr[] = new int[3];
        int yCoordinateArr[] = new int[3];

        for(int i = 0; i < 3; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            xCoordinateArr[i] = Integer.parseInt(st.nextToken());
            yCoordinateArr[i] = Integer.parseInt(st.nextToken());
        }

        int x = 0;
        int y = 0;

        if(xCoordinateArr[0] == xCoordinateArr[1]){
            x = xCoordinateArr[2];
        }else{
            x = (xCoordinateArr[0] == xCoordinateArr[2]) ? (xCoordinateArr[1]) : (xCoordinateArr[0]);
        }

        if(yCoordinateArr[0] == yCoordinateArr[1]){
            y = yCoordinateArr[2];
        }else{
            y = (yCoordinateArr[0] == yCoordinateArr[2]) ? (yCoordinateArr[1]) : (yCoordinateArr[0]);
        }

        bw.write(x + " " + y);
        bw.flush();
        bw.close();
    }

}