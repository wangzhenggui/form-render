import request from './common/request';

export const queryNames = (params) => request.get('/query/userNames/', { params });

export const querySex = (data) => request.post('/query/sex/', { data });
