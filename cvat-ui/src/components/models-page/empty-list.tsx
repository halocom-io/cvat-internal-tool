// Copyright (C) 2020-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import Empty from 'antd/lib/empty';
import { Col, Row } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';
import consts from 'consts';
import React from 'react';

export default function EmptyListComponent(): JSX.Element {
    return (
        <Empty
            className='cvat-empty-models-list'
            description={
                <div>
                    <Row justify='center' align='middle'>
                        <Col>
                            <Text strong>No models deployed yet...</Text>
                        </Col>
                    </Row>
                    <Row justify='center' align='middle'>
                        <Col>
                            <Text type='secondary'>To annotate your tasks automatically</Text>
                        </Col>
                    </Row>
                    <Row justify='center' align='middle'>
                        <Col>
                            <Text type='secondary'>deploy a model with </Text>
                            <a href={`${consts.NUCLIO_GUIDE}`}>nuclio</a>
                        </Col>
                    </Row>
                </div>
            }
        />
    );
}
