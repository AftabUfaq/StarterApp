import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import {colors} from '../../constants/theme';
export default [
  {
    title: 'User Activities Reports',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'User Activity Summary',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'User Activity Details',
        icon: <AntDesign name="piechart" size={scale(18)} color={'#fff'} />,
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'User Analytical Report',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
      },
    ],
  },
  {
    title: 'Recruiter Report',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Recruiters KPIs Summary',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Sourcer Pipeline',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
      },
      
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Recruiter Internal Submission',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Recruiter Contact Submission',
        icon: <AntDesign name="piechart" size={scale(18)} color={'#fff'} />,
      }
    ],
  },
  {
    title: 'Sales Reports',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Job Orders Activity',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
      },
    ],
  },
  {
    title: 'Placement Reports',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Current Placement',
        icon: <AntDesign name="contacts" size={scale(18)} color={'#fff'} />,
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Placement Detail',
        icon: <AntDesign name="contacts" size={scale(18)} color={'#fff'} />,
      },
      
    ],
  },
  {
    title: 'Companies Reports',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Companies Activity',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
      }
    ],
  },
  {
    title: 'EEO Reports',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Equal Employment Opportunity',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
      },
    ],
  },
  {
    title: 'Commission Reports',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Commission Report',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
      },
    ],
  },
];
