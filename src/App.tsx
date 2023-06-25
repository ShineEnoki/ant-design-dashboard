
import './App.css';

//components
import AppHeader from './components/AppHeader';
import SideMenu from './components/SideMenu';
import AppContent from './components/AppContent';
import AppFooter from './components/AppFooter';

//antd

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='SideMenuAndPageContent' >
        <SideMenu />
        <AppContent />
      </div>
      <AppFooter/>
    </div>
  );
}

export default App;
