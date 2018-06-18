# Ohana
---------------------------
<a href="https://imgflip.com/i/2cf0rr"><img src="https://i.imgflip.com/2cf0rr.jpg" title="made at imgflip.com"/></a>

Ohana is an app targetted for families that would like to organize family time/gathering events. It allows the creation of a family event by date and time, suggestions of things to do by all of those in the family, and provide a methood of family members to vote on any and all suggestions.  Not sure what to suggest?  No problem.  Our Public Dashboard of other family events can be used to generate ideas for your family event, or you can even grab that specific event and make it a suggestion for yours.  If you wish, you can even contact the original family and inquire about joining them.  The main purpose is to give a voice to all family or friend members on how they would like to spend time together.  Ohana will help achieve that and make sure that no one is left behind!!!

## Motivation



## Getting Started

  * Feel free to visit a deployed version at https://ohana-families.herokuapp.com/ ,
    * If you do not feel like creating an account and want to just test it out, feel free to log in with our test account:
      * email: test@test.com
      * password : 12345
  
     #### _or_
  
  * After cloning from gihub
    * type "npm install" to download the required dependencies(listed below)
    * Navigate to the root folder and type "node server.js" to initiate a local server connection
    * In a browser window, navigate to "localhost:3344"

## Technologies Used

<a href="https://imgflip.com/i/2cf205"><img src="https://i.imgflip.com/2cf205.jpg" title="made at imgflip.com"/></a>


## How does it work?

After creating a Family, account and signing in, you will be directed to your Family Dashboard page.  At this point, click on the "+" field to create a new event suggestion:

<a href="https://imgflip.com/gif/2cf0ly"><img src="https://i.imgflip.com/2cf0ly.gif" title="made at imgflip.com"/></a>

From there you can input the details of the event you wish to add as a suggestion.
For convenience, a calendar drop down and location auto-fill option(using google api) is available:

<a href="https://imgflip.com/gif/2cf11j"><img src="https://i.imgflip.com/2cf11j.gif" title="made at imgflip.com"/></a>

After clicking the "Save" button, the event suggestion is added to your "Event Ballot" with all of the details:

<a href="https://imgflip.com/i/2cf1or"><img src="https://i.imgflip.com/2cf1or.jpg" title="made at imgflip.com"/></a>

Once all suggestions have been created, members of the family can vote on any or all suggested events by clicking on the heart symbol underneath the Votes icon:

<a href="https://imgflip.com/gif/2cf19x"><img src="https://i.imgflip.com/2cf19x.gif" title="made at imgflip.com"/></a>

After the deadline for voting on suggested events has passed(set by the event creator) or the "Tally and Publish" button has been clicked, the app will take the event with the most votes and publish it to the Public Dashboard page:

<a href="https://imgflip.com/gif/2cf1di"><img src="https://i.imgflip.com/2cf1di.gif" title="made at imgflip.com"/></a>

However, if a family member sees an event on the Public Dashboard that they would like to suggest..... instead of having to remember and copying over the details in a new event, they can simply click on the "Bookmark" icon of an event on the Public Dashboard page and it will be copied over to the currently selected event ballot:

<a href="https://imgflip.com/gif/2cf1gw"><img src="https://i.imgflip.com/2cf1gw.gif" title="made at imgflip.com"/></a>


## Dependecies

<a href="https://imgflip.com/i/2cf1mu"><img src="https://i.imgflip.com/2cf1mu.jpg" title="made at imgflip.com"/></a>

## Future Developments

 * Update authentication and Family + User creation to align better with conventional standards
 * Give only Primary Users the ability to create Event Ballots(date + times of events to be filled in by family suggestion events)
 * Section on Family Dashboard page displaying all future events
 * Email notification for new events, new event proposals, family member addition requests, invitation to join family
 * Allow users to be a part of multiple Families and view their corresponding dashboards
 * Add a weight system for votes, with Primary Users having more(in event of a tied vote) 
 * Event Cards ability to update the number of families attending
 * Add a chat ability on each Suggested Event
 * Incorporate a child age range
 * Integration with Google Calendar

## Credits

Overall site pages and card designs: Maria Otero - m.jesuotero@gmail.com

Front-end Structure/design and Google API implementation:  Sophie Obayashi - sophieobayashi@gmail.com

Backend + HTML routing and development,

Database design, and authentication: Jessie La    - laethaka@gmail.com,  Bryan Albano - albanobryan@yahoo.com
                                    
## Maintained and Updated By



