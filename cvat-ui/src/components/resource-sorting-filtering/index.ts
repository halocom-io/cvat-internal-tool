// Copyright (C) 2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';

import { Indexable } from 'reducers/interfaces';

import ResourceFilterHOC from './filtering';
import SortingComponent from './sorting';

const defaultVisibility = {
    predefined: false,
    recent: false,
    builder: false,
    sorting: false,
};

function updateHistoryFromQuery(query: Indexable): string {
    const search = new URLSearchParams({
        ...(query.filter ? { filter: query.filter } : {}),
        ...(query.search ? { search: query.search } : {}),
        ...(query.sort ? { sort: query.sort } : {}),
        ...(query.page ? { page: `${query.page}` } : {}),
    });

    return decodeURIComponent(search.toString());
}

export { defaultVisibility, ResourceFilterHOC, SortingComponent, updateHistoryFromQuery };
