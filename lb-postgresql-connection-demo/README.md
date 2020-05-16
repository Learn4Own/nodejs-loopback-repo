# lb-pgsql-connection-demo



Step-1  :
Open IDE/Command Prompt for fresh project creation:

Note: 

For this activity, I have used Visual Studio Code (IDE)



Step-2  :
Open Integrated terminal from 'View-> Terminal' to execute commands.



Step-3  :
Create Project with command and complete all steps: 

cmd> lb lb-pgsql-connection-demo

? What's the name of your application? lb-pgsql-connection-demo
? Enter name of the directory to contain the project: lb-pgsql-connection-demo
   create lb-pgsql-connection-demo/
     info change the working directory to lb-pgsql-connection-demo

? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? api-server (A LoopBack API server with local User auth)
Generating .yo-rc.json



Step-4  :
Change directory to your app

cmd> cd lb-pgsql-connection-demo



Step-5  :
Run default project with below command:

cmd> node .



Step-6  :
After installation start postgresql and create database: lb_pg_connection_demo_db

Note: 

For this activity, I have used 'pgAdmin 4'.



Step-7  :
Create datasource using below command:

lb datasource
? Enter the datasource name: postgreSqlDs
? Select the connector for postgreSqlDs: PostgreSQL (supported by StrongLoop)
? Connection String url to override other settings (eg: postgres://username:password@localhost/database):
? host: localhost
? port: 5432
? user: postgres
? password: ********
? database: lb_pg_connection_demo_db
? Install loopback-connector-postgresql@^2.4 Yes



Step-8  :
Remove default datasource detail, named db from server/datasource.json

  "db": {
    "name": "db",
    "connector": "memory"
  },



Step-9  :
Replace datasource name from db to postgreSqlDs for all models placed in server/model-config.json

Example:

  "User": {
    "dataSource": "postgreSqlDs"
  },
  "AccessToken": {
    "dataSource": "postgreSqlDs",
    "public": false
  },
  "ACL": {
    "dataSource": "postgreSqlDs",
    "public": false
  },
  "RoleMapping": {
    "dataSource": "postgreSqlDs",
    "public": false,
    "options": {
      "strictObjectIDCoercion": true
    }
  },
  "Role": {
    "dataSource": "postgreSqlDs",
    "public": false
  }



Step-10 :
Create database tables for built-in models using custom file server/create-lb-tables.js.

Note:

Line of code placed inside file 'create-lb-tables.js' used to create database tables against models (default/custom) both as you pass Model name in array.




Step-11 :
Execute file server/create-lb-tables.js with node command.

Example:

cmd...../server> node create-lb-tables.js
 


Step-12 :
Return to project's root directory and run command 'node .' for testing of application.









Thanks & regards

Firdaous Nizami
