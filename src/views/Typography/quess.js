const survey = [
    {
            questionType: 'Info',
            questionText: 'A comprehensive view!'
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Your Gender. Pick from below:',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Male',
                value: 'Male'
              },
              {
                optionText: 'Female',
                value: 'Female'
              },
              {
                optionText: 'Other',
                value: 'Other'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'How old are you?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: '15-20',
                value: '15-20'
              },
              {
                optionText: '21-30',
                value: '21-30'
              },
              {
                optionText: '31-40',
                value: '31-40'
              },
              {
                optionText: '41-50',
                value: '41-50'
              },
              {
                optionText: '51-60',
                value: '51-60'
              },
              {
                optionText: '60+',
                value: '60+'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Education of the respondent?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'School',
                value: 'School'
              },
              {
                optionText: 'Graduate',
                value: 'Graduate'
              },
              {
                optionText: 'Post Graduate',
                value: 'Post Graduate'
              },
              {
                optionText: 'Doctorate',
                value: 'Doctorate'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Occupation of the respondent?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Information technology',
                value: 'Information technology'
              },
              {
                optionText: 'Manufacturing',
                value: 'Manufacturing'
              },
              {
                optionText: 'Agriculture',
                value: 'Agriculture'
              },
              {
                optionText: 'Defense',
                value: 'Defense'
              },
              {
                optionText: 'Other',
                value: 'Other'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Which country do you live in?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'India',
                value: 'India'
              },
              {
                optionText: 'US',
                value: 'US'
              }
            ]
          },
        {
            questionType: 'SelectionGroup',
            questionText: 'Do you have water problem in you locality?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              },
              {
                optionText: 'At Times',
                value: 'At Times'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Is the water contaminated?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Do you have issues in drinking water?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'How many people are affected due to this water contamination?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: '0-10',
                value: '0-10'
              },
              {
                optionText: '10-20',
                value: '10-20'
              },
              {
                optionText: '30-40',
                value: '30-40'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Is this issue water scaricity reported already?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Do we get sufficient groundwater?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              },
              {
                optionText: 'At times',
                value: 'At times'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Do we get sufficient groundwater?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              },
              {
                optionText: 'At times',
                value: 'At times'
              }
            ]
          },
          {
            questionType: 'TextInput',
            questionText: 'Is there any other feedback that you would like to provide on water problem?',
            questionId: 'feedback',
            placeholderText: 'provide your feedback',
        },
        {
            questionType: 'SelectionGroup',
            questionText: 'Have you ever migrated for work?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'When did you first migrate for work?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: '2011-2012',
                value: '2011-2012'
              },
              {
                optionText: '2013-2014',
                value: '2013-2014'
              },
              {
                optionText: '2015-2016',
                value: '2015-2016'
              },
              {
                optionText: '2017-2018',
                value: '2015-2016'
              },
              {
                optionText: '2019-2020',
                value: '2015-2016'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Did you work more than one hour with pay in the latest one week?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'No',
                value: 'No'
              },
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'Family worker without pay',
                value: 'Family worker without pay'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'How did you get this this last/current job?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Assigned by the government',
                value: 'Assigned by the government'
              },
              {
                optionText: 'Through privately-run commercial employment agent',
                value: 'Through privately-run commercial employment agent'
              },
              {
                optionText: 'Applied for advertised job',
                value: 'Applied for advertised job'
              },
              {
                optionText: 'Applied directly',
                value: 'Applied directly'
              },
              {
                optionText: 'Introduced by family members/ relatives',
                value: 'Introduced by family members/ relatives '
              },
              {
                optionText: 'Introduced by friends/acquaintance',
                value: 'Introduced by friends/acquaintance'
              },
              {
                optionText: 'Other',
                value: 'Other'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Have you ever been employed?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Do you want to look for employment?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Why do you want to be employed? ',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Can earn more money',
                value: 'Can earn more money'
              },
              {
                optionText: 'Better conditions',
                value: 'Better conditions'
              },
              {
                optionText: 'More stable',
                value: 'More stable'
              }
              ,
              {
                optionText: 'Other',
                value: 'Other'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Main source of drinking water in the village ',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'PIPED WATER',
                value: 'PIPED WATER'
              },
              {
                optionText: 'Dug Well',
                value: 'Dug Well'
              },
              {
                optionText: 'WATER FROM SPRING',
                value: 'WATER FROM SPRING'
              },
              {
                optionText: 'SURFACE WATER (RIVER/DAM/LAKE/POND/STREAM/CANAL)',
                value: 'SURFACE WATER (RIVER/DAM/LAKE/POND/STREAM/CANAL)'
              },
              {
                optionText: 'Other',
                value: 'Other'
              },
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Is the drainage facility available in the village?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes',
                value: 'Yes'
              },
              {
                optionText: 'No',
                value: 'No'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Village electrification',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'NOT ELECTRIFIED',
                value: 'NOT ELECTRIFIED'
              },
              {
                optionText: 'LESS THAN 6 HOURS',
                value: 'LESS THEN 6 HOURS'
              },
              {
                optionText: 'MORE THAN 6 HOURS',
                value: 'MORE THAN 6 HOURS'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Educational facilities available in the village? ',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'YES,Primary School',
                value: 'YES,Primary School'
              },
              {
                optionText: 'YES,Middle School',
                value: 'YES,Middle School '
              },
              {
                optionText: 'YES,Secondary School',
                value: 'YES,Secondary School'
              },
              {
                optionText: 'YES,Higher Secondary School',
                value: 'YES,Higher Secondary School'
              },
              {
                optionText: 'YES,Non-formal education',
                value: 'YES,Non-formal education'
              },
              {
                optionText: 'YES,College',
                value: 'YES,College'
              },
              {
                optionText: 'No',
                value: 'No'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'During the last six months how many times cleaning, fogging drive was undertaken in the village? ',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'YES,CLEANING',
                value: 'YES'
              },
              {
                optionText: 'YES,FOGGING',
                value: 'YES'
              },
              {
                optionText: 'No',
                value: 'No '
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Any epidemic/disease reported in the village during the last one year: ',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'YES,MALARIA',
                value: 'YES,MALARIA'
              },
              {
                optionText: 'YES,CHOLERA',
                value: 'YES,CHOLERA'
              },
              {
                optionText: 'YES,DENGUE',
                value: 'YES,DENGUE'
              },
              {
                optionText: 'YES,CHICKEN POX/ CHIKUN GUINEA',
                value: 'YES,CHICKEN POX/ CHIKUN GUINEA'
              },
              {
                optionText: 'OTHER COMMUNICABLE DISEASES',
                value: 'OTHER COMMUNICABLE DISEASES'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Any natural calamity in the village during the last one year?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Yes,EARTHQUAKES',
                value: 'Yes,EARTHQUAKES'
              },
              {
                optionText: 'Yes,FLOODS',
                value: 'Yes,FLOODS'
              },
              {
                optionText: 'Yes,CYCLONE',
                value: 'Yes,CYCLONE'
              },
              {
                optionText: 'Yes,LANDSLIDES',
                value: 'Yes,LANDSLIDES'
              },
              {
                optionText: 'Other',
                value: 'Other'
              },
              {
                optionText: 'No',
                value: 'No '
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: ' Is your school a public or a private school or a government sschool?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Public school',
                value: 'Public school'
              },
              {
                optionText: 'Private school',
                value: 'Private school'
              },
              {
                optionText: 'Government school',
                value: 'Government school'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Which of the following best describes the area in which your school is located?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'village, hamlet or rural area',
                value: 'village, hamlet or rural area'
              },
              {
                optionText: 'Small town>',
                value: 'Small town>'
              },
              {
                optionText: 'Town',
                value: 'Town'
              },
              {
                optionText: 'City',
                value: 'City'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'My teacher has fair rules for the class and is extremely impartial.',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Strongly disagree',
                value: 'Strongly disagree'
              },
              {
                optionText: 'Disagree',
                value: 'Disagree'
              },
              {
                optionText: 'Neutral',
                value: 'Neutral'
              },
              {
                optionText: 'Agree',
                value: 'Agree'
              },
              {
                optionText: 'Strongly agree',
                value: 'Strongly agree'
              }
            ]
          },
          {
            questionType: 'SelectionGroup',
            questionText: 'Please state your overall rating of the school?',
            questionId: 'radio',
            questionSettings: {
              allowDeselect: false,
            },
            options: [
              {
                optionText: 'Poor',
                value: 'Poor'
              },
              {
                optionText: 'Below Average',
                value: 'Below Average'
              },
              {
                optionText: 'Average',
                value: 'Average'
              },
              {
                optionText: 'Good',
                value: 'Good'
              },
              {
                optionText: 'Excellent',
                value: 'Excellent'
              }
            ]
          },
          {
            questionType: 'TextInput',
            questionText: 'Considering your complete experience with the school, how likely would you be to recommend it to a friend or colleague on sclae of 1-10?',
            questionId: 'provide your rating',
            questionSettings: {
              allowDeselect: false,
            }
          },
          {
            questionType: 'Info',
            questionText: 'Thanks for completing this!'
          }
        ];
