# The Wild Oasis

React app to manage hotel bookings and cabins/rooms. Watch live <a href="https://ayush-wild-oasis.netlify.app/" target="_blank">here</a> ➡️

<br />

## Key Features

-   Authenticated users can log in with their credentials. (For preview: `ayush@example.com, 12345678`)
-   New users can be signed up only by authenticated users. They also need to confirm their mail to start using the application.
-   Users can change their profile picture, name & password.
-   Users can define a few application-wide settings such as breakfast price, etc.
-   Users can check-in, check-out or delete a booking.
-   Users can add, update or delete a cabin/room.
-   Cabins and bookings can be sorted & filtered and are paginated.
-   Dashboard with charts to show statistics on recent bookings, sales, check ins, and occupancy rate. This can also be filtered by days.
-   Dark/light mode with the ability to automatically detect user's system settings.

<br />

## Tools and Packages

-   **Build Tool:** [Vite](https://vitejs.dev/) for efficient project building.
-   Supabase for backend (data storage, CRUD operations, authentication & authorization).
-   React Query for remote state management & data fetching.
-   Context API for UI state management.
-   React Router to implement routing.
-   Styled Components for styling.
-   React Hook Form for managing forms.
-   Recharts library for charts to show statistics.
-   `react-hot-toast` for toast notifications.
-   `react-icons` for UI icons.
-   `date-fns` for date calculations.

<br />

## Project Setup

Make sure `node` and `npm` are installed. Run the following command in the terminal:

1. `npm i` or `npm install`
2. `npm run dev`
