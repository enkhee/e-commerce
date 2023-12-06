
$(document).ready(function() {
        console.log("ready")
        $('#summernote').summernote({
            onImageUpload: function(image) {
                console.log(image)
        }
        })
    })
