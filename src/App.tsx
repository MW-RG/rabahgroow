import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ComingWay from './pages/ComingWay';
import Main from './pages/Main';
import CoPartner from './pages/CoPartner';
import BizSecurity from './pages/BizSecurity';
import BizSafety from './pages/BizSafety';
import BizData from './pages/BizData';
import BizPerformance from './pages/BizPerformance';
import Alliance from './pages/Alliance';
import CoHistory from './pages/CoHistory';
import CoVision from './pages/CoVision';
import CoOverview from './pages/CoOverview';

function App() {
  return (
    <div className='font-ibm relative h-auto'>      
      <div className=' h-auto min-h-full pb-20'>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Main /> } />
          
          <Route path='/overview' element={ <CoOverview /> } />
          <Route path='/history' element={ <CoHistory /> } />
          <Route path='/vision' element={ <CoVision /> } />
          <Route path='/partner' element={ <CoPartner /> } />

          <Route path='/biz-security' element={ <BizSecurity /> } />
          <Route path='/biz-safety' element={ <BizSafety /> } />
          <Route path='/biz-data' element={ <BizData /> } />
          <Route path='/performance' element={ <BizPerformance /> } />

          <Route path='/alliance' element={ <Alliance /> } />
          <Route path='/coming-way' element={ <ComingWay /> } />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
