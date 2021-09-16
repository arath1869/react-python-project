import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ThreeDotsMenu from './ThreeDotsMenu';

function ThreeDotsModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='add-new-image' onClick={() => setShowModal(true)}>ThreeDots</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ThreeDotsMenu setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default ThreeDotsModal;
