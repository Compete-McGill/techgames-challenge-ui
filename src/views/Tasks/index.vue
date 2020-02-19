<template>
    <v-container>
      <h1 class="display-3 grey--text my-5">Tasks</h1>
      <br />
      <br />
      <div class="title grey--text">
        Follow the guidelines below while designing your API
      </div>
      <br />
      <br />
  
      <!-- <h2 class="subtitle border-bottom black--text">Table of Contents</h2> -->
      <span class="border-bottom border-dark"></span>
  
      <div id="table-of-contents"> 
      <h3 class="title">Table of contents</h3>
        <v-divider></v-divider>
        <!-- Need to inser actual table of contents -->
        <!-- <v-btn v-click="$vuetify.goTo('#liveness')"></v-btn> -->
        <ul>
          <li class="title"><a style="text-decoration:none" href="#liveness">Liveness</a></li>
          <li class="title"><a style="text-decoration:none" href="#create-article">Create articles</a></li>
          <li class="title"><a style="text-decoration:none" href="#get-all-articles">Get all articles</a></li>
          <li class="title"><a style="text-decoration:none" href="#update-article">Update article</a></li>
          <li class="title"><a style="text-decoration:none" href="#delete-article">Delete article</a></li>
        </ul>
        <br />
      </div>

      <div id="liveness">
        <h3 class="display-1">Liveness</h3>
        <v-divider></v-divider>
        <br />
        <p>
          A GET on the 
          <code>"/status"</code> 
           route is expected to return the following JSON.
        </p>
        <br />
  
        <v-card >
          <v-card-subtitle>
            GET /status response:
          </v-card-subtitle>
          <v-card-text>
            <pre>
  {
    <span class="red--text">"status"</span> : <span class="red--text">"Up"</span>
  }
          </pre>
          </v-card-text>
        </v-card>
        <br />
      </div>
  
  
   
  <!-- Articles -->
  
     <div id="articles">
        <h3 class="display-1">Articles</h3>
        <v-divider></v-divider>
        <br />
        <p>
          The website's main features are articles. The user should be able to create, store, edit, view, and delete articles item.
          Therefore, as a developer, you need to implement the backend functionality to support the following http requests:  
        </p>
  
        <br />
  
        <div id="create-article">
        <h3 class=title>Create articles</h3>
        <v-divider></v-divider>
        <br />
  
        <p>A POST on route <code>"/articles"</code> should create a new entry for an article in the database. If the submitted article is invalid (e.g. missing title or author), the route should return status message 400. If POST is successful, it should return status message 200.
        </p>
  
        <v-card >
          <v-card-subtitle>
            POST /articles request:
          </v-card-subtitle>
          <v-card-text>
            <pre>
    {
      <span class="red--text">"title"</span> : <span class="red--text">"The title"</span>
      <span class="red--text">"subtitle"</span> : <span class="red--text">"The subtitle"</span>
      <span class="red--text">"body"</span> : <span class="red--text">"The body of the article"</span>
      <span class="red--text">"author"</span> : <span class="red--text">"The author's full name"</span>
    }
          </pre>
          </v-card-text>
        </v-card>
  
        <v-card >
          <v-card-subtitle>
            POST /articles incomplete request:
          </v-card-subtitle>
          <v-card-text>
            <pre background="bl">
  {
    <span class="red--text">"body"</span> : <span class="red--text">"The title"</span>
    <span class="red--text">"author"</span> : <span class="red--text">"The subtitle"</span>
  }
          </pre>
          </v-card-text>
        </v-card>
        <br />
        <p>The expected response should have the following structure:</p>
        <v-card >
          <v-card-subtitle>
            POST /articles response:
          </v-card-subtitle>
          <v-card-text>
            <pre background="bl">
  {
    <span class="red--text">"_id"</span> : <span class="red--text">"ID"</span>
    <span class="red--text">"title"</span> : <span class="red--text">"The Title"</span>
    <span class="red--text">"subtitle"</span> : <span class="red--text">"The subtitle"</span>
    <span class="red--text">"body"</span> : <span class="red--text">"The body of the article"</span>
    <span class="red--text">"author"</span> : <span class="red--text">"The author"</span>
  }
          </pre>
          </v-card-text>
        </v-card>
        <br />
  
        </div>
  
      <div id="get-all-articles">
      <h3 class=title>Get all articles</h3>
        <v-divider></v-divider>
        <br />
  
        <p>A GET request on route <code>"/articles"</code> should return all the articles stored in the database
          If there are no articles in the database, then the request should return an empty array.
          An example of the GET request is shown below:
        </p>
  
        <v-card >
          <v-card-subtitle>
            GET /articles response:
          </v-card-subtitle>
          <v-card-text>
            <pre>
  [            
    {
      <span class="red--text">"_id"</span> : <span class="red--text">"ID"</span>
      <span class="red--text">"title"</span> : <span class="red--text">"The Title"</span>
      <span class="red--text">"subtitle"</span> : <span class="red--text">"The subtitle"</span>
      <span class="red--text">"body"</span> : <span class="red--text">"The body of the article"</span>
      <span class="red--text">"author"</span> : <span class="red--text">"The author"</span>
    },
    ...
  ]
          </pre>
          </v-card-text>
        </v-card>
        <br />
        </div>
  
        <div id="get-by-id">
     <h3 class=title>Get a specific article by ID</h3>
        <v-divider></v-divider>
        <br />
        <p>A GET request on route <code>"/articles/ID"</code> should return the article with the respective ID.
        If the article does not exist, then the request should return error 404.
        </p>
  
        <v-card >
          <v-card-subtitle>
            GET /articles/ID response:
          </v-card-subtitle>
          <v-card-text>
            <pre>          
  {
    <span class="red--text">"_id"</span> : <span class="red--text">"ID"</span>
    <span class="red--text">"title"</span> : <span class="red--text">"The Title"</span>
    <span class="red--text">"subtitle"</span> : <span class="red--text">"The subtitle"</span>
    <span class="red--text">"body"</span> : <span class="red--text">"The body of the article"</span>
    <span class="red--text">"author"</span> : <span class="red--text">"The author"</span>
  }
          </pre>
          </v-card-text>
        </v-card>
        <br />
        </div>
  
  
        <div id="update-article">
        <h3 class=title>Update article</h3>
        <v-divider></v-divider>
        <br />
        <p>A PUT request on the <code>"/articles/ID" </code> route shall replace the entry corresponding to the article's id in the database.
           If the given article is invalid (i.e. the body, title, subtitle or lead paragraph is either empty), the route shall return a 400.
           If an article with the same id does not exist in the database, the route shall return a 404.
           If the request is a success, the route shall return { "message": "Success" }.
           For example, to change the title of an article with id 'ID', the PUT request would look like this: 
  
        </p>
  
        <v-card >
          <v-card-subtitle>
            PUT /articles/ARTICLE_ID request:
          </v-card-subtitle>
          <v-card-text>
            <pre>          
  {
    <span class="red--text">"title"</span> : <span class="red--text">"New Title"</span>
  }
          </pre>
          </v-card-text>
        </v-card>
        <br />
        </div>
  
        <div id="delete-article">
        <h3 class=title>Delete article</h3>
        <v-divider></v-divider>
        <br />
        <p>A DELETE request on route <code>/articles/ARTICLE_ID</code> should remove the article with id 'ARTICLE_ID' from the database.
        If no article exists with the given id, then request should return error status 404.
        If the request was bad (e.g invalid id, ), the the request should return error message 400.
        </p>
  
        <v-card >
          <v-card-subtitle>
            DELETE /articles/ARTICLE_ID reponse:
          </v-card-subtitle>
          <v-card-text>
            <pre>          
  {
    <span class="red--text">"status"</span> : <span class="red--text">"200"</span>
  }
          </pre>
          </v-card-text>
        </v-card>
        <br />
  
        </div>
      </div>
  
      
    </v-container>
  </template>
  
  <script>
  export default {};
  </script>