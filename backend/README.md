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

#### Update
`/user` - **PUT**

Send
```javascript
{
  email:String,
  password:String,
  confirmPassword:String,
  oldPassword:String,
  name:String,
  avatar:File
}
```
>Only fields that will be updated

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
  minutes:Number,
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
    minutes:Number,
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

### AppointmentOrder

#### store
`/appointment` - **POST**


Send
```javascript
{
  body:{
    service_id:Number,
    start_date:Date
  }
  headers: {
    authorization:String
  }
}
```

Response
```javascript
{
  response:String
}
```

#### index
`/appointment` - **GET**


Send
```javascript
{
  headers: {
    authorization:String
  }
}
```

Response
```javascript
{
  appointments:Array
}
```

---

### Confirmation

#### store
`/confirm/:appointmentId` - **POST**

> Establishment owner confirm appointment

Send
```javascript
{
  params:{
    appointmentId:Number,
  }
  headers: {
    authorization:String
  }
}
```

Response
```javascript
{
  response:String
}
```
---

### Schedule

#### store
`/schedule` - **POST**

> Establishment create a new schedule

Send
```javascript
{
  body:{
    start_date:Date,
    end_date: Date
  }
  headers: {
    authorization:String
  }
}
```

Response
```javascript
{
  response:String
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
