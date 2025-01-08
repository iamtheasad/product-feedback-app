<!-- Multiline Code Block -->

```
<!-- Title -->
 ## Prototype

    <!-- Sub Title -->
    ### Home

    <!-- Sub Title descriptor -->
     <h4> Rest Oeprator </h4>

 <!-- Text Bold -->
 **For Bold Text**

 <!-- For Link -->
 [Create React App](https://github.com/facebook/create-react-app)

 <!-- Single Link Code Block -->
 `npm run build`

```

<h4>Traversy is the mentor of this project</h4>

<h4>This Webiste App Hosted On Netlify</h4>

- Link - https://product-feedback-app-reactjs-rana.netlify.app/

# Run This Project

- Install package for the first time `npm i`
- To Run the project `npm run dev`

# What is the Feedback App About

- You can share your feedback
- You can edit, remove and delete your feedback along with Rating

# Technology Used Here

- `Reactjs`
- `react-router-dom` for creating route
- `json-server` for create local API environment

  - JSON is an acronym for JavaScript Object Notation. JSON Server is a lightweight and easy-to-use Node.js tool that simulates a RESTful API using a JSON file as the data source. With JSON Server, front-end developers can create mock APIs without the need to write complex server-side code, or when a backend API isn't ready yet.

- `framer-motion` for smooth animation
- `concurrently` for run multiple operation at once
- `react-icons` for all kind of icons
- `uuid` for create id for data item

# What we learn from this project

### `json-server` we can use locally for creating api environment

### `useEffect()` hook use for api call

### Data fetching with GET, POST, DELETE and PUT method

### Learn about header and body need for `POST` method

```
  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };
```

### Learn about `JSON.stringify()`

- When sending data to a web server, the data has to be a string.
- Convert a JavaScript object into a string with `JSON.stringify()`.

### Proxy use on `package.json` file for default api url

### `map()` method

### Stored data on global state in `react context`

### Used react context api
