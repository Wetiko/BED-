# BED Notes for MST 

## Installation
- Follow these steps to clone this repository on your local machine,
```bash
git clone https://github.com/Wetiko/BEDnotes
```


# General notes

# MYSQL Syntax

Here's a summary of the syntax and what each element does in MySQL:

- **SELECT**: Retrieves data from one or more tables.
- **FROM**: Specifies the table or tables from which to retrieve the data.
- **WHERE**: Filters rows based on specified conditions.
- **JOIN**: Combines rows from multiple tables based on a related column between them.
- **GROUP BY**: Groups the result set based on one or more columns.
- **ORDER BY**: Sorts the result set in ascending or descending order based on one or more columns.
- **INSERT INTO**: Inserts data into a table.
- **UPDATE**: Modifies existing data in a table.
- **DELETE FROM**: Deletes rows from a table.
- **CREATE DATABASE**: Creates a new database.
- **CREATE TABLE**: Creates a new table within a database.
- **ALTER TABLE**: Modifies an existing table structure.
- **DROP TABLE**: Deletes a table from the database.
- **COMMIT**: Saves the changes made to the database.
- **ROLLBACK**: Reverts the changes made to the database since the last COMMIT.
- **DISTINCT**: Specifies that only unique values should be returned in the result set.
- **LIMIT**: Limits the number of rows returned in the result set.
- **OFFSET**: Specifies the starting point of the result set, useful for pagination.
- **NULL**: Represents a missing or unknown value in a column.
- **IS NULL**: Checks if a column value is NULL.
- **IS NOT NULL**: Checks if a column value is not NULL.
- **LIKE**: Performs pattern matching using wildcard characters (% and _).
- **IN**: Checks if a value matches any value in a list or subquery.
- **BETWEEN**: Checks if a value is within a range.
- **AS**: Renames a column or table using an alias.
- **HAVING**: Filters the result set based on a condition after grouping.
- **CASE**: Performs conditional logic within a SELECT statement.
- **UNION**: Combines the result sets of two or more SELECT statements.
- **UNION ALL**: Similar to UNION, but includes duplicate rows.
- **EXISTS**: Checks if a subquery returns any rows.
- **NOT EXISTS**: Checks if a subquery does not return any rows.
- **INDEX**: Improves the performance of queries by creating an index on one or more columns.
- **PRIMARY KEY**: A unique identifier for a row in a table.
- **FOREIGN KEY**: Establishes a relationship between two tables based on a column's value.
- **INNER JOIN**: Returns only the matching rows from both tables.
- **LEFT JOIN**: Returns all rows from the left table and the matching rows from the right table.
- **RIGHT JOIN**: Returns all rows from the right table and the matching rows from the left table.
- **FULL JOIN**: Returns all rows from both tables, including unmatched rows.
- **TRIGGER**: Defines a set of actions that are automatically executed in response to a specific database event.
- **VIEW**: A virtual table derived from the result of a query, which can be used like a regular table.
- **STORED PROCEDURE**: A named collection of SQL statements that can be stored in the database and executed later.
- **Aggregate Functions**: Functions like `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX` that perform calculations on a set of values and return a single result.
- **Subqueries**: Queries nested within another query, allowing you to retrieve data from one query to use in another.
- **CASE Statements**: Conditional statements that allow you to perform different actions based on specified conditions.
- **Stored Functions**: User-defined functions that encapsulate a set of SQL statements and can be called like built-in functions.
- **Stored Procedures**: Named collections of SQL statements that can include control structures and parameters, providing more complex functionality than functions.
- **Triggers**: Database objects that execute automatically in response to specific events, such as inserts, updates, or deletes, on a table.
- **Transactions**: A set of SQL statements that are executed as a single unit of work, ensuring that either all statements are committed (saved) or rolled back (undone) if any statement fails.
- **Index**: A data structure that improves the speed of data retrieval operations by enabling quick access to specific columns or combinations of columns.
- **Constraints**: Rules applied to columns or tables to enforce data integrity, such as primary keys, foreign keys, unique keys, and check constraints.
- **Views**: Virtual tables derived from the result of a query, which can be queried like regular tables, providing an additional layer of abstraction and security.
- **GRANT**: Allows users to grant specific privileges to other users, controlling access to databases, tables, or columns.
- **REVOKE**: Allows users to revoke previously granted privileges from other users.
- **User Management**: MySQL provides commands to create, modify, and delete user accounts, allowing you to manage user authentication and access privileges.
- **Backup and Restore**: MySQL provides tools and commands to create backups of databases or tables, as well as restore them when needed.

These elements form the core syntax of MySQL and are used to perform various operations such as retrieving, inserting, updating, and deleting data, as well as creating and altering database structures.