CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10,2),
    department VARCHAR(50),
    experience INT
);

INSERT INTO employees VALUES
(1, 'Alice', 45000, 'HR', 2),
(2, 'Bob', 75000, 'IT', 5),
(3, 'Charlie', 120000, 'Finance', 10),
(4, 'David', 60000, 'IT', 3),
(5, 'Eva', 30000, 'HR', 1);

#Exercise 1

SELECT
    name,
    salary,
    CASE
        WHEN salary >= 100000 THEN 'High'
        WHEN salary >= 50000 THEN 'Medium'
        ELSE 'Low'
    END AS Salary_Category
FROM employees;

#Check experience
SELECT
    name,
    experience,
    CASE
        WHEN experience >= 5 THEN 'Senior'
        ELSE 'Junior'
    END AS Employee_Level
FROM employees;

#Bonus Calculation

SELECT
    name,
    salary,
    CASE
        WHEN salary > 100000 THEN salary * 0.20
        WHEN salary > 50000 THEN salary * 0.10
        ELSE salary * 0.05
    END AS Bonus
FROM employees;