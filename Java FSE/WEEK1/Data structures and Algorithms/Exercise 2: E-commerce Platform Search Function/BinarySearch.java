public class BinarySearch {

    public static Product search(Product[] products, int id) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].productId == id)
                return products[mid];

            else if (products[mid].productId < id)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Watch", "Accessories")
        };

        Product result = BinarySearch.search(products, 104);

        if (result != null)
            System.out.println(result.productName);
        else
            System.out.println("Product not found");
    }
}