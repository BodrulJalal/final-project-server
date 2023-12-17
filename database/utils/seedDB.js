/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      lastname: "Smith",
	  email: "joe.smith@example.com", // Add the email field
  	gpa: 4.0, // Add the gpa field
  	imageUrl: "https://img.freepik.com/premium-vector/back-school-cartoon-boy-student-showing-fingers-up_46527-623.jpg", 
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      lastname: "Johnson",
	  email: "mary.johnson@example.com", // Add the email field
	  gpa: 2.43, // Add the gpa field
	});
	// Create a new student for a campus
	const dummy_student3 = await Student.create({
		firstname: "Jenny",
      lastname: "Jane",
	  email: "jenny.jane@example.com", // Add the email field
	  gpa: 3.1, // Add the gpa field
	  imageUrl: "https://img.freepik.com/premium-vector/student-girl-illustration-cartoon-icon_592929-13.jpg",
	});
	// Create a new student for a campus
	const dummy_student4 = await Student.create({
		firstname: "Jacob",
      lastname: "ErrorPic",
	  email: "jacob.errorpic@example.com", // Add the email field
	  gpa: 3.84, // Add the gpa field
	  imageUrl: "google.com", //error profile pic
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;