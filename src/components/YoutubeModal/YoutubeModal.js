import React from 'react';
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import './YoutubeModal.css'

const YoutubeModal = (props) => {
    return (
        <Modal
            {...props}
            centered
            size='lg'>
            <div className='player-wrap'>
                <ReactPlayer url='https://www.youtube.com/watch?v=12eWyNAc7tM' controls={true} width={940} height={660}/>
            </div>
        </Modal>
    )
}

export default YoutubeModal
