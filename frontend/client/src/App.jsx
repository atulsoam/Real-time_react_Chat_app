import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/Singup";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/auth_context";

function App() {
	const {authuser} = useAuthContext()
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/login' element={authuser? <Navigate to="/" />: <Login/>}/>
				<Route path='/signup' element={authuser? <Navigate to="/" />: <SignUp/>}/>
				<Route path='/' element={authuser? <Home/>: <Navigate to="/login" />}/>

			</Routes>
			<Toaster />
		</div>
	);
}

export default App;