public class FinancialForecast {

    public static double forecast(double amount, double rate, int years) {
        if (years ==0) {
            return amount;
        }

        return forecast(amount, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {

        double initialInvestment= 10000;
        double annualGrowthRate= 0.10; // 10%
        int years =5;

        double futureValue= forecast(initialInvestment, annualGrowthRate, years);

        System.out.printf("Future Value after %d years = %.2f%n",
                years, futureValue);
    }
}