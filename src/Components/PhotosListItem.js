import React from "react";
import { useRemovePhotoMutation } from "../Store";
import { GoTrashcan } from "react-icons/go";

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div className="relative cursor-pointer m-2" onClick={handleRemovePhoto}>
      <img alt="random pic" src={photo.url} className="h-20 w-20"></img>
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl"></GoTrashcan>
      </div>
    </div>
  );
}

export default PhotosListItem;
