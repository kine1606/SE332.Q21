const endpoint = "https://countries.trevorblades.com/";

const query = `
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      capital
    }
  }
`;

async function getCountry(countryCode) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: query,
        variables: {
          code: countryCode
        }
      })
    });

    const result = await response.json();

    console.log("Country code:", countryCode);
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

getCountry("VN");