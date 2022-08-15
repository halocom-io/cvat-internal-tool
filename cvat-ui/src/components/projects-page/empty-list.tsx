// Copyright (C) 2020-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import Empty from 'antd/lib/empty';
import { Col, Row } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    notFound: boolean;
}

export default function EmptyListComponent(props: Props): JSX.Element {
    const { notFound } = props;
    return (
        <div className='cvat-empty-projects-list'>
            <Empty description={notFound ? (
                <Text strong>No results matched your search...</Text>
            ) : (
                <>
                    <Row justify='center' align='middle'>
                        <Col>
                            <Text strong>No projects created yet ...</Text>
                        </Col>
                    </Row>
                    <Row justify='center' align='middle'>
                        <Col>
                            <Text type='secondary'>To get started with your annotation project</Text>
                        </Col>
                    </Row>
                    <Row justify='center' align='middle'>
                        <Col>
                            <Link to='/projects/create'>create a new one</Link>
                        </Col>
                    </Row>
                </>
            )}
            />
        </div>
    );
}
