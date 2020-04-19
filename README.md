Overview of Shortner Service
---
This is a Node.js project which can be used as a service on a website to shorten URLs.

How to use
---
- Create a database on MongoDB
- `$ git clone git@github.com:emanuelegorga/Shortner-Url-Service.git`
- `cd url_shortener`
- `npm install`
- Duplicate the `.env` file and set the MongoDB cluster URI to the environment variable
- `npm run dev`

The project will run on port 5000. You can see if it is working by reading the server logs which should output `Mongo DB Connected...`. Once connected you can send `POST` requests to `http://localhost:5000/api/url/shorten` with the following body in JSON format:

```
{
  "longUrl": ":PasteHereTheLinkToBeShorthened"
}
```

Screeshots
---
![example](https://user-images.githubusercontent.com/40179292/79640190-87b0b500-8190-11ea-968e-e4ecd6be4fcc.png)
