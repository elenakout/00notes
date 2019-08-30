# Basic Rules CJ

```js
service cloud.firestore {
    match /databases/{database}/documents {
        match /{document=**} {
            allow read: if true;
        }
        match /users/{user_id} {
            allow write: if request.auth.uid == user_id;
        }
        match /posts/{post_id} {
            allow create: if request.auth.uid == request.data.user_id;
            allow update: if request.auth.uid == resource.data.user_id;
            allow delete: if request.auth.uid == resource.data.user_id
        }
    }
}
```
