
import './App.css'
import Message from './Message';
import ListGroup from './Components/ListGroup';



function App() {
  const listgroup = [
    'Wash the dishes',
    'Walk the dog',
    'Clean the widnow',
    'Put shirt on',
    'That fella do not know how to explain... ',
     "code is changing and he dint't say why lol"
];

  return (
    <>
      <Message />
      <ListGroup items={listgroup} headings="Cities"/>
    </>
  )
}

export default App
