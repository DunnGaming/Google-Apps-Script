function sendFormByEmail(e) 
{    
  // Remember to replace this email address with your own email address
  var email = "joseph.r.mclauchlan.mil@mail.mil"; 

  var s = SpreadsheetApp.getActiveSheet();
  var headers = s.getRange(1,1,1,s.getLastColumn()).getValues()[0];    
  var message = "";
  var subject = "New Lead: ";

  // The variable e holds all the form values in an array.
  // Loop through the array and append values to the body.

  for(var i in headers) 
    message += headers[i] + ': '+ e.namedValues[headers[i]].toString() + "\n\n";     
 
  // Insert variables from the spreadsheet into the subject.
  // In this case, I wanted the new personss name and date submitted as part of the
  // email subject. These are the 1st and 2nd columns in my form.
  // This creates an email subject like "New Lead: Jane Doe - submitted 4/23/2013"
  subject += e.namedValues[headers[1]].toString() + " - submitted " + e.namedValues[headers[0]].toString();

  // Send the email
  MailApp.sendEmail(email, subject, message);
  Logger.log('Email has been sent!');
  // Ensure you change the trigger to sendFormByEmail based on spreadsheet onFormSubmit
}
