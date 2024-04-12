import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextprovider } from "./context/auth_context.jsx";
import { SocketcontextProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContextprovider>
				<SocketcontextProvider>

					<App />
				</SocketcontextProvider>

			</AuthContextprovider>

		</BrowserRouter>
	</React.StrictMode>
);