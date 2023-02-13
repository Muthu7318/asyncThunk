import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./Apis/albumsApi";
import { photosApi } from "./Apis/photosApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // albums: albumsApi.reducer, // this will work because we used "albums" as reducerPath while creating api. spelling is important, if u add "album" it wont work.
    [albumsApi.reducerPath]: albumsApi.reducer, // do this trick to avoid making the typos.
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./Thunks/fetchUsers";
export * from "./Thunks/addUser";
export * from "./Thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./Apis/albumsApi";

export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "./Apis/photosApi";
