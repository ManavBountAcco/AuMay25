package Assignments.Java_30May.CAR;
//blurprint


public abstract class CAR {
    protected String manufacturer;
    protected String model;
    protected String transmission;
    protected String fuelType;
    protected String color;
    protected String location;

    public abstract void selectModel(java.util.Scanner input);
    public void selectTransmission(java.util.Scanner input) {
        System.out.println("Select Transmission: 1. Manual 2. Automatic");
        int choice = input.nextInt();
        transmission = (choice == 2) ? "Automatic" : "Manual";
    }

    public void selectFuelType(java.util.Scanner scanner) {
        System.out.println("Select Fuel Type: 1. Diesel 2. Petrol 3. CNG");
        int choice = scanner.nextInt();
        switch (choice) {
            case 1 -> fuelType = "Diesel";
            case 2 -> fuelType = "Petrol";
            case 3 -> fuelType = "CNG";
            default -> fuelType = "Petrol";
        }
    }

    public void selectColor(java.util.Scanner scanner) {
        System.out.println("Select Color: 1. Silver 2. Blue 3. Yellow");
        int choice = scanner.nextInt();
        switch (choice) {
            case 1 -> color = "Silver";
            case 2 -> color = "Blue";
            case 3 -> color = "Yellow";
            default -> color = "Silver";
        }
    }

    public void selectLocation(java.util.Scanner scanner) {
        System.out.println("Select Location: 1. Delhi 2. Bangalore 3. Hyderabad 4. Chennai");
        int choice = scanner.nextInt();
        switch (choice) {
            case 1 -> location = "Delhi";
            case 2 -> location = "Bangalore";
            case 3 -> location = "Hyderabad";
            case 4 -> location = "Chennai";
            default -> location = "Delhi";
        }
    }

    public void printDetails() {
        System.out.println("\nYour customized car is:");
        System.out.println("Manufacturer: " + manufacturer);
        System.out.println("Model: " + model);
        System.out.println("Transmission: " + transmission);
        System.out.println("Fuel Type: " + fuelType);
        System.out.println("Color: " + color);
        System.out.println("Location: " + location);
    }
}
