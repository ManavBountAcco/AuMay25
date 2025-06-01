package Assignments.Java_30May.TaxCalc;
import java.util.Scanner;
public class TaxCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter annual salary (INR): ");
        double salary = scanner.nextDouble();

        System.out.print("Enter age (in years): ");
        int age = scanner.nextInt();
        System.out.print("Investment in tax-saving instruments (INR): ");
        double investment = scanner.nextDouble();

        System.out.print("Health insurance premium (INR): ");
        double insurance = scanner.nextDouble();
        System.out.print("Home loan interest (INR): ");
        double homeLoan = scanner.nextDouble();
        double deduction80C = Math.min(investment, 150000);
        double deduction80D = age >= 60 ? Math.min(insurance, 50000) : Math.min(insurance, 25000);
        double deduction24 = Math.min(homeLoan, 200000);
        double totalDeductions = deduction80C + deduction80D + deduction24;
        // tax income
        double taxableIncome = salary - totalDeductions;
        if (taxableIncome < 0) taxableIncome = 0;

        // calcu
        double tax = 0;
        if (age < 60) {
            if (taxableIncome <= 250000) tax = 0;
            else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
            else if (taxableIncome <= 1000000) tax = 250000 * 0.05 + (taxableIncome - 500000) * 0.20;
            else tax = 250000 * 0.05 + 500000 * 0.20 + (taxableIncome - 1000000) * 0.30;
        } else if (age < 80) {
            if (taxableIncome <= 300000) tax = 0;
            else if (taxableIncome <= 500000) tax = (taxableIncome - 300000) * 0.05;
            else if (taxableIncome <= 1000000) tax = 200000 * 0.05 + (taxableIncome - 500000) * 0.20;
            else tax = 200000 * 0.05 + 500000 * 0.20 + (taxableIncome - 1000000) * 0.30;
        } else {
            if (taxableIncome <= 500000) tax = 0;
            else if (taxableIncome <= 1000000) tax = (taxableIncome - 500000) * 0.20;
            else tax = 500000 * 0.20 + (taxableIncome - 1000000) * 0.30;
        }

        System.out.printf("Total tax owed: ₹%.2f\n", tax);

    }
}
