// Copyright (C) 2021-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { PlusOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import { Col, Row } from 'antd/lib/grid';
import Input from 'antd/lib/input';
import { defaultVisibility, ResourceFilterHOC, SortingComponent } from 'components/resource-sorting-filtering';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { CloudStoragesQuery } from 'reducers/interfaces';

import {
    config,
    localStorageRecentCapacity,
    localStorageRecentKeyword, predefinedFilterValues,
} from './cloud-storages-filter-configuration';

const FilteringComponent = ResourceFilterHOC(
    config, localStorageRecentKeyword, localStorageRecentCapacity, predefinedFilterValues,
);

interface Props {
    onApplyFilter(filter: string | null): void;
    onApplySorting(sorting: string | null): void;
    onApplySearch(search: string | null): void;
    query: CloudStoragesQuery;
}

export default function StoragesTopBar(props: Props): JSX.Element {
    const {
        query, onApplyFilter, onApplySorting, onApplySearch,
    } = props;
    const history = useHistory();
    const [visibility, setVisibility] = useState(defaultVisibility);

    return (
        <Row justify='space-between' align='middle' className='cvat-cloud-storages-list-top-bar'>
            <Col span={24}>
                <div className='cvat-cloudstorages-page-filters-wrapper'>
                    <Input.Search
                        enterButton
                        onSearch={(phrase: string) => {
                            onApplySearch(phrase);
                        }}
                        defaultValue={query.search || ''}
                        className='cvat-cloudstorages-page-tasks-search-bar'
                        placeholder='Search ...'
                    />
                    <div>
                        <SortingComponent
                            visible={visibility.sorting}
                            onVisibleChange={(visible: boolean) => (
                                setVisibility({ ...defaultVisibility, sorting: visible })
                            )}
                            defaultFields={query.sort?.split(',') || ['-ID']}
                            sortingFields={['ID', 'Provider type', 'Updated date', 'Display name', 'Resource', 'Credentials type', 'Owner', 'Description']}
                            onApplySorting={(sorting: string | null) => {
                                onApplySorting(sorting);
                            }}
                        />
                        <FilteringComponent
                            value={query.filter}
                            predefinedVisible={visibility.predefined}
                            builderVisible={visibility.builder}
                            recentVisible={visibility.recent}
                            onPredefinedVisibleChange={(visible: boolean) => (
                                setVisibility({ ...defaultVisibility, predefined: visible })
                            )}
                            onBuilderVisibleChange={(visible: boolean) => (
                                setVisibility({ ...defaultVisibility, builder: visible })
                            )}
                            onRecentVisibleChange={(visible: boolean) => (
                                setVisibility({ ...defaultVisibility, builder: visibility.builder, recent: visible })
                            )}
                            onApplyFilter={(filter: string | null) => {
                                onApplyFilter(filter);
                            }}
                        />
                    </div>
                </div>
                <Button
                    size='large'
                    className='cvat-attach-cloud-storage-button'
                    type='primary'
                    onClick={(): void => history.push('/cloudstorages/create')}
                    icon={<PlusOutlined />}
                />
            </Col>
        </Row>
    );
}
