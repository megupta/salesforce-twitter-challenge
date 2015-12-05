# salesforce-twitter-challenge

The following is a solution for the salesforce twitter challenge.

## Install & Run Server:
```
cd salesforce-twitter-challenge/salesforce-twitter-challenge-server/
npm install
node server.js
```

The server makes use of a configuration file located at salesforce-twitter-challenge-server/config.js;
the server configuration and Twitter API credentials are stored there.

## Live Demo:
```
http://localhost:8080/
```

## Jasmine Tests:
```
http://localhost:8080/SpecRunner.html
```

## Compile SASS:
```
cd salesforce-twitter-challenge/
npm install
gulp
```

The MIT License (MIT)
Copyright (c) 2015 megupta.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.