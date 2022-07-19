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
  {
    title: 'Documents Library',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Manage Documents',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"ManageDocumentsSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Request Data',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"RequestDataSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Agency Disclaimer',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"AgencyDisclaimerSettings"
      },
    ],
  },
  {
    title: 'Career Portal',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Portal Setup',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"PortalSetupSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Referral Setup',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"ReferralSetupSettings"
      },
    ],
  },
  {
    title: 'Compliance',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'GDPR',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"GDPRSettings"
      }
    ],
  },
  {
    title: 'Users and Access Control',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Add User',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"AddUserSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Existing Users',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"ExistingUsersSettings"
      },
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Roles And Permissions',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"RolesAndPermissionsSettings"
      },
    ],
  },

  {
    title: 'Templates',
    items: [
      {
        id: '1',
        bgColor: colors.dark_primary_color,
        title: 'Agency Resume',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"AgencyResumeSettings"
      },
      {
        id: '2',
        bgColor: colors.dark_primary_color,
        title: 'Association Email',
        icon: <AntDesign name="table" size={scale(18)} color={'#fff'} />,
        route_name:"AssociationEmailSettings"
      },
      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Candidate Reference',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"CandidateReferenceSettings"
      },
      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Career Portal Email',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"CareerPortalEmailSettings"
      },

      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Docusign',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"DocusignSettings"
      },

      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Email',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"EmailSettings"
      },
      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: ' Job Sharing',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"JobSharingSettings"
      },
      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Miscellaneous',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"MiscellaneousSettings"
      },
      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Signature',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"SignatureSettings"
      },
      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Talent Sharing',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"TalentSharingSettings"
      },
      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Timesheet',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"Timesheet"
      },
      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Leaves',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"LeavesSettings"
      },
      {
        id: '3',
        bgColor: colors.dark_primary_color,
        title: 'Voicemail',
        icon: <AntDesign name="barchart" size={scale(18)} color={'#fff'} />,
        route_name:"VoicemailSettings"
      },
      

    ],
  },
];
