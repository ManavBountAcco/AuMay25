package Class_Activity.Jun2;

import java.util.ArrayList;

import java.util.ArrayList;
import java.util.Iterator;

public class PlayGround {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();

        // Add initial elements
        for (int i = 0; i < 5; i++) {
            list.add(i);
        }

        // Normal for loop — removing an element dont give error
        /*for (int i = 0; i < list.size(); i++) {
            if (list.get(i) == 2) {
                list.remove(i); // Remove element at index i
            }
        }*/

        // Iterate and modify at the same time - causes ConcurrentModificationException
       /* for (Integer number : list) {
            if (number == 2) {
                list.remove(Integer.valueOf(2)); // Modifying the list during iteration
            }
        }*/
        //safe removal using Iterator
        Iterator<Integer> iterator = list.iterator();
        while (iterator.hasNext()) {
            if (iterator.next() == 2) {
                iterator.remove(); // Safe removal
            }
        }

        byte a = 126;
        byte b = 12;
        byte c = (byte)(a + b);
        System.out.println(c);


        System.out.println("List after removal: " + list);
    }
}

