package Assignments.Java_30May.CAR;
import java.util.*;

public class CarBuilder {
    public CAR createCar(Scanner scanner) {
        System.out.println("Select Manufacturer: 1. Mahindra 2. Tata 3. Maruti");
        int choice = scanner.nextInt();
        CAR car;

        switch (choice) {
            case 1 -> car = new MahindraCar();
            case 2 -> car = new TataCar();
            case 3 -> car = new MarutiCar();
            default -> {
                System.out.println("Invalid choice. Defaulting to Mahindra.");
                car = new MahindraCar();
            }
        }

        car.selectModel(scanner);
        car.selectTransmission(scanner);
        car.selectFuelType(scanner);
        car.selectColor(scanner);
        car.selectLocation(scanner);

        return car;
    }
}
