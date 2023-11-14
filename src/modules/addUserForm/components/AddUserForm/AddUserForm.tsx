import React, {FC} from 'react';
import styles from './AddUserForm.module.scss';

interface AddUserFormProps {}

export const AddUserForm: FC<AddUserFormProps> = () => {
    return (
        <div className={styles.AddUserForm}>
            AddUserForm
        </div>
    );
};
