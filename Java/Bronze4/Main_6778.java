package Bronze4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main_6778 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int antennas = Integer.parseInt(br.readLine());
        int eyes = Integer.parseInt(br.readLine());
        ArrayList<String> tempArr = new ArrayList<String>();

        if(antennas >= 3 && eyes < 4) {
            tempArr.add("TroyMartian");
        }

        if(antennas < 6 && eyes >= 2){
            tempArr.add("VladSaturnian");
        }

        if(antennas <= 2 && eyes <= 3){
            tempArr.add("GraemeMercurian");
        }

        for(int i = 0; i < tempArr.size(); i++) {
            System.out.println(tempArr.get(i));
        }
    }
}
