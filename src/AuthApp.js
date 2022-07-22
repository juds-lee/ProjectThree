import Signup from "./AuthComponents/Signup";
import PokemonApp from "./PokemonApp";
import Login from "./AuthComponents/Login"
import Forgotpassword from "./AuthComponents/Forgotpassword";
import React from "react";
import ProtectedRoute from './AuthComponents/PrivateRoute';
import { AuthContextProvider } from "./contexts/AuthContexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div >
        <Router>
          <AuthContextProvider>
            <Routes>
              <Route path="/"
                element={
                  <ProtectedRoute>
                    <PokemonApp />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgotpassword" element={<Forgotpassword/>} />
            </Routes>
          </AuthContextProvider>
        </Router>
      </div>  
  );
}

export default App;
