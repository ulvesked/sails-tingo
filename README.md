![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# TingoDBAdapter

Waterline adapter for TingoDB. TingoDB provides 1 on 1 map of most MongoDB's APIs and it has memory based storage option, so it's very convenient for development / testing purpose or trivial sites. When the project grows bigger, you can easily migrate it to mongodb.

## Introduction of TinogoDB from it's github page

TingoDB is an embedded JavaScript in-process filesystem or in-memory database upwards compatible with MongoDB at the API level.

Upwards compatible means that if you build an app that uses functionality implemented by TingoDB you can switch to MongoDB almost without code changes. This greatly reduces implementation risks and give you freedom to switch to a mature solution at any moment.

As a proof for upward compatibility, all tests designed to run against both MongoDB and TingoDB. Moreover, significant parts of tests contributed from MongoDB nodejs driver projects and are used as is without modifications.

For more details please visit http://www.tingodb.com

## Installation

Install from NPM.

```bash
$ npm install sails-tingo --save
```

## Sails Configuration

Add the tingo config to the `config/connections.js` file.

### Using with Sails v0.10.x / v0.11.x

```javascript
module.exports.connections = {

  tingo: {
    adapter: 'sails-tingo',

    dbPath: 'path/to/tingodb', // Required, set to an empty directory for a new project

    // Optional options:
    memStore: false, // Enable in memory (no file access) mode.
    nativeObjectID: false, // Use mongodb style ObjectID for default primary key
    searchInArray: true // Globally enables support of search in nested arrays
    // Other options ...

  }
};
```
For detailed explanation of the options, please refer to TingoDB's documentation:
https://github.com/sergeyksv/tingodb#requiretingodboptions

Please notice that if you set `nativeObjectID` to `true`, you have to install `bson` npm package:

```
npm install bson
```

## Sails.js

http://sailsjs.org

## Waterline

[Waterline](https://github.com/balderdashy/waterline) is a brand new kind of storage and retrieval engine.

It provides a uniform API for accessing stuff from different kinds of databases, protocols, and 3rd party APIs. That means you write the same code to get users, whether they live in MySQL, LDAP, MongoDB, or Facebook.


## Acknowledgement

Big thanks to the contributors of `sails-mongo`, `tingodb`! Most code of this project is from sails-mongo.


## Sails.js License

### The MIT License (MIT)

Copyright © 2012-2013 Mike McNeil

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/a22d3919de208c90c898986619efaa85 "githalytics.com")](http://githalytics.com/mikermcneil/sails-tingo)
