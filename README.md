<h4>Traversy is the mentor of this project</h4>

<h4>This Webiste App Hosted On Netlify</h4>

- Link - https://product-feedback-app-reactjs-rana.netlify.app/

- Using json-server package for create api environment
- You can add, delete and update feedback

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
