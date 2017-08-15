function sendFormByEmail(e) 
{    
  // Remember to replace this email address with your own email address
  var email = "you@example.com"; 

  var s = SpreadsheetApp.getActiveSheet();
  var headers = s.getRange(1,1,1,s.getLastColumn()).getValues()[0];    
  var message = "";
  // Change subject line here
  var subject = "New Hire: ";

  // The variable e holds all the form values in an array.
  // Loop through the array and append values to the body.

  for(var i in headers) 
    message += headers[i] + ': '+ e.namedValues[headers[i]].toString() + "\n\n";     
 
  // Insert variables from the spreadsheet into the subject.
  // In this case, I wanted the new hire's name and start date as part of the
  // email subject. These are the 3rd and 16th columns in my form.
  // This creates an email subject like "New Hire: Jane Doe - starts 4/23/2013"
  subject += e.namedValues[headers[2]].toString() + " - starts " + e.namedValues[headers[15]].toString();

  // Send the email
  MailApp.sendEmail(email, subject, message); 
  //Ensure you change the trigger to sendFormByEmail based on spreadsheet onFormSubmit
}
