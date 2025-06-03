package Class_Activity.Jun2;
import java.util.*;

public class StringIntersection {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String str1 = sc.nextLine();
        String str2 = sc.nextLine();

        HashMap<String, Integer> map = new HashMap<>();

        for( String word : str1.split(" ")){
            if(map.containsKey(word)){
                map.put(word, map.get(word) + 1);
            }else{
                map.put(word, 1);
            }
        }

        for( String word : str2.split(" ")){
            if(map.containsKey(word)){
                map.put(word, map.get(word) + 1);
            }else{
                map.put(word, 1);
            }
        }

        for(Map.Entry<String, Integer> entry : map.entrySet()){
            if(entry.getValue()<2){
                System.out.print(entry.getKey()+" ");
            }
        }


    }
}
