fetch("http://localhost:3001")
    .then((res) => res.json())
    .then((jsonRes) => console.log(jsonRes))