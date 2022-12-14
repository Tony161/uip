import React, {useEffect, useState} from 'react';
import Content from '../components/Content';
import LoginModal from '../components/Modals/LoginModal';
import {useTasks} from '../Context/reducer';

function AdminPage() {
    const {
        state: {isAdmin = false}
    } = useTasks();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <>
            <Content isAdmin={isAdmin} />
            <LoginModal show={visible} handleClose={() => setVisible(false)} />
        </>
    );
}

export default AdminPage;
