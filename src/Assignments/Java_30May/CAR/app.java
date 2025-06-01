package Assignments.Java_30May.CAR;

import java.util.Scanner;

public class app {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        boolean carCreated = false;

        while (carCreated == false) {
            System.out.println("\nHi! How are you?");
            System.out.println("1: Create Custom Car");
            System.out.println("2: Exit");

            int input = sc.nextInt();

            if (input == 1 && !carCreated) {
            carCreated = true;
                CarBuilder builder = new CarBuilder();
                CAR myCar = builder.createCar(sc);
                myCar.printDetails();

            }else if(input == 2){
                System.out.println("GoodBye !");
                break;
            }else{
                System.out.println("Car already created or INVALID Option.");
                System.out.println("Car status " +carCreated+ "\nInput: "+input);

            }
        }

    }
}
