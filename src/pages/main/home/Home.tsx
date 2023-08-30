import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
// import { getUsers } from "../../../redux/slice/user";
import { IUserSimple } from "../../../interfaces/user.interface";
const Home = () => {
  // const state: any = useSelector((state) => state);
  // const dispatch = useDispatch();
  // dispatch<any>(getUsers());

  let topUsers = [];
  // if (state.user.data) {
  //   topUsers = state.user.data.users.sort(
  //     (a: IUserSimple, b: IUserSimple) => a.lattitude - b.lattitude
  //   );
  //   console.log(topUsers);
  // }

  return (
    <div className="home">
      <div className="home__card home__card-1">1</div>
      <div className="home__card home__card-2">2</div>
      <div className="home__card home__card-3">3</div>
      <div className="home__card home__card-4">4</div>
      <div className="home__card home__card-5">5</div>
      <div className="home__card home__card-6">6</div>
      <div className="home__card home__card-7">7</div>
      <div className="home__card home__card-8">8</div>
      <div className="home__card home__card-9">9</div>
    </div>
  );
};

export default Home;
