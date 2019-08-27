# Firestore Upload Img

Template

```html
<input type="file" @change="onFileChanged" />
<button @click.prevent="onUpload">Upload!</button>
```

Script

```js
onFileChanged(event) {
    this.selectedFile = event.target.files[0]
},
onUpload() {
  // upload file, get it from this.selectedFile
  firebase
    .storage()
    .ref('photos/' + this.selectedFile.name)
    .put(this.selectedFile)
    .then(response => {
      response.ref.getDownloadURL().then(downloadURL => {
        //  firebase.database().ref(YOUR_DATABASE).child(THE_USER_ID).update({imageUrl:downloadURL})
        this.imgUp = downloadURL
        console.log(downloadURL)
      })
    })
  .catch(err => console.log(err))
}
```
