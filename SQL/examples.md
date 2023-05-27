# Select Statements

Here are several variations of SELECT statements in MySQL:

1. Basic SELECT statement:
   ```sql
   SELECT column1, column2 FROM table_name;
   ```

2. Select all columns:
   ```sql
   SELECT * FROM table_name;
   ```

3. Select with a WHERE clause:
   ```sql
   SELECT column1, column2 FROM table_name WHERE condition;
   ```

4. Select with multiple conditions:
   ```sql
   SELECT column1, column2 FROM table_name WHERE condition1 AND condition2;
   ```

5. Select with logical operators:
   ```sql
   SELECT column1, column2 FROM table_name WHERE condition1 OR condition2;
   ```

6. Select with sorting (ascending order):
   ```sql
   SELECT column1, column2 FROM table_name ORDER BY column1 ASC;
   ```

7. Select with sorting (descending order):
   ```sql
   SELECT column1, column2 FROM table_name ORDER BY column1 DESC;
   ```

8. Select with limiting the number of rows:
   ```sql
   SELECT column1, column2 FROM table_name LIMIT 10;
   ```

9. Select with combining columns:
   ```sql
   SELECT CONCAT(column1, ' ', column2) AS full_name FROM table_name;
   ```

10. Select with aggregate functions:
    ```sql
    SELECT COUNT(column1) AS total_count FROM table_name;
    ```

11. Select with grouping:
    ```sql
    SELECT column1, COUNT(*) AS count FROM table_name GROUP BY column1;
    ```

12. Select with joining tables:
    ```sql
    SELECT t1.column1, t2.column2 FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id;
    ```

13. Select with joining tables and a WHERE clause:
    ```sql
    SELECT t1.column1, t2.column2 FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id WHERE t1.column3 = 'value';
    ```

14. Select with subquery:
    ```sql
    SELECT column1 FROM table_name WHERE column2 IN (SELECT column3 FROM another_table);
    ```

15. Select with wildcard matching:
    ```sql
    SELECT column1 FROM table_name WHERE column2 LIKE '%value%';
    ```

16. Select with NULL values:
    ```sql
    SELECT column1 FROM table_name WHERE column2 IS NULL;
    ```

17. Select with aliasing column names:
    ```sql
    SELECT column1 AS alias1, column2 AS alias2 FROM table_name;
    ```

18. Select with conditional statements:
    ```sql
    SELECT column1, CASE WHEN condition THEN value1 ELSE value2 END AS result FROM table_name;
    ```

19. Select with calculated columns:
    ```sql
    SELECT column1, column2, (column1 + column2) AS sum FROM table_name;
    ```

20. Select with date and time functions:
    ```sql
    SELECT column1, DATE_FORMAT(column2, '%Y-%m-%d') AS formatted_date FROM table_name;
    ```

21. Select with aggregate functions and grouping:
    ```sql
    SELECT column1, COUNT(column2) AS count FROM table_name GROUP BY column1;
    ```

22. Select with aggregate functions and filtering:
    ```sql
    SELECT column1, AVG(column2) AS average FROM table_name GROUP BY column1 HAVING average > 50;
    ```

23. Select with joining multiple tables:
    ```sql
    SELECT t1.column1, t2.column2, t3.column3 FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id INNER JOIN table3 t3 ON t2.id = t3.id;
    ```

24. Select with subquery and comparison operators:
    ```sql
    SELECT column1 FROM table_name WHERE column2 > (SELECT AVG(column3) FROM another_table);
    ```

25. Select with case-insensitive matching:
    ```sql
    SELECT column1 FROM table_name WHERE column2 COLLATE utf8_general_ci = 'value';
    ```

26. Select with conditional ordering:
    ```sql
    SELECT column1, column2 FROM table_name ORDER BY CASE WHEN column1 = 'value' THEN 1 ELSE 2 END;
    ```

27. Select with distinct values:
    ```sql
    SELECT DISTINCT column1 FROM table_name;
    ```

28. Select with limiting results based on a condition:
    ```sql
    SELECT column1 FROM table_name WHERE condition LIMIT 5;
    ```

29. Select with joining tables using different join types:
    ```sql
    SELECT column1, column2 FROM table1 LEFT JOIN table2 ON table1.id = table2.id;
    ```

30. Select with filtering based on a range of values:
    ```sql
    SELECT column1 FROM table_name WHERE column2 BETWEEN value1 AND value2;
    ```

31. Select with grouping and ordering:
    ```sql
    SELECT column1, COUNT(column2) AS count FROM table_name GROUP BY column1 ORDER BY count DESC;
    ```

32. Select with joining tables and selecting specific columns:
    ```sql
    SELECT t1.column1, t2.column2 FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id;
    ```

33. Select with joining tables and selecting columns with aliases:
    ```sql
    SELECT t1.column1 AS alias1, t2.column2 AS alias2 FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id;
    ```

34. Select with joining tables and filtering using multiple conditions:
    ```sql
    SELECT t1.column1, t2.column2 FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id WHERE t1.column3 = 'value' AND t2.column4 > 100;
    ```

35. Select with joining tables and aggregating data:
    ```sql
    SELECT t1.column1, SUM(t2.column2) AS total_sum FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id GROUP BY t1.column1;
    ```

36. Select with joining tables and ordering by a column from the joined table:
    ```sql
    SELECT t1.column1, t2.column2 FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id ORDER BY t2.column2 DESC;
    ```

37. Select with joining tables and including NULL values from the joined table:
    ```sql
    SELECT t1.column1, t2.column2 FROM table1 t1 LEFT JOIN table2 t2 ON t1.id = t2.id;
    ```

38. Select with joining tables and excluding unmatched rows:
    ```sql
    SELECT t1.column1, t2.column2 FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id WHERE t2.column2 IS NOT NULL;
    ```

39. Select with self-join to find related records:
    ```sql
    SELECT t1.column1, t2.column2 FROM table_name t1 INNER JOIN table_name t2 ON t1.related_id = t2.id;
    ```

40. Select with combining multiple conditions using parentheses:
    ```sql
    SELECT column1, column2 FROM table_name WHERE (condition1 OR condition2) AND condition3;
    ```

41. Select with a subquery in the WHERE clause:
    ```sql
    SELECT column1 FROM table_name WHERE column2 IN (SELECT column3 FROM another_table WHERE condition);
    ```

42. Select with a subquery in the FROM clause:
    ```sql
    SELECT t1.column1, t2.column2 FROM (SELECT column1 FROM table1 WHERE condition) AS t1 INNER JOIN table2 t2 ON t1.column1 = t2.column1;
    ```

43. Select with using aliases for table names:
    ```sql
    SELECT t1.column1, t2.column2 FROM table1 AS t1 INNER JOIN table2 AS t2 ON t1.id = t2.id;
    ```

44. Select with performing arithmetic operations:
    ```sql
    SELECT column1, column2 * 1.5 AS multiplied_value FROM table_name;
    ```

45. Select with using the LIKE operator for pattern matching:
    ```sql
    SELECT column1 FROM table_name WHERE column2 LIKE 'prefix%';
    ```
