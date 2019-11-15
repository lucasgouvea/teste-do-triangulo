db.auth('root', '1q2w3');

db = db.getSiblingDB('triangle');

db.createUser({
  user: 'root',
  pwd: '1q2w3e',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});

db.createCollection('binarytrees');
db.createCollection('solutions');
