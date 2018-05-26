ABC Training Company Web Platform

Website for a training company that needs to have users log in to their website and view documents / training materials that the company wants to share with them.

 ### USER STORIES

 The public:

 People should be able to view the company's homepage, a "meet our team" page, a "news and highlights" page, an "about us" page, and a "contact us" page to explain what the company does and how to get in touch with them.

 The client / students:

 The students should be able to log in to the website and access pdf documents that have been shared with them. The client should be able to view but not download the pdfs (reach)?

 The students should be able to update their password / login information.

 The company:

 The company should be able to add new students to clients and groups (batch upload - reach?). Clients will have multiple groups, and groups will have multiple students. The admins will be able to assign documents to each 'group'. The admins will also be able to delete groups and students.

 The platform would notify 'students' via email that their account has been created, and send them a unique, randomly generated password. Each client will be assigned an ID number.

 The company should be able to upload documents (drag and drop? version control?) to the platform.

 The company should also be able to create multiple choice and essay based exams, and store multiple choice questions in question banks to generate future tests. (super reach)

 The company should be able to track clicks - who views which documents, how often, for how long? and see the analytics for each client / student (super reach)

 The company admins should also be able to add content to the recent news pages (maybe)

 The admins should be able to edit their own login information, and the lead admin will be able to create other admins.



 ### DATA

 Company:
 	Admins
 		ID
 		Email address
 		Name
    Lead admin - boolean

 	Client:
 		ID
 		Name
 		Has groups
    Has students through groups

 	Groups:
 		ID
    name
 		Has Students (ID)
 		Has files
 		Has exams

  Students:
    ID
    Name
    Email address
    Belongs to Groups
    Belongs to client through group
    Has files through Groups

Files:
    ID
    Name
    Content / PDF link
    Belongs to groups

 ### The tech

PSQL

Ruby/Sinatra back end

React front end
