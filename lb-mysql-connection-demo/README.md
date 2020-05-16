# lb-mysql-connection-demo
lb-mysql-connection-demo



Step-1  :
Open IDE/Command Prompt for fresh project creation:
Note: For this activity, I have used Visual Studio Code (IDE)



Step-2  :
Open Integrated terminal from 'View-> Terminal' to execute commands.



Step-3  :
Create Project with command and complete all steps: 
cmd> lb lb-mysql-connection-demo
? What's the name of your application? lb-mysql-connection-demo
? Enter name of the directory to contain the project: lb-mysql-connection-demo
   create lb-mysql-connection-demo/
     info change the working directory to lb-mysql-connection-demo

? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? api-server (A LoopBack API server with local User auth)
Generating .yo-rc.json



Step-4  :
Change directory to your app
cmd> cd lb-mysql-connection-demo



Step-5  :
Run default project with below command:
cmd> node .



Step-6  :
After DB installation start SQLyog and create database: lb_mysql_connection_demo_db
Note: For this activity, I have used 'SQLyog'.



Step-7  :
Create datasource using below command:
lb datasource
? Enter the datasource name: mySqlDs
? Select the connector for mySqlDs: MySQL (supported by StrongLoop)
? Connection String url to override other settings (eg: mysql://user:pass@host/db):
? host: localhost
? port: 3306
? user: root
? password: ********
? database: lb_mysql_connection_demo_db
? Install lb-connector-mysql@^2.2 Yes



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
    "dataSource": "mySqlDs"
  },
  "AccessToken": {
    "dataSource": "mySqlDs",
    "public": false
  },
  "ACL": {
    "dataSource": "mySqlDs",
    "public": false
  },
  "RoleMapping": {
    "dataSource": "mySqlDs",
    "public": false,
    "options": {
      "strictObjectIDCoercion": true
    }
  },
  "Role": {
    "dataSource": "mySqlDs",
    "public": false
  }



Step-10 :
Create database tables for built-in models using custom file server/create-lb-tables.js.
Note:
Line of code placed inside file 'create-lb-tables.js' used to create database tables against models (default/custom) both as you pass Model name in array, using related datasource 'mySqlDs' 




Step-11 :
Execute file server/create-lb-tables.js with node command.
Example:
cmd...../server> node create-lb-tables.js
 


Step-12 :
Return to project's root directory and run command 'node .' for testing of application.



Thanks & regards
Firdaous Nizami
