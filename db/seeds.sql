INSERT INTO department(name)
VALUES ("Development"),("Research"),("Human Resources"),("DepartmentFuture")

INSERT INTO role(title, salary, department_id)
VALUES ('Process Engineer', 50000, 1), 
('Head Process Engineer', 80000, 1),

('Genetic Research Scientist', 90000, 2),
('Head Research Scientists', 180000, 2),

('Human Resource Development', 70000, 3),
('Head of Human Resources', 140000, 3),

('Future Role', 70000, 4),
('Head of Future Role', 150000, 4)

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Aaron', 'Lam', 2, NULL),
('Josh', 'Jokom', 1, 1),

('Chase', 'Walker',4, NULL ),
('Chad', 'Walker', 3, 3),

