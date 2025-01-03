 # Book Library

## Description:

 The goal is to design and implement a Book Library application using HTML, CSS, JavaScript, and React (with optional Tailwind CSS). The application will allow users to search for books and view detailed information about them using the Open Library API.

This project will help you practice integrating external APIs, handling user input, managing state, and building a responsive and visually appealing user interface. It will simulate a real-world development environment, providing valuable experience in frontend web development and deploying applications to the web.

## Functional Requirements:
- Fetch book data from a **public books API (Open Library API)**. 

    Use the Open Library API to fetch book data based on user search queries.
    Display a list of books that match the search criteria, showing key information such as

    **Book Cover:** A thumbnail image of the book cover.

    **Title:** The title of the book.

    **Author(s):** The author(s) of the book.

    **Publisher:** The name of the publisher (if available).

- Display **Book details view**.

    When a user clicks on a book from the list, display a detailed view with additional information, including

    **Description:** A summary or description of the book’s content.
    **Publication Date:** The date the book was published.

    **ISBN:** The ISBN number of the book.

    **Number of Pages:** The total number of pages in the book.

    **Subjects:** Categories or genres the book belongs to (e.g., Fiction, Science, History).

- **Search Functionality:**

    Implement a search bar that allows users to search for books by title, author, or keywords.
    Handle cases where no books match the search query by displaying a user-friendly message.

- **Responsive design**

    Use Tailwind CSS to create a responsive design that adapts to different screen sizes (e.g., desktop, tablet, mobile).
    Ensure the book list and details view are easy to navigate and visually appealing on all devices.

- **Error handling**


    Implement error handling for scenarios such as network issues, invalid API responses, or no search results.
    Display user-friendly messages or alerts when errors occur.


- Deploy the application on a platform like **Netlify** or **Vercel**.

## Technical Requirements:

   - **Project Setup**
        Set up a React project using tools like vite or configure a custom setup.
        Install and configure Tailwind CSS for styling, or use another CSS framework if preferred.

   - **API Integration**
        Use fetch or axios to request data from the Open Library API and handle asynchronous data fetching.
        Display the fetched book data in a structured and visually appealing format.

   - **User Interface Components:**
        Create reusable components for the book list and book details, such as SearchBar, BookCard, and BookDetails.
        Design a cohesive layout using TailwindCSS, ensuring consistency in colors, typography, and spacing.

   - **State Management:**
        Use React’s state management hooks (useState and useEffect) to handle data fetching, user input, and UI updates.
        Optionally, explore more advanced state management tools like Zustand, Redux or mobx-state-tree if the application grows in complexity.

   - **Deployment:**
        Deploy the completed application on a free hosting platform like Netlify or Vercel.
        Ensure the application is accessible and performs well in the deployed environment.
        Share the deployment link as part of your project submission.

## Stretch Goals (Optional):

    User Authentication:
        Implement user authentication, allowing users to log in and save their favorite books to a personal reading list.

    Reading List and Progress Tracking:
        Allow users to add books to a reading list and track their reading progress, marking books as “Currently Reading,” “Completed,” or “Want to Read.”

    Book Reviews and Ratings:
        Implement a feature that allows users to leave reviews and ratings for books and view reviews left by others.

    Book Categories and Genres:
        Add predefined categories (e.g., Fiction, Non-Fiction, Science, History) and allow users to browse books by these categories.

    Dark Mode:
        Add a dark mode feature to provide a better user experience in low-light conditions.

## API Usage Examples:

- Search for Books by Title or Author:
        Endpoint: https://openlibrary.org/search.json?title=harry+potter (for title)
        Endpoint: https://openlibrary.org/search.json?author=tolkien (for author)
        Returns a list of books matching the search query.

- Fetch Book Details by ISBN:
        Endpoint: https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
        Returns detailed information about the book with the specified ISBN.

- Fetch Book Covers:
        Use the cover parameter in the book data to display the cover image.
        Example URL for cover images: https://covers.openlibrary.org/b/id/OLID-L.jpg (replace OLID-L with the cover ID).


## Installation
1. Clone the repository
    ```bash
    git clone https://github.com/Patriciakev-ctrl/Book-library-FE-capstone.git
    ```
2. Navigate to the project directory
    ```bash
    cd Book-library-FE-capstone
    ```
3. Install dependencies
    ```bash
    npm install
    ```

    ## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

