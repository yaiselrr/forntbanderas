export var ImageTypes;
(function (ImageTypes) {
    ImageTypes["apng"] = "image/apng";
    ImageTypes["bmp"] = "image/bmp";
    ImageTypes["gif"] = "image/gif";
    ImageTypes["jpeg"] = "image/jpeg";
    ImageTypes["pjpeg"] = "image/pjpeg";
    ImageTypes["png"] = "image/png";
    ImageTypes["svg"] = "image/svg+xml";
    ImageTypes["tiff"] = "image/tiff";
    ImageTypes["webp"] = "image/webp";
    ImageTypes["xicon"] = "image/x-icon";
})(ImageTypes || (ImageTypes = {}));
export var FileMetaTypes;
(function (FileMetaTypes) {
    FileMetaTypes["images"] = "image/*";
    FileMetaTypes["audios"] = "audio/*";
    FileMetaTypes["videos"] = "video/*";
})(FileMetaTypes || (FileMetaTypes = {}));
