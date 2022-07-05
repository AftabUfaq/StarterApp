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
        route_name:"UserActivitySummaryScreen"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'User Activity Details',
        icon: <AntDesign name="piechart" size={scale(18)} color={'#fff'} />,
        route_name:"UserActivityDetailsScreen"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'User Analytical Report',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"UserAnalyticalReportScreen"
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
        route_name:"RecruitersKPIsSummaryScreen"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Sourcer Pipeline',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"SourcerPipelineScreen"
      },
      
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Recruiter Internal Submission',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"RecruiterInternalSubmissionScreen"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Recruiter Contact Submission',
        icon: <AntDesign name="piechart" size={scale(18)} color={'#fff'} />,
        route_name:"RecruiterContactSubmissionScreen"
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
        route_name:"JobOrdersActivityScreen"
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
        route_name:"CurrentPlacementScreen"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Placement Detail',
        icon: <AntDesign name="contacts" size={scale(18)} color={'#fff'} />,
        route_name:"PlacementDetailScreen"
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
        route_name:"CommissionReportScreen"
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
        route_name:"EqualEmploymentOpportunityScreen"
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
        route_name:"CommissionReportScreen"
      },
    ],
  },
];
