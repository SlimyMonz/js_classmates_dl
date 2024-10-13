# js_classmates_dl
A script to quickly download classmates yearbook images while logged in. 

# How to use:
Open ```downloadYearbook.js``` and copy it into a text editor.

Modify ```baseURL``` to the base URL of the yearbook.

Modify ```pages``` to the total number of pages in the yearbook.

While logged into Classmates.com, copy/paste the code into the console and hit ```Enter```.

Just wait a while. It can't download everything all at once. 


## How do I find the Base URL?
You will need to open a yearbook on the website while logged in. 
While in PAGE VIEW, right click a page and select OPEN IMAGE IN NEW TAB or equivalent.
The new tab should be showing the image only.

You should now have a URL in the address bar that looks like: 
```https://yb.cmcdn.com/yearbooks/X/X/X/X/00000000000000000000000000000000/1100/0001.jpg?h=00000000000000000000000000000000```

Strip the end bits of the URL so it looks like: 
```https://yb.cmcdn.com/yearbooks/X/X/X/X/00000000000000000000000000000000/1100/```

Make sure that little ```/``` is at the end, too!

Congrats, you have your base url! Put that in the script. 


## How do I know the amount of Pages?
Go to Grid View on an opened yearbook and go to the last page. Open the image in a new tab.

The URL in the address bar should tell you something like: ```0256.jpg```

That number ```0256``` is how many pages it has. You can simply set it to ```256``` in the script.


## How do I find/use a console?
While logged into Classmates.com in your browser, press ```F12``` on your keyboard. 

Something should pop up on the side or bottom of your screen.

Open the Tab called ```Console```.

This is where you will copy/paste the code.
