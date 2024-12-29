import Image from 'next/image';
import UserImage from '../../shared/images/chipinkos.jpeg';
import { UserCardProps } from '../model/types';
import styles from '../../../styles/index.module.css';


const UserCard: React.FC<UserCardProps> = ({ author }) => {

    return(
        <div className={styles.usercard}>
          <Image src={UserImage} alt={'user image'} width={200} height={200}/>
          <h1> {author.firstName.toLocaleUpperCase()} {author.lastName.toLocaleUpperCase()}</h1>
          <h3> {author.place} {author.role}</h3>
        </div>
      )

      };
export default UserCard