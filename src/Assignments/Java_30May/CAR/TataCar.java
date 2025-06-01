package Assignments.Java_30May.CAR;

public class TataCar extends CAR {
    public TataCar() {
        this.manufacturer = "Tata";
    }

    @Override
    public void selectModel(java.util.Scanner scanner) {
        System.out.println("Select Model: 1. Nexon 2. Harrier 3. Safari");
        int choice = scanner.nextInt();
        switch (choice) {
            case 1 -> model = "Nexon";
            case 2 -> model = "Harrier";
            case 3 -> model = "Safari";
            default -> model = "Nexon";
        }
    }
}
