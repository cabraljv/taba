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
  latitude:Number,
  longitude:Number,
  branch:Number,
  description:String
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

---
### Service
#### create
`/service` - **POST**

Send
```javascript
body: {
  title:String,
  description:String,
  value:Number,
  category:Number,
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

<br />

#### index
`/service/:establishmentId` - **GET**

Send
```javascript
params: {
  establishmentId:Number,
},
headers: {
  authorization:String
}
```

Response
```javascript
[
  {
    title:String,
    description:String,
    value:Number,
    offer: {
      discount:Number
    },
    category: {
      name:String
    }
  }
]
```

---

### BuyOrder
#### create
`/order` - **POST**

Send
```javascript
body: {
  services:[ id:Number,... ]
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

<br />

#### index
`/order` - **GET**

Send
```javascript

headers: {
  authorization:String
}
```

Response
```javascript
[
  {
    id:Number,
    confirmed:Boolean,
    services: [
      {
        title:String,
        id:Number
      }
    ]
  },
]
```

#### show
`/order/:orderId` - **GET**

Send
```javascript
{
  params:{
    orderId:Number
  }
  headers: {
    authorization:String
  }
}

```

Response
```javascript
{
  id:Number,
  confirmed:Boolean,
  services: [
    {
      title:String,
      id:Number
    }
  ]
}
```

---

### Geolocation


#### index
`/geo` - **GET**
> 5km area search
>
Send
```javascript
{
  query:{
    latitude:Number,
    Longitude:Number
  }
  headers: {
    authorization:String
  }
}
```

Response
```javascript
[
  {
    id:Number
    name:String,
    latitude:Number,
    longitude: Number,
    logo:{
      url:String
    }
  },
]
```
