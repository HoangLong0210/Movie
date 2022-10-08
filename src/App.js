import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AdminPage from "./pages/AdminPage";
import MovieAdmin from "./components/admin/movieadmin/MovieAdmin";
import ServiceAdmin from "./components/admin/serviceadmin/ServiceAdmin";
import Viewer from "./components/admin/viewer/Viewer";
import Comment from "./components/admin/comment/Comment";
import ProfileAdmin from "./components/admin/profileadmin/ProfileAdmin";
import ProfileFamousPerson from "./pages/ProfileFamousPerson";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import WithEmail from "./components/forgotpassword/WithEmail";
import WithPhone from "./components/forgotpassword/WithPhone";
import ResetPassword from "./components/forgotpassword/ResetPassword";
import Person from "./components/admin/person/Person";
import Episode from "./components/admin/episode/Episode";
import MovieWatchPage from "./pages/MovieWatchPage";
import ProfileViewer from "./pages/ProfileViewer";
import Service from "./components/service/Service";
import MovieType from "./components/movie/MovieType";
import AddMovie from "./components/admin/movieadmin/AddMovie";
import Payment from "./components/service/Payment";
import SeriesPage from "./pages/SeriesPage";
// /import FirebaseAuth from "./firebase/FirebaseAuth";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route path="/series" element={<SeriesPage></SeriesPage>}></Route>
          <Route
            path="/newandpopular"
            element={<MoviePage></MoviePage>}
          ></Route>
          <Route path="/mylist" element={<MoviePage></MoviePage>}></Route>

          <Route
            path="/profile"
            element={<ProfileViewer></ProfileViewer>}
          ></Route>
          <Route
            path="/watch/:movieId/:episodeMovie"
            element={<MovieWatchPage></MovieWatchPage>}
          ></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
          <Route
            path="/genre/:genreId"
            element={<MovieType></MovieType>}
          ></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route
            path="/payment/:serviceId"
            element={<Payment></Payment>}
          ></Route>
          <Route
            path="/famousperson/:personId"
            element={<ProfileFamousPerson></ProfileFamousPerson>}
          ></Route>
        </Route>
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
        <Route path="/admin/movie" element={<MovieAdmin></MovieAdmin>}></Route>
        <Route path="/admin/movie/add" element={<AddMovie></AddMovie>}></Route>
        <Route
          path="/admin/service"
          element={<ServiceAdmin></ServiceAdmin>}
        ></Route>
        <Route path="/admin/viewer" element={<Viewer></Viewer>}></Route>
        <Route path="/admin/comment" element={<Comment></Comment>}></Route>
        <Route path="/admin/famousperson" element={<Person></Person>}></Route>
        <Route path="/admin/episode" element={<Episode></Episode>}></Route>
        <Route
          path="/admin/profile"
          element={<ProfileAdmin></ProfileAdmin>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/forgotpassword"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route
          path="/resetpassword"
          element={<ResetPassword></ResetPassword>}
        ></Route>
        <Route
          path="/forgotpassword/withphone"
          element={<WithPhone></WithPhone>}
        ></Route>
        <Route
          path="/forgotpassword/withemail"
          element={<WithEmail></WithEmail>}
        ></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
