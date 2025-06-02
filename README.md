# 📚 Library Management System (LMS)

A complete web-based Library Management System designed to automate and streamline library operations such as managing books, members, issuing/returning books, and generating reports.

## 🚀 Features

- 📖 Add, update, delete, and search books
- 👤 Manage student/member records
- 🔄 Issue and return books with date tracking
- 📅 Late return fine calculation
- 📊 Generate reports on issued/returned books
- 🔒 Authentication for admin and users
- 🔍 Search functionality with filters
- 🖥️ User-friendly dashboard and UI

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, Bootstrap, JavaScript, jQuery
- **Backend:** JSP (Java Server Pages), Servlets
- **Database:** MySQL
- **Others:** JDBC, Font Awesome

## 📁 Project Structure

```
LMS/
├── src/
│ ├── controller/ # Servlets and controllers
│ ├── dao/ # Database access logic
│ ├── model/ # JavaBeans or POJOs
├── WebContent/
│ ├── css/ # Stylesheets
│ ├── js/ # JavaScript and jQuery files
│ ├── images/ # UI assets
│ ├── pages/ # JSP pages
│ └── index.jsp # Entry point
├── DB/ # SQL scripts for DB setup

```


## 🔧 How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/lms.git


```
Import the project into Eclipse/NetBeans as a Dynamic Web Project.

Create the MySQL database:

Import the SQL script from the DB/ folder.

Update the DB connection parameters in your DBConnection.java.

Deploy the project to a server like Apache Tomcat.

Visit http://localhost:8080/lms/ in your browser.

```

