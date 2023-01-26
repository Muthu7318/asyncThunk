import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../Store/Thunks/removeUser";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function User({ user }) {
  const [doRemoveUser, isRemovingUser, removingUserError] =
    useThunk(removeUser);

  const header = (
    <>
      <Button
        className="mr-3"
        loading={isRemovingUser}
        onClick={() => {
          doRemoveUser(user);
        }}
      >
        <GoTrashcan></GoTrashcan>
      </Button>
      {removingUserError && <div>Error Deleting User</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user}></AlbumsList>
    </ExpandablePanel>
  );
}

export default User;
