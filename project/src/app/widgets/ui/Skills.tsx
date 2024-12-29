import { UserSkillsProps } from '../model/types';
import styles from '../../../styles/index.module.css';

const UserSkills: React.FC<UserSkillsProps> =({skills})=>{

    return(
        <div className={styles.skills}>
            <h1>Skills</h1>
            {skills.map((skill) => (
                <div key={skill.id} className={styles.skill}>
                    {skill.value}
                </div>
      ))}
        </div>
    );
};
export default UserSkills;