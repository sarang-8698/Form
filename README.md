# Create an Account Form

This repository contains a React-based registration form that allows users to create an account by entering their name, email, password, and confirming their password. The form includes client-side validation for password strength and displays error messages for invalid inputs. On successful submission, a success toast notification is shown.

## Features

- **React Functional Components**: The application uses functional components with hooks (`useState`) for state management.
- **Form Validation**: Includes client-side validation for password strength, ensuring it meets the specified criteria.
- **Error Handling**: Displays error messages for invalid inputs, such as mismatched passwords or passwords that do not meet the requirements.
- **Toast Notifications**: Utilizes `react-toastify` to display a success message upon successful form submission.
- **Reusable User Component**: A separate `User` component is used to display user details upon successful registration.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **React Toastify**: Library for displaying toast notifications.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repository-name
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Components

- **App**: The main component that renders the form and handles state management for form inputs and error messages.
- **User**: A child component that displays the details of successfully registered users.

## Form Validation Rules

1. **Password Length**: Must be at least 8 characters long.
2. **Special Character**: Must contain at least one special character.
3. **Uppercase Letter**: Must contain at least one uppercase letter.
4. **Lowercase Letter**: Must contain at least one lowercase letter.
5. **Digit**: Must contain at least one numeric digit.
6. **Password Match**: `Password` and `Confirm Password` fields must match.

## Toast Notifications

- A success toast notification is displayed when the form is submitted successfully.
- The toast notification disappears automatically after 5 seconds.

## Future Enhancements

- Add server-side validation and integration with a backend API for user registration.
- Improve the user experience with enhanced form styling and animations.
- Implement password strength indicator.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Note**: Replace `yourusername` and `your-repository-name` with your actual GitHub username and repository name before using this README file.
