// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { MailOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import React from 'react';

export interface ResetPasswordData {
    email: string;
}

interface Props {
    fetching: boolean;
    onSubmit(resetPasswordData: ResetPasswordData): void;
}

function ResetPasswordFormComponent({ fetching, onSubmit }: Props): JSX.Element {
    return (
        <Form onFinish={onSubmit} className='cvat-reset-password-form'>
            <Form.Item
                hasFeedback
                name='email'
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please specify an email address',
                    },
                ]}
            >
                <Input
                    autoComplete='email'
                    prefix={<MailOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                    placeholder='Email address'
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type='primary'
                    loading={fetching}
                    disabled={fetching}
                    htmlType='submit'
                    className='cvat-reset-password-form-button'
                >
                    Reset password
                </Button>
            </Form.Item>
        </Form>
    );
}

export default React.memo(ResetPasswordFormComponent);
