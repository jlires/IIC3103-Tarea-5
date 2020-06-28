const API2 = 'https://rickandmortyapi.com/graphql';

export const searchEpisode = (filter, page) => {
  let parameters = `page: ${page}`;
  if (filter) parameters = parameters + `, filter: {name:"${filter}"}`;

  return(
    fetch(API2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            episodes(${parameters}) {
              info {
                count
                pages
              }
              results {
                id
                name
                air_date
                episode
                characters {
                  id
                  name
                }
              }
            }
          }
        `
      }),
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        //throw new Error("404");
      }
      else {
        return response.json(); }
    })
  )
}

export const searchCharacter = (filter, page) => {
  let parameters = `page: ${page}`;
  if (filter) parameters = parameters + `, filter: {name:"${filter}"}`;

  return(
    fetch(API2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query {
          characters(${parameters}) {
            info {
              count
              pages
            }
            results {
              id
              name
              status
              species
              type
              gender
              origin {
                name
                id
              }
              location {
                  name
                  id
              }
              image
              episode {
                id
              }
            }
          }
        }
        `
      }),
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        //throw new Error("404");
      }
      else { return response.json(); }
    })
  )
}

export const searchLocation = (filter, page) => {
  let parameters = `page: ${page}`;
  if (filter) parameters = parameters + `, filter: {name:"${filter}"}`;

  return(
    fetch(API2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query {
          locations(${parameters}) {
            info {
              count
              pages
            }
            results {
              id
              name
              type
              dimension
            }
          }
        }
        `
      }),
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        //throw new Error("404");
      }
      else { return response.json(); }
    })
  )
}

export const getCharacter = (id) => {
  return(
    fetch(API2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query {
          character(id:${id}) {
            id
            name
            status
            species
            type
            gender
            origin {
              name
              id
            }
            location {
                name
                id
            }
            image
            episode {
              id
              name
            }
          }
        }
        `
      }),
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        //throw new Error("404");
      }
      else { return response.json(); }
    })
  )
}

export const getEpisode = (id) => {
  return(
    fetch(API2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query {
          episode(id:${id}) {
            id
            name
            air_date
            characters {
              id
              name
            }
          }
        }
        `
      }),
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        //throw new Error("404");
      }
      else { return response.json(); }
    })
  )
}

export const getLocation = (id) => {
  return(
    fetch(API2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query {
          location(id:${id}) {
            id
            name
            type
            dimension
            residents {
              id
              name
            }
          }
        }
        `
      }),
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        //throw new Error("404");
      }
      else { return response.json(); }
    })
  )
}
