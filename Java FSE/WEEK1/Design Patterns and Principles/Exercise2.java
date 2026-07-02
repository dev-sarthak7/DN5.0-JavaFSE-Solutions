interface Payment {
    void pay();
}


class CreditCardPayment implements Payment {

    @Override
    public void pay() {
        System.out.println("Paid using Credit Card");
    }
}
class UpiPayment implements Payment {

    @Override
    public void pay() {
        System.out.println("Paid using UPI");
    }
}                   

class PaypalPayment implements Payment {

    @Override
    public void pay() {
        System.out.println("Paid using PayPal");
    }
}

class PaymentFactory {

    public static Payment getPayment(String type) {

        if (type.equalsIgnoreCase("credit")) {
            return new CreditCardPayment();
        }

        else if (type.equalsIgnoreCase("upi")) {
            return new UpiPayment();
        }

        else if (type.equalsIgnoreCase("paypal")) {
            return new PaypalPayment();
        }

        return null;
    }
}

public class Exercise2{
    public static void main(String[] args) {

        Payment payment = PaymentFactory.getPayment("upi");

        payment.pay();
    }
}
