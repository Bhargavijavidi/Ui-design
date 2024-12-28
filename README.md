# Pediatrics Department Screen
This project is a React.js application that implements a responsive UI for a Pediatrics Department screen. The screen displays a list of patients in a table format, with clickable patient names and buttons that trigger popups or modals for detailed information.

## Features
- **Responsive Design:**
The UI is fully responsive, ensuring that the screen is accessible on different devices.

- **Dynamic Data Rendering:** Patient data is dynamically rendered in the table using React state or a JSON array.

- **Interactive Components:** Clicking on patient names or action buttons triggers modals with additional details.

- **Reusable Components:**
  - *Header* component for the page title.
  - *Table*  component for rendering the patient data.

  - *Popup/Modal* component for displaying additional information.
## Table Layout
The table includes the following columns:

1. **Patient Name**: A clickable link that opens a popup/modal with patient details.

1. **Contact**: Displays the patient's contact information.

1. **Parent**: Displays the parent's name or contact.

1. **Immediate Actions**: Any immediate tasks or follow-ups.

1. **Due Date**: Displays the upcoming appointment or due date.

1. **Action**: Buttons for various actions (e.g., "Vaccines," "Follow-up," "Lab Tests") that trigger a modal with more details.

## Requirements

- **React.js**: For creating components and managing the state.

- **CSS or UI Library**: Styling with either plain CSS or using a UI framework like Bootstrap or Material-UI.

## Installation
To get started with the project, follow these steps:

1. ### Clone the repository:
   First, clone the repository to your local machine using Git. Replace your-username with your actual GitHub username if needed:
``` bash 

   git clone https://github.com/your-username/Ui-design.git

```
2. ### Navigate to the project directory:
```bash
 cd Ui-design

```
3. ### Install the dependencies:
```bash
 npm install
```
4. ### Start the development server:
```bash 
npm start
```

The app will be available at http://localhost:3000.

## Usage

- Clicking on a **Patient**  Name will open a modal displaying the patient's details.

- The **Action Buttons** in the "Action" column will open modals specific to the action chosen, such as "Vaccines" or "Lab Tests."

- All data in the table is populated dynamically from a sample data set.

## Sample Data

The Sample datafor the the table is structured as follows

<<<<<<< HEAD
``` {
=======
```
{
>>>>>>> 5b5f958343365919d9cfc524bbbe340853b5b289
    id: 1,
    name: 'John Doe',
    contact: '123-456-7890',
    parent: 'Jane Doe',
    immaction:"Vaccine 1 overdue Followup pending lab report pending",
    dueDate: '2024-12-31'
  },
  {
    id: 2,
    name: 'Alice Smith',
    contact: '987-654-3210',
    parent: 'Bob Smith',
    immaction:"Vaccine 1 overdue Followup pending lab report pending",
    dueDate: '2024-12-31'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    contact: '555-123-4567',
    parent: 'Sarah Johnson',
    immaction:"Vaccine 1 overdue Followup pending lab report pending",
    dueDate: '2024-10-15'
  },
{
    id: 4,
    name: 'Emily Davis',
    contact: '444-555-6666',
    parent: 'James Davis',
    immaction: 'Vaccine 2 overdue Followup pending lab report pending',
    dueDate: '2024-11-20'
},
{
    id: 5,
    name: 'David Brown',
    contact: '777-888-9999',
    parent: 'Laura Brown',
    immaction: 'Vaccine 3 overdue Followup pending lab report pending',
    dueDate: '2024-09-10'
}
 ```
<<<<<<< HEAD

=======
>>>>>>> 5b5f958343365919d9cfc524bbbe340853b5b289
## Components

1. ### Header Component
   Displays the page title "Pediatrics Department Screen."

2. ### Table Component
    Renders the table layout and populates the rows using dynamic data from the state or a JSON array.

3. ### Popup Component 
    Handles the display of patient details and action-specific information when triggered by the user.

## Styling

The application uses **Bootstrap** for responsive design and layout, along with custom **CSS** for additional styling. The table headers have a background color for better readability, and elements are aligned and styled to match the provided design.



