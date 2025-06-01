package Assignments.Java_30May.CAR;

public class MarutiCar extends CAR {
    public MarutiCar() {
        this.manufacturer = "Maruti";
    }

    @Override
    public void selectModel(java.util.Scanner scanner) {
        System.out.println("Select Model: 1. Swift 2. Baleno 3. Brezza");
        int choice = scanner.nextInt();
        switch (choice) {
            case 1 -> model = "Swift";
            case 2 -> model = "Baleno";
            case 3 -> model = "Brezza";
            default -> model = "Swift";
        }
    }
}
