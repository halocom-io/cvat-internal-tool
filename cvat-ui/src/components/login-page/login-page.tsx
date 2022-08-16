// Copyright (C) 2020-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';

import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import { Col, Row } from 'antd/lib/grid';
import Layout from 'antd/lib/layout';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import FooterDrawer from 'components/login-page/intel-footer-drawer';
import consts from 'consts';
import { HaloLogo, OpenVINOIcon } from 'icons';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

import Background from '../../assets/images/login-bg.jpg';
import LoginForm, { LoginData } from './login-form';

interface LoginPageComponentProps {
    fetching: boolean;
    renderResetPassword: boolean;
    onLogin: (username: string, password: string) => void;
}

function LoginPageComponent(props: LoginPageComponentProps & RouteComponentProps): JSX.Element {
    const sizes = {
        style: {
            width: 400,
        },
    };

    const { Content } = Layout;

    const { fetching, onLogin, renderResetPassword } = props;
    const backup = () => (
        <>
            <Row style={{ height: '33%' }} />
            <Row justify='center' align='middle'>
                <Col {...sizes}>
                    <HaloLogo height={48} />
                    <Title level={2}> Login </Title>
                    <LoginForm
                        fetching={fetching}
                        onSubmit={(loginData: LoginData): void => {
                            onLogin(loginData.username, loginData.password);
                        }}
                    />
                    {/* <Row justify='start' align='top'>
                <Col>
                    <Text strong>
                        New to CVAT? Create
                        <Link to='/auth/register'> an account</Link>
                    </Text>
                </Col>
            </Row> */}
                    {renderResetPassword && (
                        <Row justify='start' align='top'>
                            <Col>
                                <Text strong>
                                    <Link to='/auth/password/reset'>Forgot your password?</Link>
                                </Text>
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
        </>
    );
    return (
        <Layout>
            <Content>
                <div className='flex justify-center items-center h-full'>
                    <div className='flex flex-row overflow-hidden shadow-lg rounded-md'>
                        <div className='relative' style={{ width: '60vw', height: '60vh' }}>
                            <img src={Background} alt='' className='w-full h-full object-cover' />
                            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50' />
                            <div className='absolute top-5 left-5 z-10 px-4 pt-2 pb-1 rounded-md bg-white animate__animated animate__fadeIn'>
                                <HaloLogo />
                            </div>
                            <div
                                className='absolute animate__animated animate__bounceInRight top-2 bottom-2 right-2 py-12 flex flex-col justify-center items-center shadow-lg bg-white z-20 rounded-md'
                                style={{ width: 300 }}
                            >
                                <Title level={2}> Login </Title>
                                <LoginForm
                                    fetching={fetching}
                                    onSubmit={(loginData: LoginData): void => {
                                        onLogin(loginData.username, loginData.password);
                                    }}
                                />
                                {renderResetPassword && (
                                    <Row justify='start' align='top' className='mt-4'>
                                        <Col>
                                            <Text strong>
                                                <Link to='/auth/password/reset'>Forgot your password?</Link>
                                            </Text>
                                        </Col>
                                    </Row>
                                )}
                                <span className='absolute bottom-3 right-3 text-zinc-400 text-xs'>
                                    Development | 0.0.1
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <FooterDrawer />
        </Layout>
    );
}

export default withRouter(LoginPageComponent);
