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

    <span class="border-bottom border-dark"></span>

    <div id="table-of-contents">
      <h3 class="display-1">Table of contents</h3>
      <v-divider></v-divider>
      <br />
      <ul>
        <li class="title">
          <a style="text-decoration:none" href="#liveness">Liveness</a>
        </li>
        <li class="title">
          <a style="text-decoration:none" href="#create-article"
            >Create articles</a
          >
        </li>
        <li class="title">
          <a style="text-decoration:none" href="#get-all-articles"
            >Get all articles</a
          >
        </li>
        <li class="title">
          <a style="text-decoration:none" href="#update-article"
            >Update article</a
          >
        </li>
        <li class="title">
          <a style="text-decoration:none" href="#delete-article"
            >Delete article</a
          >
        </li>
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

      <v-card class="grey lighten-4">
        <v-card-subtitle class="grey lighten-2 blue--text">
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

    <div id="articles">
      <h3 class="display-1">Articles</h3>
      <v-divider></v-divider>
      <br />
      <p>
        The website's main features are articles. The user should be able to
        create, store, edit, view, and delete articles. Therefore, as a
        developer, you need to implement the backend functionality to support
        the following http requests:
      </p>

      <br />

      <div id="create-article">
        <h3 class="title">Create articles</h3>
        <v-divider></v-divider>
        <br />

        <p>
          A POST on route <code>"/articles"</code> should create a new entry for
          an article in the database. The request should return a status code
          400 if any of the parameters is missing from the body. The request
          should also respond with a status 200 with the newly created article.
        </p>

        <v-card class="grey lighten-4">
          <v-card-subtitle class="grey lighten-2 blue--text">
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

        <br />
        <p>The response should have the following structure:</p>
        <v-card class="grey lighten-4">
          <v-card-subtitle class="grey lighten-2 blue--text">
            POST /articles response:
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

      <div id="get-all-articles">
        <h3 class="title">Get all articles</h3>
        <v-divider></v-divider>
        <br />

        <p>
          A GET request on route <code>"/articles"</code> should return all the
          articles stored in the database and respond with status code 200. If
          there are no articles in the database, then the request should return
          an empty array. An example of the GET request is shown below:
        </p>

        <v-card class="grey lighten-4">
          <v-card-subtitle class="grey lighten-2 blue--text">
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
        <h3 class="title">Get a specific article by ID</h3>
        <v-divider></v-divider>
        <br />
        <p>
          A GET request on route <code>"/articles/{articleId}"</code> should
          return the article with the respective ID. If the article does not
          exist, then the request should return status code 404. If the article
          id isn't a valid id, the request should return a status code 400.
        </p>

        <v-card class="grey lighten-4">
          <v-card-subtitle class="grey lighten-2 blue--text">
            GET /articles/{articleId} response:
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
        <h3 class="title">Update article</h3>
        <v-divider></v-divider>
        <br />
        <p>
          A PUT request on the <code>"/articles/{articleId}" </code> route
          should update the article with corresponding id in the database. If
          the id in the request isn't an ObjectID, respond with status code 400.
          If an article with the same id does not exist in the database, respond
          with status code 404. If the request is a success, the route shall
          return the updated article and respond with status code 200. For
          example, to change the title of an article with id 'ID', the PUT
          request would look like this:
        </p>

        <v-card class="grey lighten-4">
          <v-card-subtitle class="grey lighten-2 blue--text">
            PUT /articles/{articleID} request:
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
        <p>
          If the article originally looked like the one in returned in the
          previous section, then the PUT's response would look like this:
        </p>

        <v-card class="grey lighten-4">
          <v-card-subtitle class="grey lighten-2 blue--text">
            PUT /articles/{articleId} response:
          </v-card-subtitle>
          <v-card-text>
            <pre>          
  {
    <span class="red--text">"_id"</span> : <span class="red--text">"ID"</span>
    <span class="red--text">"title"</span> : <span class="red--text">"New Title"</span>
    <span class="red--text">"subtitle"</span> : <span class="red--text">"The subtitle"</span>
    <span class="red--text">"body"</span> : <span class="red--text">"The body of the article"</span>
    <span class="red--text">"author"</span> : <span class="red--text">"The author"</span>
  }
          </pre>
          </v-card-text>
        </v-card>
        <br />
      </div>

      <div id="delete-article">
        <h3 class="title">Delete article</h3>
        <v-divider></v-divider>
        <br />
        <p>
          A DELETE request on route <code>/articles/{articleId}</code> should
          remove the article with id '{articleID}' from the database. If no
          article exists with the given id, then request should respond with
          status code 404. If the request was bad (e.g invalid id), then the
          request should respond with status code 400. If request is successful,
          respond with status code 200, and send back the deleted article.
        </p>
        <br />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>
