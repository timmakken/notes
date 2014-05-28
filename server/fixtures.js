if (Posts.find().count() === 0) {
Posts.insert({
title: 'Introducing Notes',
author: 'Tim Makken',
url: 'http://sachagreif.com/introducing-telescope/'
});
Posts.insert({
title: 'Meteor - the power of Notes',
author: 'Tom Coleman',
url: 'http://lynu.nl'
});
Posts.insert({
title: 'The Meteor Book',
author: 'Tom Coleman',
url: 'http://themeteorbook.com'
});
}
