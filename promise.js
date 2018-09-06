// https://git.easyfairs.cloud/snippets/7
// Exercise 1 + 3
function fetchPost(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    console.log('There is an error 😱: ' + error);
    return null
  });
}

// Exercise 2
function fetchFoo() {
  const prom = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({"foo": "bar"})
    }, 1000)
  })
  
  return prom
}
s
// Exercise 4
function fetchMultiple(ids) {
  var promises = ids.map(function(id){
    return this.fetchPost(id)
  })
  console.log(promises)
  return Promise.all(promises).then(function(results) {
    console.log(results)
    return results
  })
}

// Exercise 5
doPost(string) {
  return axios.post(
  `https://fetch-script-server.nodejs.easyfairs.cloud/script/${string}`,
  null, { headers: { 'Private-Token': 'the-token' } }
  )
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    console.log('There is an error 😱: ' + error);
    return null
  });
}

fetchSeries() {
  
}