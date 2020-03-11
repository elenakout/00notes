# Firestore Upload Img

Template

```html
<input type="file" @change="onFileChanged" />
<button @click.prevent="onUpload">Upload!</button>
```

Script

```js
<script>
import firebase from 'firebase'

data: () => {
  selectedImg: null,
  imgURL: '',

},

methods: {
  onFileChanged(event) {
    this.selectedImg = event.target.files[0]
},
onUpload() {
  // upload file, get it from this.selectedFile
  firebase
    .storage()
    .ref('photos/' + this.selectedImg.name)
    .put(this.selectedFile)
    .then(response => {
      response.ref.getDownloadURL().then(downloadURL => {
        //  firebase.database().ref(YOUR_DATABASE).child(THE_USER_ID).update({imageUrl:downloadURL})
        this.imgURL = downloadURL

      })
    })
  .catch(err => console.log(err))
}

}
</script>
```
