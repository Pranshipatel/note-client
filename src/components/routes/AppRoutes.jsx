import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import { useDispatch, useSelector } from 'react-redux'
import Home from '../pages/Home'
import Notes from '../pages/Notes'
import View from '../pages/View'
import { getUser } from '../../store/action/userAction'

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user || {});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        try {
      
          dispatch(getUser());
        } catch (error) {
          console.log('Error fetching user:', error);
        } finally {
          setIsLoading(false);
          if (!user) {
            navigate("/");
          }
        }
      } else {
        setIsLoading(false); // User is already available, stop loading
      }
    };
    fetchData();
  }, [user, dispatch, navigate]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return user ? children : null; 
};






const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />

        {/* Protected Routes */}
        <Route
          path='/home'
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/note'
          element={
            <ProtectedRoutes>
              <Notes />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/view/:noteId'
          element={
            <ProtectedRoutes>
              <View />
            </ProtectedRoutes>
          }
        />

        
      </Routes>
    </>
  )
}

export default AppRoutes
