import './App.css';
import Header from './components/header';
import Balance from './components/balance';
import Transaction from './components/transaction';
import History from './components/history';
import Addtransaction from './components/addtransaction';
import Transprovider from './components/transcontext';

function App() {
  return (
    <Transprovider>
      <div className='expensetracker' >
        <Header />
        <Balance />
        <Transaction />
        <History />
        <Addtransaction />
      </div>
    </Transprovider>
  );
}

export default App;
