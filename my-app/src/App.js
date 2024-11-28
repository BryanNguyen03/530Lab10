import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          For this lab, I decided to go with ReactJS as my framework. For this
          problem, I set up React using the following commands:
          <br />
          npm install -g create-react-app
          <br />
          npx create-react-app my-app
          <br />
          This created the reactJS app from there I can cd into my-app and then
          build and start the application:
          <br />
          npm run build
          <br />
          npm start
        </p>

        <p>
          In terms of working on/editing the application, App.js is loaded onto
          index.js and when run using npm start is shown on localhost:3000. In
          order to update the application from the default display, I changed
          the content on App.js to display what I wanted. Overall the
          difficulties of the React framework were understanding what React
          actually is and all the files that come with creating a React
          application. For example, there are index.js, App.js, JSON packages,
          and node modules and how they work together. My solution to this was
          watching video tutorials and playing around with the components to get
          a better understanding of React's functionality. Aside from React's
          functionality, I decided to host this on git hub's git pages so
          another difficulty was figuring out how to properly add the project
          onto the repo using .gitignore and then hosting it.
        </p>
      </header>
    </div>
  );
}

export default App;
