// Function to fetch data from API
const fetchData = () => {
    setIsLoading(true);
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        limit: 10,
        offset: 0
      })
    })
    .then(response => response.json())
    .then(data => {
      // Make sure the response data is an array
      if (Array.isArray(data)) {
        setJobsData(data); // Store fetched data in state
      } else {
        setError(new Error("Invalid data format")); // Set error if data format is incorrect
      }
      setIsLoading(false);
    })
    .catch(error => {
      setError(error);
      setIsLoading(false);
    });
  };
  