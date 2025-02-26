# To-Do List Application

This is a simple and interactive To-Do List application built using `HTML`, `CSS`, and `JavaScript`. The app allows users to add, edit, and delete events with associated amounts, calculate the total amounts, and store the data in the browser's local storage for persistence. It includes a checkbox that, when selected, adds the respective event's amount to a `selected total`.

## Developed by

- `Santhosh Pandi` -- **Live Preview** https://santhoshpandi.github.io/To-Do-List

## Acknowledgments

This project was inspired by the [Spendz](https://github.com/Rajas1010/Spendz) application developed by [Rajas1010](https://github.com/Rajas1010). Thank you for sharing this amazing project, which helped guide and motivate the development of this To-Do List application. 


## Screenshots
![sample](https://github.com/user-attachments/assets/c942d8ff-e43e-44a0-a634-7c4569dece31)

![image](https://github.com/user-attachments/assets/0427b1c0-3948-4b2b-9cb7-7c626600ff8c)


## Technologies Used

- **HTML**: For building the basic structure of the app.
- **CSS**: For styling the app and ensuring a clean, user-friendly layout.
- **JavaScript**: For handling the app logic, including adding, deleting, editing events, and calculating totals.
- **LocalStorage API**: For storing and retrieving the event data to persist it across page reloads.


## Features

- **Add Event with Amount**: Allows users to add an event with a name and an associated amount. Each event is displayed with a checkbox.
  
- **Checkbox Selection**: When the checkbox is selected, the associated event amount is added to a separate "selected total" amount.

- **Total Calculation**: The app automatically calculates the total of all amounts listed and the total of the selected amounts when checkboxes are clicked.

- **Edit and Delete Events**: Users can edit the event details or delete them from the list.

- **Local Storage Integration**: All event data is stored in the browser's local storage, so it persists even after a page reload.


## Getting Started

### Prerequisites

- A modern web browser to run the application (Chrome, Firefox, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/santhoshpandi/To-Do-List.git
   ```

2. Navigate to the project directory
   
3. Open `index.html` file to view the app


## Usage

- **Add Event**: Enter an event name and amount, then click "Add" to add it to the list. The event will appear with a checkbox.
- **Checkbox Selection**: Click the checkbox next to an event to include its amount in the "selected total."
- **Edit Event**: Click the "Edit" button next to an event to update its name or amount.
- **Delete Event**: Click the "Delete" button next to an event to remove it from the list.
- **Data Persistence**: The list of events will remain even after a page reload due to the use of local storage.

## Acknowledgments

- **HTML**: Used to create the basic structure of the to-do list.
- **CSS**: Designed to make the user interface clean and visually appealing.
- **JavaScript**: Handles the app's interactive features, such as adding, deleting, and editing events, and calculating totals.
- **Local Storage API**: Ensures data persistence across page reloads.

