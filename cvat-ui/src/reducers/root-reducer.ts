// Copyright (C) 2020-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { combineReducers, Reducer } from 'redux';

import aboutReducer from './about-reducer';
import annotationReducer from './annotation-reducer';
import authReducer from './auth-reducer';
import cloudStoragesReducer from './cloud-storages-reducer';
import exportReducer from './export-reducer';
import formatsReducer from './formats-reducer';
import importReducer from './import-reducer';
import jobsReducer from './jobs-reducer';
import modelsReducer from './models-reducer';
import notificationsReducer from './notifications-reducer';
import organizationsReducer from './organizations-reducer';
import pluginsReducer from './plugins-reducer';
import projectsReducer from './projects-reducer';
import reviewReducer from './review-reducer';
import settingsReducer from './settings-reducer';
import shareReducer from './share-reducer';
import shortcutsReducer from './shortcuts-reducer';
import tasksReducer from './tasks-reducer';
import userAgreementsReducer from './useragreements-reducer';

export default function createRootReducer(): Reducer {
    return combineReducers({
        auth: authReducer,
        projects: projectsReducer,
        tasks: tasksReducer,
        jobs: jobsReducer,
        about: aboutReducer,
        share: shareReducer,
        formats: formatsReducer,
        plugins: pluginsReducer,
        models: modelsReducer,
        notifications: notificationsReducer,
        annotation: annotationReducer,
        settings: settingsReducer,
        shortcuts: shortcutsReducer,
        userAgreements: userAgreementsReducer,
        review: reviewReducer,
        export: exportReducer,
        import: importReducer,
        cloudStorages: cloudStoragesReducer,
        organizations: organizationsReducer,
    });
}
