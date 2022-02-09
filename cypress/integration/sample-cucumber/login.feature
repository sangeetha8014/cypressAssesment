Feature:Login into Application
Scenario:Valid Login into Application
Given User is on Login Page 
When User enter "n.sangeetha@outlook.com","SanTCS@01"
Then Should display Home Page 

Scenario:Create new post
Given User lands in home page
And User click New Post
And User enter "Test1","SanTCS@01","blah blah"
And Click Publish Article
Then Article should be published