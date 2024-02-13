import Alert from './components/alert/Alert';

const App = () => {
  return (
    <div className='main'>
      <Alert type='danger' title='this is title' description='Lorem ipsum dolor sit amet' />
      <Alert type='success' title='this is title' description='Lorem ipsum dolor sit amet' />
      <Alert type='info' title='this is title' description='Lorem ipsum dolor sit amet' />
      <Alert type='warning' title='this is title' description='Lorem ipsum dolor sit amet' />
    </div>
  );
};

export default App;
