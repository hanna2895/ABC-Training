ABC Training Company Web Platform

Website for a training company that needs to have users log in to their website and view documents / training materials that the company wants to share with them. 

 ### USER STORIES 

 The public: 

 People should be able to view the company's homepage, a "meet our team" page, a "news and highlights" page, an "about us" page, and a "contact us" page to explain what the company does and how to get in touch with them.

 The client: 

 The clients should be able to log in to the website and access pdf documents that have been shared with them. The client should be able to view but not download the pdfs (reach)? 

 The company:

 The company should be able to add new clients to 'classes' (batch upload - reach?) and then assign documents to each 'class'.
 The company should also be able to delete classes.

 The platform would notify 'clients' via email that their account has been created, and send them a unique, randomly generated password. Each client will be assigned an ID number.

 The company should be able to upload documents (drag and drop? version control?) to the platform. 

 The company should also be able to create multiple choice and essay based exams, and store multiple choice questions in question banks to generate future tests. 

 The company should be able to track clicks - who views which documents, how often, for how long? and see the analytics for each client / student (reach)

 The company admins should also be able to add content to the recent news pages (maybe)



 ### DATA 

 Company: 
 	Users (admins)
 		ID
 		Email address
 		Name

 	Client / Students:
 		ID
 		Email address
 		Name
 		Has classes
 		Has exams
 		Has scores

 	Classes:
 		ID
 		Has Students (ID)
 		Has files 
 		Has exams

 	Exams
 		ID
 		belongs to students
 		Score
 		Questions

 ### The tech

MongoDB / mongoose for non-relational db? OR psql for relational data. need to think more on this. 

Ruby/Sinatra/Rails back end 

React front end


