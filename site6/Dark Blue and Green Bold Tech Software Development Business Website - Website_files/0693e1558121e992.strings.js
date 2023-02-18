(function() {
 const messages = JSON.parse("{\"VEVQ/A\":\"Your education institution is approved to receive {0} free forever for K-12 teachers and students. You’ll be able to:\",\"dt9fiA\":\"School or organization name\",\"JbUYSQ\":\"Enter your school name\",\"iq8uRw\":\"Continue\",\"2CeVGg\":\"Move to folder\",\"xW+MSg\":\"An error occurred when creating this folder. Check your connection before trying again.\",\"g20ONQ\":\"Continue\",\"Y25XlQ\":\"Last name\",\"035brw\":\"Physical Development\",\"zpzNZw\":\"Unsupported format. Please upload another file.\",\"kO13dQ\":\"K\",\"JbGgRw\":\"Template\",\"ODv74w\":\"Go to settings\",\"zV4ZtQ\":\"You’ve unlocked {0} for free\",\"JVIbnA\":\"Date with current academic year\",\"9jAQWw\":\"{0} has reached the limit of {1, plural, one {# item} other {# items}}.\",\"lkn9sQ\":\"Comment only\",\"ikM4xQ\":\"Confirm you’re an active teacher\",\"yEKbNA\":\"First name\",\"6kav7Q\":\"Upload a JPG, PNG or PDF\",\"3KX0zw\":\"Once you’re successfully verified, the team you select will be upgraded to {0}.\",\"Jfy3fg\":\"Unlock our Education package free for Kindergarten to Grade 12\",\"Pbzn+Q\":\"Art\",\"0uOFOw\":\"{0}\",\"hPUDfg\":\"This will help us find templates and designs you'll love in the future.\",\"/mefPQ\":\"School website (optional)\",\"TotjfQ\":\"Middle\",\"HltI4w\":\"Upload a document or photo of a document, that shows your teaching qualification or employment status. It will need to include:\",\"xmpzhw\":\"Choose a team to upgrade\",\"75IpTA\":\"Move here or create a folder.\",\"BjnhvA\":\"Sorry, we had trouble loading your brand details.\",\"AIoEzw\":\"History\",\"nBxGCg\":\"This will help us find templates and designs you’ll love in the future.\",\"HGTF2A\":\"Computing\",\"esvPSg\":\"By entering your information, you agree to Canva China's <a href=\\\"{0}\\\" data-anchor-id=\\\"teacherVerificationTermsOfUse\\\">Terms of Use</a> and acknowledge our <a href=\\\"{1}\\\" data-anchor-id=\\\"teacherVerificationPrivacy\\\">Personal Information Protection Policy</a>, which explains how we handle personal information and how to exercise privacy rights.\",\"Qd/TAQ\":\"Remove\",\"4wrA/A\":\"Check your details\",\"HZ9BlA\":\"You consent to Canva disclosing this information to SheerID for verification purposes, who will handle this in accordance with their <a href=\\\"{0}\\\" data-anchor-id=\\\"teacherVerificationSheerIdPrivacy\\\">Privacy Policy</a>.\",\"x8vpiQ\":\"See accepted documents\",\"z+P7iw\":\"Add to new folder\",\"kjIAbg\":\"Special character combinations are not supported. Try entering a different name.\",\"8p+JgA\":\"Check your details\",\"1gkKcg\":\"We didn’t find {0} in our list of educational institutions. That’s OK though, we’ll just need a little bit more information to confirm you’re an active teacher.\",\"7VNx5A\":\"Retry\",\"AvGbPA\":\"We've successfully verified your application! You'll now have access to {0}.\",\"4sgoMg\":\"Business\",\"ny06Ag\":\"Claim {0} for free\",\"Y3J4GA\":\"Clear text\",\"+XKQtQ\":\"Email address\",\"aOH10w\":\"You are creating a new folder in \\\"{0}\\\"\",\"ftoR3w\":\"Health\",\"yDGadw\":\"Encourage students creativity and <strong>develop visual communication skills</strong> in a safe space\",\"SrT1uQ\":\"What subjects do you teach?\",\"v5mjxg\":\"Note: You can only upgrade a team that you own.\",\"nEMAqw\":\"Biology\",\"g+N6sQ\":\"Try again.\",\"KKc/eg\":\"The website you entered seems to be incorrect or incomplete. Please enter the full website address, including the http at the start.\",\"ck+w/g\":\"Select a team\",\"8Gcrlg\":\"We'll review your application and follow up with you on any next steps.\",\"WLhjcQ\":\"Enter your last name\",\"rDWDSg\":\"Create the most engaging lessons and <strong>run activities for students to complete in-class or at home</strong>\",\"tSwNjQ\":\"Your projects\",\"+/OYiA\":\"Primary\",\"sMoZzA\":\"Add your email address to upgrade to {0}\",\"3T2fyw\":\"Enter your school website\",\"uERwPQ\":\"We can't move your items.\",\"zoOQqg\":\"Full Name\",\"3kFzsw\":\"Select grades\",\"LZu/Eg\":\"Remind me later\",\"pFSg4w\":\"Mobile phone number\",\"TG+QPw\":\"Chemistry\",\"U8eu/A\":\"Science\",\"fLd1GQ\":\"Submit\",\"X2AZAw\":\"Name new folder\",\"pKU4KA\":\"Economics\",\"Ur6EJw\":\"Get started\",\"eJPu/w\":\"Please go to Account settings and add in an email address in 'Your account'. Once you have done so, navigate to 'Billing & Plans' and click on 'Register now for free' to upgrade to {0}\",\"mBBchA\":\"English\",\"f1FQDw\":\"<strong>Thousands of ready to use educational templates</strong> for any subject, grade, or topic\",\"MlK+Tg\":\"You can continue to use Canva for free while you wait.\",\"projVQ\":\"Canva has encountered a temporary technical issue. Please retry.\",\"taxd9g\":\"Shared with you\",\"hPrOug\":\"Languages\",\"OzT18A\":\"Physics\",\"hJecCA\":\"We couldn't process your application due to an issue at our end. Let's give it another try.\",\"eY5INg\":\"Continue\",\"i6/G1Q\":\"Your application is under review!\",\"sQyZtw\":\"{0, plural, one {# item} other {# items}}\",\"vHAGgA\":\"Continue\",\"8eiNvg\":\"I'm not a teacher\",\"arPoVQ\":\"We'll let you know the outcome within 7 days by emailing you at {0}.\",\"Eol/sA\":\"You cannot move to this folder\",\"+w6X2Q\":\"Enter your first name\",\"yqFflg\":\"We need some information about you to confirm you're an active teacher.\",\"Cg4Cxg\":\"By entering your information, you agree to Canva's <a href=\\\"{0}\\\" data-anchor-id=\\\"teacherVerificationTermsOfUse\\\">Terms of Use</a> and acknowledge our <a href=\\\"{1}\\\" data-anchor-id=\\\"teacherVerificationPrivacy\\\">Privacy Policy</a>, which explains how we handle personal information and how to exercise privacy rights.\",\"zGGzMA\":\"+ Create new\",\"NNMCbg\":\"School name\",\"CTItTg\":\"What grades do you teach?\",\"98LECA\":\"View only\",\"OAYNEQ\":\"Let's try that again...\",\"pUVppA\":\"High\",\"juJxDw\":\"I'm not a K-12 Teacher\",\"ka1U+g\":\"Claim {0}\",\"+Q3bpQ\":\"{0} includes all Canva premium features and is 100% free for eligible school teachers and their students.\",\"kpZUcw\":\"Maths\",\"xnA0TQ\":\"Continue\",\"r6QdAQ\":\"Social Sciences\",\"vVYgrg\":\"Geography\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["en"] = strings["en"] ? Object.assign(strings["en"], messages) : messages;
})();