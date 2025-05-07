# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Victoria Tran

[Link to expose page](https://victoriatr6n.github.io/Lab5_Starter/expose.html)

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, you would not use a unit test to test the "message" feature of a messaging application because there are so many moving parts for this feature. You would need to test things like the text input space itself, sending and recieving the message. This would involve too many components of the codebase. This would mean it is testing a larger scale, which is not ideal for unit tests because it is easier to test features on a smaller scale.

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, you would use a unit test to test the "max message length" feature of a messaging application because the feature itself is pretty isolated so it would be a testing on a smaller scale. You would just have to check if the message acts the correct way once it reaches the max length (i.e. stop allowing characters to be typed). This can be executed pretty quickly with not too many edge cases as well.
