const inquirer = require('inquirer');
const db = require('./config/connection');

//create initial prompt with list of options.

function promptOptions() {
	inquirer
		.prompt(
			{
				type: "list",
				name: "options",
				message: "What would you like to do?",
				choices: [
					"View All Employees",
					"View All Roles",
					"View All Departments",
					"Add Employee",
					"Add Role",
					"Add Department",
					"Update Employee Role",
				]
			}
		)
		.then((res) => {
			if (res.options === "View All Employees") {
				viewAllEmployees()
			}
			if (res.options === "View All Roles") {
				viewAllRoles()
			}
			if (res.options === "View All Departments") {
				viewAllDepartments()
			}
			if (res.options === "Add Employee") {
				addEmployee()
			}
			if (res.options === "Add Role") {
				addRole()
			}
			if (res.options === "Add Department") {
				addDepartment()
			}
			if (res.options === "Update Employee Role") {
				updateEmployee()
			}
		})	
}
promptOptions()

const viewAllEmployees = () => {
	db.query('SELECT * FROM employee', (err, data) => {
		if (err) console.log(err)
		console.table(data)
		promptOptions();
	})
};

const viewAllRoles = () => {
	db.query('SELECT * FROM roles', (err, data) => {
		if (err) console.log(err)
		console.table(data)
		promptOptions()
	})
};

const viewAllDepartments = () => {
	db.query('SELECT * FROM department', (err, data) => {
		if (err) console.log(err)
		console.table(data)
		promptOptions();
	})
};

//query's to db, if err, logs err, display data with console.table.

const addEmployee = () => {
	db.query('SELECT * FROM employee', (err, data) => {
		if (err) console.log(err)
		const employees = data.map(employee => {
			return {
				name: employee.first_name + ' ' + employee.last_name,
				value: employee.id,
			}
		})
		employees.push({ name: 'no manager', value: null });
		db.query('SELECT * FROM roles', (err, data) => {
			if (err) console.log(err)
			const roles = data.map(role => {
				return { name: role.title, value: role.id }
			});
			inquirer
				.prompt([
					{
						type: "input",
						name: "firstName",
						message: "What is the employee's first name?",
					},{
						type: "input",
						name: "lastName",
						message: "What is the employee's last name?",
					},{
						type: "list",
						name: "roleId",
						message: "What is their role?",
						choices: roles
					},{
						type: "list",
						name: "managerId",
						message: "Does this employee have a manager?",
						choices: employees
					}
				])
				.then(res => {
					db.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) values(?, ?, ?, ?)',
						[res.firstName, res.lastName, res.roleId, res.managerId], (err, data) => {
							if (err) console.log(err)
							console.table(data)
							promptOptions();
						})
				})
		})
	})
};

// add role... select department data first as it's data is required to properly add a role. first query department, .then query roles, INSERT INTO to add.
const addRole = () => {
	db.query('SELECT * FROM department', (err, data) => {
		 if (err) console.log(err)
		 const departments = data.map(department => {
			  return { name: department.name, value: department.id }
		 })
		 inquirer.prompt([
			  {
					type: 'input',
					name: 'title',
					message: 'What is the title of the role?'
			  },
			  {
					type: 'input',
					name: 'salary',
					message: 'What is the salary of this role?'
			  },

			  {
					type: 'list',
					name: 'departmentId',
					message: 'What department does this role belong to?',
					choices: departments
			  }])
		.then(res => {
			db.query('INSERT INTO roles(title, salary, department_id) values(?, ?, ?)', [res.title, res.salary, res.departmentId], (err, data) => {
					if (err) console.log(err)
					console.table(data)
					promptOptions();
			})
		})
	})
};

//similar with role, but easier because the department table is independent.
const addDepartment = () => {
	inquirer.prompt([
		 {
			  type: "input",
			  name: "newDepartment",
			  message: "Enter the new department into database."
		 }])
	.then(res => {
		 db.query("INSERT INTO department(name) values(?)", [res.newDepartment], (err, data) => {
			  if (err) console.log(err)
			  console.table(data)
			  console.log(`New department ${res.newDepartment} has been added`)
			  promptOptions();
		 })
	})
};