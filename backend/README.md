# TABA backend

## Rotas

### User
#### Create
`/user` - **POST**
Send
```javascript
{
  email:String,
  password:String,
  name:String,
  avatar:File
}
```
>Avatar is not required

Response
```javascript
{
  response:String
}
```

---
### Session
#### Login
`/session` - **POST**
Send
```javascript
{
  email:String,
  password:String,
}
```

Response
```javascript
{
  name:String,
  email:String,
  token:String
}
```

---
### Establishment
#### create
`/establishment` - **POST**
Send
```javascript
body: {
  name:String,
  latitude:Double,
  longitude:Double,
  branch:Integer,
  password:Double,
},
headers: {
  authorization:String
}
```

Response
```javascript
{
  response:String
}
```


