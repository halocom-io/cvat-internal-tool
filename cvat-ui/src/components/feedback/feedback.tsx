// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';

import { CloseCircleOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import Popover from 'antd/lib/popover';
import Text from 'antd/lib/typography/Text';
import consts from 'consts';
import React from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberIcon,
    ViberShareButton,
    VKIcon,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share';

function renderContent(): JSX.Element {
    const { GITHUB_URL, GITHUB_IMAGE_URL, GITTER_PUBLIC_URL } = consts;

    return (
        <>
            <StarOutlined />
            <Text style={{ marginLeft: '10px' }}>
                Star us on
                <a target='_blank' rel='noopener noreferrer' href={GITHUB_URL}>
                    {' '}
                    GitHub
                </a>
            </Text>
            <br />
            <LikeOutlined />
            <Text style={{ marginLeft: '10px' }}>
                Leave a
                <a target='_blank' rel='noopener noreferrer' href={GITTER_PUBLIC_URL}>
                    {' '}
                    feedback
                </a>
            </Text>
            <hr />
            <div style={{ display: 'flex' }}>
                <FacebookShareButton url={GITHUB_URL} quote='Computer Vision Annotation Tool'>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <VKShareButton
                    url={GITHUB_URL}
                    title='Computer Vision Annotation Tool'
                    image={GITHUB_IMAGE_URL}
                    description='CVAT'
                >
                    <VKIcon size={32} round />
                </VKShareButton>
                <TwitterShareButton url={GITHUB_URL} title='Computer Vision Annotation Tool' hashtags={['CVAT']}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <RedditShareButton url={GITHUB_URL} title='Computer Vision Annotation Tool'>
                    <RedditIcon size={32} round />
                </RedditShareButton>
                <LinkedinShareButton url={GITHUB_URL}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <TelegramShareButton url={GITHUB_URL} title='Computer Vision Annotation Tool'>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                <WhatsappShareButton url={GITHUB_URL} title='Computer Vision Annotation Tool'>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <ViberShareButton url={GITHUB_URL} title='Computer Vision Annotation Tool'>
                    <ViberIcon size={32} round />
                </ViberShareButton>
            </div>
            <hr />
            <Text style={{ marginTop: '50px' }}>
                Do you need help? Contact us on
                <a target='_blank' rel='noopener noreferrer' href={GITTER_PUBLIC_URL}>
                    {' '}
                    gitter
                </a>
            </Text>
        </>
    );
}

export default function Feedback(): JSX.Element {
    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <Popover
                placement='leftTop'
                title={<Text className='cvat-text-color'>Help to make CVAT better</Text>}
                content={renderContent()}
                visible={visible}
                overlayClassName='cvat-feedback-popover'
            >
                <Button
                    style={visible ? { color: '#ff4d4f' } : {}}
                    className='cvat-feedback-button'
                    type='link'
                    onClick={(): void => {
                        setVisible(!visible);
                    }}
                >
                    {visible ? <CloseCircleOutlined /> : <MessageOutlined />}
                </Button>
            </Popover>
        </>
    );
}
