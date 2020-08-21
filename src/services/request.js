import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useRef, useEffect} from 'react';
import {Alert, View} from 'react-native';
import AxiosInstance from './Intercepter';
import config from '../config';
import {useDispatch, useSelector} from 'react-redux';
//Post Request
export async function post(api, data) {
  return AxiosInstance.post(`${config.API_URL}${api}`, data)
    .then(res => res.data)
    .catch(err => (err && err.response ? err.response : err));
}

//Get Request
export async function get(api, data) {
  debugger;
  return AxiosInstance.get(`${config.API_URL}${api}`)
    .then(res => {
      return res.data;
    })
    .catch(err => err);
}

//Put Request
export async function put(api, data) {
  return AxiosInstance.put(`${config.API_URL}${api}`, data)
    .then(res => res.data)
    .catch(err => err.response);
}

//Delete Request
export async function deleteRequest(api, data) {
  return AxiosInstance.delete(`${config.API_URL}${api}`, data)
    .then(res => res.data)
    .catch(err => err.response);
}

//Get All Request
export async function getAll(data) {
  debugger;
  return Promise.all(data)
    .then(values => {
      debugger;
      return values;
    })
    .catch(err => {
      debugger;
      return err;
    });
}

// Get Language
