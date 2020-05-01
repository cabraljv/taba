# TABA backend

## Rotas

### User
####Create
`/user` - **POST**
```javascript
send: {
  email:String,
  password:String,
  name:String,
  avatar:File
}
```
>Avatar is not required

response: success message

---


