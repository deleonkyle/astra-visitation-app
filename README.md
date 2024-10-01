# Astra Visitation App

## Description

The Astra Visitation App is designed to manage and track visitations efficiently. This web application facilitates the scheduling and tracking of visits, providing an intuitive user interface for both users and administrators. The goal is to streamline the visitation process by offering easy-to-use features for booking, monitoring, and reporting visitations.

## Features

- User registration and authentication
- Schedule and manage visitations
- Track history of visitations
- Administrative controls for managing users and visits
- Notifications for upcoming visits
- Responsive design for mobile and desktop users

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript (Bootstrap)
- **Backend:** Flask (Python)
- **Database:** SQLite / MySQL (depending on your setup)
- **Version Control:** Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deleonkyle/astra-visitation-app.git
   cd astra-visitation-app
   ```

2. Set up a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\\Scripts\\activate`
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```bash
   flask db init
   flask db migrate
   flask db upgrade
   ```

5. Run the application:
   ```bash
   flask run
   ```

6. Access the app by navigating to `http://127.0.0.1:5000/` in your browser.

## Usage

1. Register as a user or log in with an existing account.
2. Once logged in, you can schedule a visitation through the dashboard.
3. Administrators can manage users, monitor visitations, and generate reports.
4. Users receive notifications for upcoming visitations.
5. View, modify, or cancel upcoming visitations.

## Project Structure

- `app/` - Contains the main Flask application.
- `templates/` - HTML templates for rendering pages.
- `static/` - Static assets like CSS, JavaScript, and images.
- `migrations/` - Database migration files.
- `tests/` - Unit tests for the application.

## Contributing

If you wish to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, you can reach the repository owner at deleonkylekristopher@gmail.com.
