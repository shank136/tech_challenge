# iHeartMedia - Music Lab - Code Challenge

React application has been created that shows a list of songs with their information and metrics displayed.

The app has **2 pages (views)**: A landing page, and a page to show data coming from an API.

- Everything has been written in JavaScript / Node.

### UI Checklist

- React App using functional based components and hooks has been created. No class based components have been created.

- 2 views ( pages ) have been created using React Router.

- A page has been created that renders a table displaying a list songs coming from the API. Each row is a song, each column is a song attribute.

- Styling has been applied to both pages using CSS.

- User can scroll vertically and horizontally through columns and rows that go off screen.

- User is allowed to sort the order of the song rows by the column values. Please click on the headers to sort.

- App is not mobile responsive.

### API Notes

- JSON file has been stored locally and read from the **node.js** lambda function that has been created to serve the frontend with the data using AWS SAM CLI.

- Please note that internal server errors were encountered when reading the file from S3 using an app created using AWS SAM CLI (S3 template). Thank you for your consideration.

- Authentication has not been applied.

- SAM app can be redeployed if required. Please change the URL in React App in case the URL is changed.

- Please let me know if you have any questions.

Thank you,
Shashank
