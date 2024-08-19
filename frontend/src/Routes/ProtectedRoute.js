import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAdmin = false }) => {

    const { loading, isAuthenticated, user } = useSelector(state => state.user);

    console.log(user?.role);
    return (
        <>
            {loading === false && (
                isAuthenticated === false ? <Navigate to="/login" /> :
                (isAdmin && user.role !== "admin" ? <Navigate to="/account" /> : children)
            )}

        </>
    );
};

export default ProtectedRoute;

// (isAdmin && user?.role !== "admin" ? <Navigate to="/account" /> : children)
// {loading === false && (
//     isAuthenticated === false ? <Navigate to="/login" /> :
//         (!isAdmin  ? <Navigate to="/account" /> : children)
// )}


// {loading === false && (
//     isAuthenticated === false ? <Navigate to="/login" /> :
//     (isAdmin ? (user.role !== "admin" ? <Navigate to="/login" /> : children) : children )
//                 )}