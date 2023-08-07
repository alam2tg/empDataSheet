const inquirer = require('inquirer');
const db = require('./config/connection');

//create initial prompt with list of options. 

class qConstructor {
	constructor(type, name, message) {
		this.type = type;
		this.name = name;
		this.message = message;
	}
	introduce() {
		console.log(`Type = ${this.type}, Name = ${this.name}, Message = ${this.message}`)
	}
}
const testQuestion = new qConstructor('type1','name1','message1');
testQuestion.introduce();

function promptOptions() {
	inquirer
	.prompt([
		{
		type: "list",
		name: "options",
		message: "What would you like to do?",
		choices: ["View All Employees","View All Roles","View All Departments", "Add Employee","Update Employee Role","Add Role","Add Department", "Quit"]
		}])
	.then(res => {
		if (res.options === 'View All Employees') {
			viewAllEmployees();
		}
		if (res.options === 'View All Roles') {
			viewAllRoles();
		}
		if (res.options === 'View All Departments') {
			viewAllDepartments();
		}
		if (res.options === 'Add Employees') {
		}
		if (res.options === 'Update Employee Role') {
		}
		if (res.options === 'Add Department') {
		}
		if (res.options === 'Quit') {
		}
	
	
	})
}
promptOptions();

const viewAllEmployees = ()=> {
	db.query('SELECT * FROM employees', (err,data) => {
		if (err) console.log(err)
		console.table(data)
		promptOptions();
	})
}

const viewAllRoles = ()=> {
	db.query('SELECT * FROM roles', (err,data) => {
		if (err) console.log(err)
		console.table(data)
		promptOptions();
	})
}

const viewAllDepartments = ()=> {
	db.query('SELECT * FROM department', (err,data) => {
		if (err) console.log(err)
		console.table(data)
		promptOptions();
	})
}

//query's to db, if err, logs err, display data with console.table. 

const addNewEmployee = ()=> {
	db.query('SELECT * FROM employees', (err,data) => {
		if (err) console.log(err)
		const employee = data.map(employees => {
			return { name: employee.first_name + employee.last_name, value: employee.id }
	})
	})
}