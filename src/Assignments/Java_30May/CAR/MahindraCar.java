package Assignments.Java_30May.CAR;

public class MahindraCar extends CAR {
    public MahindraCar() {
        this.manufacturer = "Mahindra";
    }

    @Override
    public void selectModel(java.util.Scanner scanner) {
        System.out.println("Select Model: 1. Scorpio 2. Thar 3. Scorpio N 4. XUV 700");
        int choice = scanner.nextInt();
        switch (choice) {
            case 1 -> model = "Scorpio";
            case 2 -> model = "Thar";
            case 3 -> model = "Scorpio N";
            case 4 -> model = "XUV 700";
            default -> model = "Scorpio";
        }
    }
}

