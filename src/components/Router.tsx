import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Trips from './Trips';
import TripDetail from './TripDetail';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
function Ruoter() {
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trips" element={<Trips />} />
                    <Route path="/register" element={<UserRegistration />} />
                    <Route path="*" element={<>404 Page not found</>} />
                    <Route path='/trips/:id' element={<TripDetail />}/>
                    <Route path= '/userlogin' element={<UserLogin />}/>
                    <Route path= '//userregistration' element={<UserRegistration />}/>

                </Routes>
            </Router>
            
    )
}
export default Ruoter






