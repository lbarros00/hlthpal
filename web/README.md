## Requirements 
Must have Python 2.7 installed. Create a virtual env for this project if you use python 3 for other projects.

Must have Django framework installed.
Visit the offical Django website for details: [Install Django](https://www.djangoproject.com/start/)

You should be able to install all dependencies with pip. Install pip and run the following command from ``` hlthpal/web/ ```
directory. 
``` pip install -r requirements.txt" in your shell.``` 

## Project setup
Clone the repo using the git clone command. Run Django application using the following commands.
```  cd web/project ```
``` python manage.py runserver ```

By default django uses a sql-lite database that comes bundeled with the Django framework.
If you plan to connect your application to a Relational database liek MySql or PostGres you must configure your database first.

Read more about different database options [here](https://docs.djangoproject.com/en/1.10/topics/install/#database-installation).

<hr/>


## REST APIs 
Here is a brief description of the supported APIs. You can test the APIs using your browser or using commandline if you have curl installed.
---
### Authentication APIs
---
#### POST 'api/auth'
* Get authentication token for a given user with username.
* URL: http://127.0.0.1:8000/api/auth
* ``` curl -i -X POST -H "Content-Type: application/json" -d '{"username":"John","password":"testPassword"}' http://127.0.0.1:8000/api/auth/ ```

---
#### POST 'api/login'
* Get authentication token for a given user with email or username. Can be used instead of 'api/auth'.
* URL: http://127.0.0.1:8000/api/login
* Two variants available for this API. Either login using email or username.
* ``` curl -i -X POST -H "Content-Type: application/json" -d '{"email":"john@gmail.com","password":"testPassword"}' http://127.0.0.1:8000/api/login/ ```
* ``` curl -i -X POST -H "Content-Type: application/json" -d '{"username":"John_21","password":"testPassword"}' http://127.0.0.1:8000/api/login/ ```

---
####  POST 'api/token-refresh'
* Refresh authentication token for particular user.
* URL: http://127.0.0.1:8000/api/token-refresh
* ``` curl -i -H "Authorization: JWT __YOUR_TOKEN__" http://127.0.0.1:8000/api/token-refresh ```

---
#### GET 'api/user'
* Get information on authenticated user.
* URL: http://127.0.0.1:8000/api/user
* ``` curl -i -X GET -H "Authorization: JWT __YOUR_TOKEN__"  http://127.0.0.1:8000/api/user ```

---
### Registration and data submission APIs
---
#### POST 'api/register'
* API for patient Registration.
* URL: http://127.0.0.1:8000/api/register
* ``` curl -i -X POST -H "Content-Type: application/json" -d '{"first_name":"John", "last_name":"Misod","email":"mike@gmail.com","username":"mike@gmail.com","password":"testPassword", "patient" : { "diagnosis":"diagnosis","care_giver":"Mary Smith", "doctor":"John Smith", "gender":"male", "mobile":"555-5555", "street":"street", "city":"city", "sector":"Gisenyi", "state":"state", "country":"country"} }' http://127.0.0.1:8000/api/register ```

---
#### POST 'api/entity'
* API for Hospital/organization Registration. Required to register a doctor. For priviliged users only.
* URL: http://127.0.0.1:8000/api/entity 
* ``` curl -i -X POST -H "Authorization: JWT __YOUR_TOKEN__" -H "Content-Type: application/json" -d '{"name":"Hospital","street":"street","city":"city","state":"state","country":"country"}' http://127.0.0.1:8000/api/entity ```

---
#### POST 'api/doctor' 
* API for Doctor Registration. Every doctor must be associated with an entity - hospital/organization. For priviliged users only.
* URL: http://127.0.0.1:8000/api/doctor 
* ``` curl -i -X POST -H "Authorization: JWT __YOUR_TOKEN__" -H "Content-Type: application/json" -d '{"first_name":"John","last_name":"John","email":"patrick@gmail.com","username":"patrick", "password":"testPassword", "doctor": {"entity": 1} }' http://127.0.0.1:8000/api/doctor  ```

---
####  POST 'api/record' 
* Create a new record with the score calculated from the front-end.
* URL: http://127.0.0.1:8000/api/record 
* ``` curl -i -X POST -H "Content-Type: application/json" -d '{"score":15}' -H "Authorization: JWT __YOUR_TOKEN__"  http://127.0.0.1:8000/api/record ```

---
####  PUT 'api/edit_record' 
* Delete or update score of a particular record based on its pk (primary key).
* URL: http://127.0.0.1:8000/api/edit_record/(?P<pk>\d+)$ 
* ``` curl -i -X PUT -H "Content-Type: application/json" -d '{"score":15}' -H "Authorization: JWT __YOUR_TOKEN__"  http://127.0.0.1:8000/api/edit_record/1  ```

---
####  POST 'api/answer'
* Create one or multiple instances of model Answer. 
* URL: http://127.0.0.1:8000/api/answer
* ``` curl -i -X POST -H "Content-Type: application/json" -d '{"answer":1,"text":"","question":2,"record":2}' -H "Authorization: JWT __YOUR_TOKEN__"  http://127.0.0.1:8000/api/answer ```

---
####  PUT 'api/edit_answer' 
* Update one instance of model Answer. 
* URL: http://127.0.0.1:8000/api/edit_answer/(?P<record>\d+)/(?P<question>\d+)$ 
* ``` curl -i -X PUT -H "Content-Type: application/json" -d '{"answer":1,"text":""}' -H "Authorization: JWT __YOUR_TOKEN__"  http://127.0.0.1:8000/api/edit_answer/2/2 ```

---
####  POST 'api/symptom' 
* Create one or multiple instances of model Symptom.
* URL: http://127.0.0.1:8000/api/symptom 
* ``` curl -i -X POST -H "Content-Type: application/json" -d '{"symptom":"pain","answer":1,"record":2}' -H "Authorization: JWT __YOUR_TOKEN__"  http://127.0.0.1:8000/api/symptom ```

---
####  POST 'api/edit_symptom' 
* Update one instance of model Symptom.
* URL: http://127.0.0.1:8000/api/edit_symptom/(?P<record>\d+)/(?P<symptom>\d+)$ 
* ``` curl -i -X PUT -H "Content-Type: application/json" -d '{"symptom":"pain","answer":5}' -H "Authorization: JWT __YOUR_TOKEN__"  http://127.0.0.1:8000/api/edit_symptom/2/pain ```

---
####  GET 'api/questions' 
* Get questions from the database.
* URL: http://127.0.0.1:8000/api/questions
* ``` curl -i -X GET -H "Authorization: JWT __YOUR_TOKEN__"  http://127.0.0.1:8000/api/questions ```

---
####  GET 'api/edit_question' 
* Edit a particular question from the backend based on its pk.
*  URL: http://127.0.0.1:8000/api/edit_question/(?P<pk>\d+)$ 
* ```curl -i -X PUT -H "Authorization: JWT __YOUR_TOKEN__"  http://127.0.0.1:8000/api/edit_question/2 ```


<hr/>

### Patients API
---
####  GET 'api/patients'
* Get all patient names. For privileged users only.
* URL: http://127.0.0.1:8000/api/patients
* Request:

``` curl -i -X GET -H "Authorization: JWT __YOUR_TOKEN__" http://127.0.0.1:8000/api/patients ```

* Response
 ```  
 [
     {"id":13,"username":"rand1","first_name":"John","last_name":"Misod","is_active":true},
     {"id":14,"username":"pat1@gmail.com","first_name":"Pat1","last_name":"Cage","is_active":true},
     {"id":15,"username":"pat2@gmail.com","first_name":"Pat2","last_name":"Flynn","is_active":true},
     {"id":16,"username":"pat3@gmail.com","first_name":"Pat3","last_name":"More","is_active":true}
 ]
  ```

---
####  GET 'api/patients/score'
* Get list of all patients and their latest score. For privileged users only.
* URL: http://127.0.0.1:8000/api/patients/score
* Request:

``` curl -i -X GET -H "Authorization: JWT __YOUR_TOKEN__" http://127.0.0.1:8000/api/patients/score ```

* Response
```
[
    {
        "user":{"id":14,"username":"pat1@gmail.com","first_name":"Pat1","last_name":"Cage"},
        "location":{"sector":"Kigali"},
        "record":{"id":3,"date":"2017-11-13T05:58:47.209686Z","score":18}
    }
]
  ```
---
####  GET 'api/patients/data'
* Get list of all patients with their latest score, notes, answer data and sector data.  For privileged users only.
* URL: http://127.0.0.1:8000/api/patients/data
* Request:

``` curl -i -X GET -H "Authorization: JWT __YOUR_TOKEN__" http://127.0.0.1:8000/api/patients/data```

* Response
```  
[
    {
        "user":{"id":15,"username":"pat2@gmail.com","first_name":"Pat2","last_name":"Flynn"},
        "location":{"sector":"Kigali"},
        "notes":{"date":"2017-12-07T01:20:06.371950Z","notes":"Some random notes","dosage":18},
        "record":{"id":6,"date":"2017-11-13T06:00:10.231919Z","score":17},
        "data":[
                   {"question":1,"answer":1,"text":"The ans is"},
                   {"question":2,"answer":1,"text":"The ans is"},                  
                   {"question":3,"answer":1,"text":"The ans is"}
               ]
    }
]
  ```

---
####  POST 'api/patient/activate'
* Activate a patient account. For privileged users only.
* URL: http://127.0.0.1:8000/api/patient/activate
* Request:

``` curl -i -X POST  -H "Authorization: JWT  __YOUR_TOKEN__" -H "Content-Type: application/json" -d '{"username":"pat3@gmail.com"}' http://127.0.0.1:8000/api/patient/activate```

* Response
``` 
    {"username":"pat3@gmail.com","is_active":true}
```


---
####  POST 'api/patient/deactivate'
* Deactivate a patient account. For privileged users only.
* URL: http://127.0.0.1:8000/api/patient/deactivate
* Request:

``` curl -i -X POST  -H "Authorization: JWT  __YOUR_TOKEN__" -H "Content-Type: application/json" -d '{"username":"pat3@gmail.com"}' http://127.0.0.1:8000/api/patient/deactivate```

* Response
``` 
{"username":"pat3@gmail.com","is_active":false}
```


---
####  POST '/api/patient/history'
* get individual patient history. Returns all data submitted by a patient. For privileged users only.
* URL: http://127.0.0.1:8000/api/patient/history
* Request:

``` curl -i -X POST  -H "Authorization: JWT  __YOUR_TOKEN__" -H "Content-Type: application/json" -d '{"username":"pat3@gmail.com"}' http://127.0.0.1:8000/api/patient/history```

* Response
``` 
[
    {
       "record":{"id":7,"date":"2017-11-13T06:00:44.418184Z","score":8},
       "data":[
                  {"question":1,"answer":1,"text":"The ans is"},
                  {"question":2,"answer":1,"text":"The ans is"}
              ]
    },
    {
      "record":{"id":8,"date":"2017-11-13T06:00:52.025034Z","score":17},
       "data":[
                  {"question":1,"answer":1,"text":"The ans is"},
                  {"question":2,"answer":1,"text":"The ans is"},
                  {"question":3,"answer":1,"text":"The ans is"}
               ]
    }
]
```



### Notes API
---
####   GET 'api/notes/latest'  
* Get all patient latest notes. Gives the latest notes in the system for every patient. For privileged users only. 
* URL: http://127.0.0.1:8000/api/notes/latest
* Request: 

``` curl -i -X GET -H "Authorization: JWT __YOUR_TOKEN__" http://127.0.0.1:8000/api/notes/latest ```
* Response
``` 
[
    {
        "patient": {"id":14,"username":"pat1@gmail.com","first_name":"Pat1","last_name":"Cage"},
        "notes": {"date":"2017-12-07T01:20:06.371950Z","notes":"Some random notes","dosage":18}
    },
    {
        "patient": {"id":15,"username":"pat2@gmail.com","first_name":"Pat2","last_name":"Flynn"},
        "notes": {"date":"2017-12-07T01:47:25.855913Z","notes":"This is important","dosage":null}
    },
]
```

####   POST '/api/notes/history'  
* Get a individual patient all notes. Gives historical data  of all notes entered into the system for a patient. For privileged users only. 
* URL: http://127.0.0.1:8000/api/notes/history
* Request: 

``` 
curl -i -X POST -H "Authorization: JWT  __YOUR_TOKEN__" -H "Content-Type: application/json" -d '{"username":"pat1@gmail.com"}' http://127.0.0.1:8000/api/notes/history

```
* Response
``` 
[
    {"date":"2017-11-22T04:51:46.835407Z","notes":"Some random notes","dosage":17},
    {"date":"2017-11-22T04:54:25.621580Z","notes":"Some good notes","dosage":null},
    {"date":"2017-11-22T04:55:35.011297Z","notes":"Some bad notes","dosage":12},
    {"date":"2017-11-22T05:42:24.566858Z","notes":"Some better notes","dosage":null},
    {"date":"2017-11-22T05:42:43.336761Z","notes":"Some ok notes","dosage":23},
    {"date":"2017-12-07T01:20:06.371950Z","notes":"Some great notes","dosage":18}
]
```

---
####  GET 'api/notes/create'  
* Create a new note. For privileged users only. The dosage parameter is optional. All other parameters are required. 
* URL: http://127.0.0.1:8000/api/notes/create </p>
* Request

```curl -i -X POST  -H "Authorization: JWT  __YOUR_TOKEN__" -H "Content-Type: application/json" -d '{"notes": "This is important" , "dosage":18, "username" : "pat1@gmail.com"}' http://127.0.0.1:8000/api/notes/create ```

  OR

```
curl -i -X POST  -H "Authorization: JWT __YOUR_TOKEN__" -H "Content-Type: application/json" -d '{"notes": "This is important" , "username" : "pat2@gmail.com"}' http://127.0.0.1:8000/api/notes/create
```

* Response
``` 
{ 
    "id":19, 
    "date":"2017-12-07T01:41:36.562356Z", 
    "notes":"This is important", 
    "dosage":20
 }
```
  OR
```
{ "id":20,
  "date":"2017-12-07T01:47:25.855913Z", 
  "notes":"This is important", 
  "dosage":null
}
```

---
### Project URLs 

####  '/home' 
* Project homepage.
* URL: http://127.0.0.1:8000/home 


####  '/password-reset' 
* Password reset link.
* URL: http://127.0.0.1:8000/password-reset/ 
