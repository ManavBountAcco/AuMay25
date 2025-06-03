package Class_Activity.Jun2;
import java.util.*;

class Empl {
    private String name;
    private int age;
    private int id;

    public Empl(String name, int age, int id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Name: " + name + ", Age: " + age;
    }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
}

public class Employee {
    public static void main(String[] args) {
        Empl empl = new Empl("Manav", 25, 123456);
        Empl empl1 = new Empl("Abhishek", 23, 123457);

        Map<Integer, Empl> empMap = new HashMap<>();
        empMap.put(empl.getId(), empl);
        empMap.put(empl1.getId(), empl1);

        // Using Map.Entry to iterate and print all employee details
        for (Map.Entry<Integer, Empl> entry : empMap.entrySet()) {
            System.out.println(entry.getValue());
        }
    }
}
