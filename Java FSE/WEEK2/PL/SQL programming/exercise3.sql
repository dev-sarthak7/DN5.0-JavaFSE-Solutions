CREATE TABLE Employee (
    emp_id NUMBER PRIMARY KEY,
    emp_name VARCHAR2(50),
    salary NUMBER,
    department VARCHAR2(30)
);

CREATE OR REPLACE PROCEDURE AddEmployee(
    p_id NUMBER,
    p_name VARCHAR2,
    p_salary NUMBER,
    p_dept VARCHAR2
)
AS
BEGIN
    INSERT INTO Employee
    VALUES(p_id, p_name, p_salary, p_dept);

    COMMIT;
END;
/

EXEC AddEmployee(101, 'Rahul', 50000, 'IT');

CREATE OR REPLACE PROCEDURE UpdateSalary(
    p_id NUMBER,
    p_salary NUMBER
)
AS
BEGIN
    UPDATE Employee
    SET salary = p_salary
    WHERE emp_id = p_id;

    COMMIT;
END;
/
EXEC UpdateSalary(101, 60000);

CREATE OR REPLACE PROCEDURE DeleteEmployee(
    p_id NUMBER
)
AS
BEGIN
    DELETE FROM Employee
    WHERE emp_id = p_id;

    COMMIT;
END;
/