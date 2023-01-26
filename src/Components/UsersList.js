import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../Store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import User from "./User";

function UsersList(props) {
  const [doFetchUsers, isLoading, error] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={6} className="h-10 w-full"></Skeleton>;
  } else if (error) {
    content = <div>Error Fetching data</div>;
  } else {
    content = data.map((user) => <User key={user.id} user={user}></User>);
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && "Error Creating user"}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
