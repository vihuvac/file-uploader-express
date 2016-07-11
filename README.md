Express Framework and jQuery File Upload
========================================

This is an example using [blueimp-file-uploader-express](https://github.com/vihuvac/blueimp-file-uploader-express) node module.

---

### Install

* Download or clone this repo, then go to the root directory:
    ```cd file-uploader-express```

* Create the upload manager file ```uploadManager.js```.

    You can use the example file ```uploadManager-dist.js``` by running:
        ```cp routes/uploadManager-dist.js routes/uploadManager.js```

    Or you can take a look at the [blueimp-file-uploader-express](https://github.com/vihuvac/blueimp-file-uploader-express) doc.

* Intall the npm modules running:
    ```npm install```

* Start running the project:
    ```npm bin/www```

> **Note**:
> for debugging messages run:
>
> ```DEBUG=express:* node app.js```
