import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import {colors} from '../../constants/theme';
export default [
  {
    title: 'Customization',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Label Customization',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"LableCustomizationSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Status Customization',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"StatusCustomizationSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Fields Customization',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"FieldscustomizationSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Localization',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"LocalizationSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Work Flow',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"WorkFlowSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Leaves Request',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"LeavesRequestSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Power Search Calibration',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"PowerSearchCalibrationSettings"
      },
    ],
  },
  {
    title: 'Billing',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Cancel Subscription',
        icon: <AntDesign name="contacts" size={scale(18)} color={'#fff'} />,
        route_name:"CancelSubscriptionSettings"
      },
      {
        id: '2',
        bgColor: colors.dark_primary_color,
        title: 'History',
        icon: <AntDesign name="contacts" size={scale(18)} color={'#fff'} />,
        route_name:"HistorySettings"
      },
      {
        id: '2',
        bgColor: colors.dark_primary_color,
        title: 'Pay For User Subscription',
        icon: <AntDesign name="contacts" size={scale(18)} color={'#fff'} />,
        route_name:"PayForUserSubscriptioSettings"
      },
      {
        id: '2',
        bgColor: colors.dark_primary_color,
        title: 'Pay For Consultants',
        icon: <AntDesign name="contacts" size={scale(18)} color={'#fff'} />,
        route_name:"PayForConsultantsSettings"
      },
      
      
    ],
  },
  {
    title: 'Integrations                            Job Boards                             Account ',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Integrations',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"IntegrationsSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Job Boards',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"JobBoardsSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Bulk Email',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"BulkEmailSettings"
      },
    ],
  },

];
