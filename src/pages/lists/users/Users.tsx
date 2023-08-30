import "./users.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserSimple, IUsers } from "../../../interfaces/user.interface";
import { getAllUsers } from "../../../features/users/usersAction";
import Spinner from "../../../components/spinner/Spinner";

const Users = () => {
  const { usersData, loading, success, error } = useSelector(
    (state: any) => state.users
  );

  const dispatch: any = useDispatch();
  const [users, setUsers] = useState<IUsers>();
  useEffect(() => {
    dispatch(getAllUsers());
    if (success) {
      setUsers(usersData);
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success]);
  const routeToUserInfo = (id: number) => {
    window.location.href = window.location.href + `/${id}`;
  };
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="text-white w-full">
          <thead>
            <tr>
              <th className="w-[84px]"></th>
              <th className="w-[30%]">Name</th>
              <th>Contacts</th>
              <th className="w-[30%]">City</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.users.map((user: IUserSimple) => (
                <tr
                  key={user.id}
                  className=" cursor-pointer hover:bg-sky-900 transition duration-300"
                  onClick={(e) => routeToUserInfo(user.id)}
                >
                  <td className="w-[84px]">
                    <img
                      className="min-w-[60px]"
                      src={user.profile_picture}
                      alt="ava"
                    />
                  </td>
                  <td className="w-[30%]">
                    {user.first_name + " " + user.last_name}
                  </td>
                  <td>
                    <a
                      className="block mb-2 max-w-none"
                      href={"mailto:" + user.email}
                    >
                      {user.email}
                    </a>
                    <a className="block max-w-none" href={"tel:" + user.phone}>
                      {user.phone}
                    </a>
                  </td>
                  <td className="w-[30%]">{user.city + ", " + user.country}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {!users ? <h1>empty</h1> : null}
    </div>
  );
};

export default Users;
