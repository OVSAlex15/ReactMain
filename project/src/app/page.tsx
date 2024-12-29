import UserCard from './widgets/ui/Author';
import UserSkills from './widgets/ui/Skills';
import Footer from './widgets/ui/Footer';
import styles from '../styles/index.module.css';

const author = {
  firstName: 'Alexander',
  lastName: 'Ovsiannikov',
  age: 16,
  role: 'Dev',
  place: 'Omsk/Russia'
};

const skills = [
  { id: 1, value: 'HTML' },
  { id: 2, value: 'CSS' },
  { id: 3, value: 'JS' },
  { id: 4, value: 'Python' },
  {id:5, value: 'Solidity'},
  {id:6, value: 'Swift'}
];

const App: React.FC = () => {
  return (  
    <div className={styles.container}>
      <UserCard author={author}/>
      <UserSkills skills={skills}/>
      <Footer />
  </div>
  );

};
export default App
