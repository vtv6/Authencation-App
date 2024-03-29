import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/Header";

function HomePage({ user, isLoading }: any) {
  const history = useHistory();
  useEffect(() => {
    if (!user.uid && !isLoading) history.push("/login");
  });
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center mt-5">
        <h2 className="sm:text-4xl text-2xl">Personal info</h2>
        <p className="sm:text-lg text-sm font-light mt-3">Basic info, like your name and photo</p>
        <div className="px-4">
          <div className="sm:mt-10 mt-4 xl:w-3xl lg:w-2xl sm:w-xl sm:border border-gray-200 rounded-xl">
            <div className="flex justify-between items-center sm:px-10 py-5">
              <div className="mr-5">
                <h3 className="text-2xl">Profile</h3>
                <p className="text-sm font-medium text-gray-450">Some info may be visible to other people</p>
              </div>
              <Link
                to="/edit"
                className="py-1 px-5 border border-gray-450 hover:border-gray-500 active:border-gray-600 text-gray-450 hover:text-gray-500 active:text-gray-600 rounded-lg"
              >
                Edit
              </Link>
            </div>
            <div className="grid sm:grid-cols-info grid-cols-info--moblie grid-rows-info">
              <div className="flex border-t border-gray-200 items-center">
                <span className="sm:pl-10 self-center text-sm text-gray-350 font-medium">PHOTO</span>
              </div>
              <div className="flex sm:justify-start justify-end border-t border-gray-200">
                <img className="w-16 h-16 my-2 object-cover rounded-lg" src={user.image} alt="" />
              </div>
              <div className="flex border-t border-gray-200 items-center">
                <span className="sm:pl-10 text-sm text-gray-350 font-medium">NAME</span>
              </div>
              <div className="flex sm:justify-start justify-end border-t border-gray-200 items-center">
                <span className="sm:pr-10 my-2 sm:text-lg">{user.name}</span>
              </div>
              <div className="flex border-t border-gray-200 items-center">
                <span className="sm:pl-10 text-sm text-gray-350 font-medium">BIO</span>
              </div>
              <div className="flex sm:justify-start justify-end border-t border-gray-200 items-center">
                <span className="sm:pr-10 my-2 sm:text-left text-right sm:text-lg">{user.bio}</span>
              </div>
              <div className="flex border-t border-gray-200 items-center">
                <span className="sm:pl-10 text-sm text-gray-350 font-medium">PHONE</span>
              </div>
              <div className="flex sm:justify-start justify-end border-t border-gray-200 items-center">
                <span className="sm:pr-10 my-2 sm:text-lg">{user.phone}</span>
              </div>
              <div className="flex border-t border-gray-200 items-center">
                <span className="sm:pl-10 text-sm text-gray-350 font-medium">EMAIL</span>
              </div>
              <div className="flex sm:justify-start justify-end border-t border-gray-200 items-center">
                <span className="sm:pr-10 my-2 sm:text-lg">{user.email}</span>
              </div>
              {user.domain === "local" && (
                <>
                  <div className="flex border-t sm:border-b-0 border-b border-gray-200 items-center">
                    <span className="sm:pl-10 text-sm text-gray-350 font-medium">PASSWORD</span>
                  </div>
                  <div className="flex sm:justify-start justify-end border-t sm:border-b-0 border-b border-gray-200 items-center">
                    <span className="sm:pr-10 my-2 sm:text-lg">************</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-350 mt-2 mb-4 sm:mx-0">
            <p>Tuấn Vũ</p>
            <p>devchallenges.io</p>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => ({ user: state.user, isLoading: state.isLoading });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
