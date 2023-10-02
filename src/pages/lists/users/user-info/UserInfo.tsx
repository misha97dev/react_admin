import React, { useEffect, useState } from "react";
import "./userInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { IUserSimple } from "../../../../interfaces/user.interface";
import { getOneUser } from "../../../../features/users/usersAction";
import { useParams } from "react-router-dom";
import Spinner from "../../../../components/spinner/Spinner";
const UserInfo = () => {
  const { userInfo, loading, success, error } = useSelector(
    (state: any) => state.users
  );
  const id: number = Number(useParams().id);
  let birth: string = "";
  const dispatch: any = useDispatch();
  const [user, setUser] = useState<IUserSimple>();
  useEffect(() => {
    dispatch(getOneUser(id));
    if (success) {
      convertBirth(userInfo.user.date_of_birth);
      setUser(userInfo.user);
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success]);
  const convertBirth = (value: string) => {
    const parsedDate = new Date(value);
    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = parsedDate.getFullYear();
    const result = `${day}.${month}.${year}`;
    return result;
  };
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        user && (
          <div className="user-info">
            <div className="user-info__img">
              <img src={user?.profile_picture} alt="" />
            </div>
            <div className="user-info__content">
              <div className="user-info__name">
                {user.first_name + " " + user.last_name}
              </div>
              <div className="user-info__birth">
                {birth}
                Birth:{birth && " " + birth}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default UserInfo;
