// Test data for unit tests.
/* tslint:disable */
export const v2Token = {
  "id_token": "id_token",
  "refresh_token": "refresh_token",
  "access_token": "access_token",
  "token_type": "bearer"
};

export const v3Token = {
  "id": "id",
  "result": {
    "success": true,
    "status": 200,
    "metadata": null,
    "content": {
      "id": "id",
      "modifiedBy": null,
      "modifiedAt": null,
      "createdBy": null,
      "createdAt": null,
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJUb3Bjb2RlciBVc2VyIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLmNvbSIsImhhbmRsZSI6Im1lc3MiLCJleHAiOjE1NTkzMzU4NjUsInVzZXJJZCI6Ijk5OTk4ODg4IiwiaWF0IjoxNTU5MzM1MjY1LCJlbWFpbCI6Im1lc3NAZXhhbXBsZS5jb20iLCJqdGkiOiIxYmZiNzExNi0xNjBmLTQxMGQtYjM2MC1hYzM3NDFkZDM3NWQifQ.6Kmb_VmH3LFPJGXYk6hOQ9NN1QI9IvXb33kMpb_QBkQ",
      "refreshToken": "refresh_token",
      "target": "1",
      "externalToken": "external_token"
    }
  },
  "version": "v3"
};

export const refreshedToken = {
  "id": "id",
  "result": {
    "success": true,
    "status": 200,
    "metadata": null,
    "content": {
      "id": "id",
      "modifiedBy": null,
      "modifiedAt": null,
      "createdBy": null,
      "createdAt": null,
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJUb3Bjb2RlciBVc2VyIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLmNvbSIsImhhbmRsZSI6Im1lc3MiLCJleHAiOjE1NzkzMzU4NjUsInVzZXJJZCI6Ijk5OTk4ODg4IiwiaWF0IjoxNTU5MzM1MjY1LCJlbWFpbCI6Im1lc3NAZXhhbXBsZS5jb20iLCJqdGkiOiIxYmZiNzExNi0xNjBmLTQxMGQtYjM2MC1hYzM3NDFkZDM3NWQifQ.pxSRzacohYPI_2j0jhUt7-lDYW6FbJtMg6FBAYUu2t8",
      "refreshToken": "refresh_token",
      "target": "1",
      "externalToken": "external_token"
    }
  },
  "version": "v3"
};

export const expiredToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJUb3Bjb2RlciBVc2VyIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLmNvbSIsImhhbmRsZSI6Im1lc3MiLCJleHAiOjE1NTQzMzU4NjUsInVzZXJJZCI6Ijk5OTk4ODg4IiwiaWF0IjoxNTU5MzM1MjY1LCJlbWFpbCI6Im1lc3NAZXhhbXBsZS5jb20iLCJqdGkiOiIxYmZiNzExNi0xNjBmLTQxMGQtYjM2MC1hYzM3NDFkZDM3NWQifQ.zULI6dqM8xyOgz5B_x9etVwB4WSeeeSq49OtgJrdhw8';

export const challenges = {
  "id": "-7151b0f2:16b0caee32c:3392",
  "result": {
    "success": true,
    "status": 200,
    "metadata": {
      "totalCount": 50,
      "allChallengesCount": 69,
      "myChallengesCount": 0,
      "openChallengesCount": 40,
      "ongoingChallengesCount": 29
    },
    "content": [
      {
        "updatedAt": "2019-05-31T14:17Z",
        "createdAt": "2019-05-31T05:50Z",
        "createdBy": "40020552",
        "updatedBy": "40020552",
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "DEVELOP_MARATHON_MATCH",
        "name": "TCO19 Marathon Match Round 1",
        "reviewType": "COMMUNITY",
        "id": 30092166,
        "forumId": 68894,
        "numSubmissions": 7,
        "numRegistrants": 2,
        "numSubmitters": 2,
        "registrationStartDate": "2019-05-31T06:51:12.679Z",
        "registrationEndDate": "2019-07-11T18:51:00.000Z",
        "submissionEndDate": "2019-07-11T18:57:00.000Z",
        "totalPrize": 0,
        "isPrivate": true,
        "upcomingPhase": {
          "id": 1104645,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-07-11T18:57:00.000Z",
          "scheduledEndTime": "2019-07-13T18:57:00.000Z",
          "duration": 172800000
        },
        "projectId": 22241,
        "projectName": "Community FY20",
        "currentPhases": [
          {
            "id": 1104643,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T06:51:12.679Z",
            "scheduledEndTime": "2019-07-11T18:51:00.000Z",
            "actualStartTime": "2019-05-31T06:51:12.679Z",
            "fixedStartTime": "2019-05-29T13:00:00.000Z",
            "duration": 3585600000
          },
          {
            "id": 1104644,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T07:02:02.203Z",
            "scheduledEndTime": "2019-07-11T18:57:00.000Z",
            "actualStartTime": "2019-05-31T07:02:02.203Z",
            "duration": 3585300000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1104643,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T06:51:12.679Z",
            "scheduledEndTime": "2019-07-11T18:51:00.000Z",
            "actualStartTime": "2019-05-31T06:51:12.679Z",
            "fixedStartTime": "2019-05-29T13:00:00.000Z",
            "duration": 3585600000
          },
          {
            "id": 1104644,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T07:02:02.203Z",
            "scheduledEndTime": "2019-07-11T18:57:00.000Z",
            "actualStartTime": "2019-05-31T07:02:02.203Z",
            "duration": 3585300000
          },
          {
            "id": 1104645,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-11T18:57:00.000Z",
            "scheduledEndTime": "2019-07-13T18:57:00.000Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          0,
          0
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T06:31Z",
        "createdAt": "2019-05-30T06:31Z",
        "createdBy": "40754075",
        "updatedBy": "40754075",
        "technologies": [
          "Other"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "Debugging Windows platform issues - weekend activity-PNP03",
        "reviewType": "INTERNAL",
        "id": 30092044,
        "forumId": 68787,
        "numSubmissions": 0,
        "numRegistrants": 5,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-30T13:00:46.207Z",
        "registrationEndDate": "2019-06-25T13:00:00.000Z",
        "submissionEndDate": "2019-06-30T13:15:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 35,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1103886,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-05-30T13:20:47.564Z",
          "scheduledEndTime": "2019-05-31T13:20:00.000Z",
          "duration": 86400000
        },
        "projectId": 22595,
        "projectName": "Intel CCG WIN DEBUG Q1 2019",
        "currentPhases": [
          {
            "id": 1103885,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T13:00:46.207Z",
            "scheduledEndTime": "2019-06-25T13:00:00.000Z",
            "actualStartTime": "2019-05-30T13:00:46.207Z",
            "fixedStartTime": "2019-05-30T13:00:00.000Z",
            "duration": 2246400000
          },
          {
            "id": 1103887,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T13:20:47.564Z",
            "scheduledEndTime": "2019-06-30T13:15:00.000Z",
            "actualStartTime": "2019-05-30T13:20:47.564Z",
            "duration": 2678100000
          }
        ],
        "allPhases": [
          {
            "id": 1103885,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T13:00:46.207Z",
            "scheduledEndTime": "2019-06-25T13:00:00.000Z",
            "actualStartTime": "2019-05-30T13:00:46.207Z",
            "fixedStartTime": "2019-05-30T13:00:00.000Z",
            "duration": 2246400000
          },
          {
            "id": 1103886,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-30T13:20:47.564Z",
            "scheduledEndTime": "2019-05-31T13:20:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1103887,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T13:20:47.564Z",
            "scheduledEndTime": "2019-06-30T13:15:00.000Z",
            "actualStartTime": "2019-05-30T13:20:47.564Z",
            "duration": 2678100000
          }
        ],
        "prizes": [
          35
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22595
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-15T13:17Z",
        "createdAt": "2019-04-10T20:08Z",
        "createdBy": "23272844",
        "updatedBy": "22652963",
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "DEVELOP_MARATHON_MATCH",
        "name": "PINS Explorer:  Extracting VI Ionogram Parameters",
        "reviewType": "COMMUNITY",
        "id": 30088355,
        "forumId": 65297,
        "numSubmissions": 5,
        "numRegistrants": 192,
        "numSubmitters": 3,
        "registrationStartDate": "2019-04-10T20:24:06.823Z",
        "registrationEndDate": "2019-06-28T02:59:00.000Z",
        "submissionEndDate": "2019-06-28T03:57:00.000Z",
        "totalCheckpointPrize": 0,
        "totalPrize": 50000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1078015,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-28T03:57:00.000Z",
          "scheduledEndTime": "2019-07-12T03:57:00.000Z",
          "duration": 1209600000
        },
        "projectId": 22108,
        "projectName": "BAH - Ionosphere - PINS",
        "currentPhases": [
          {
            "id": 1078013,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-04-10T20:24:06.823Z",
            "scheduledEndTime": "2019-06-28T02:59:00.000Z",
            "actualStartTime": "2019-04-10T20:24:06.823Z",
            "fixedStartTime": "2019-04-10T20:24:06.823Z",
            "duration": 6762953177
          },
          {
            "id": 1078014,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-10T20:43:06.993Z",
            "scheduledEndTime": "2019-06-28T03:57:00.000Z",
            "actualStartTime": "2019-05-10T20:43:06.993Z",
            "duration": 4173293007
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1078013,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-04-10T20:24:06.823Z",
            "scheduledEndTime": "2019-06-28T02:59:00.000Z",
            "actualStartTime": "2019-04-10T20:24:06.823Z",
            "fixedStartTime": "2019-04-10T20:24:06.823Z",
            "duration": 6762953177
          },
          {
            "id": 1078014,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-10T20:43:06.993Z",
            "scheduledEndTime": "2019-06-28T03:57:00.000Z",
            "actualStartTime": "2019-05-10T20:43:06.993Z",
            "duration": 4173293007
          },
          {
            "id": 1078015,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-28T03:57:00.000Z",
            "scheduledEndTime": "2019-07-12T03:57:00.000Z",
            "duration": 1209600000
          }
        ],
        "prizes": [
          25000,
          10000,
          5000,
          3000,
          2000,
          1000,
          1000,
          1000,
          1000,
          1000
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22108
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-28T02:41Z",
        "createdAt": "2019-05-26T19:12Z",
        "createdBy": "40020552",
        "updatedBy": "40020552",
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "DEVELOP_MARATHON_MATCH",
        "name": "Practice Match - VanishingMaze",
        "reviewType": "COMMUNITY",
        "id": 30091712,
        "forumId": 68492,
        "numSubmissions": 79,
        "numRegistrants": 47,
        "numSubmitters": 11,
        "registrationStartDate": "2019-05-27T12:00:46.686Z",
        "registrationEndDate": "2019-06-26T03:00:00.000Z",
        "submissionEndDate": "2019-06-26T12:01:00.000Z",
        "totalPrize": 0,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101517,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-26T12:01:00.000Z",
          "scheduledEndTime": "2019-06-28T12:01:00.000Z",
          "duration": 172800000
        },
        "projectId": 22241,
        "projectName": "Community FY20",
        "currentPhases": [
          {
            "id": 1101515,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-27T12:00:46.686Z",
            "scheduledEndTime": "2019-06-26T03:00:00.000Z",
            "actualStartTime": "2019-05-27T12:00:46.686Z",
            "fixedStartTime": "2019-05-27T12:00:46.686Z",
            "duration": 2559600000
          },
          {
            "id": 1101516,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-27T12:07:20.175Z",
            "scheduledEndTime": "2019-06-26T12:01:00.000Z",
            "actualStartTime": "2019-05-27T12:07:20.175Z",
            "duration": 2591679825
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101515,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-27T12:00:46.686Z",
            "scheduledEndTime": "2019-06-26T03:00:00.000Z",
            "actualStartTime": "2019-05-27T12:00:46.686Z",
            "fixedStartTime": "2019-05-27T12:00:46.686Z",
            "duration": 2559600000
          },
          {
            "id": 1101516,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-27T12:07:20.175Z",
            "scheduledEndTime": "2019-06-26T12:01:00.000Z",
            "actualStartTime": "2019-05-27T12:07:20.175Z",
            "duration": 2591679825
          },
          {
            "id": 1101517,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-26T12:01:00.000Z",
            "scheduledEndTime": "2019-06-28T12:01:00.000Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          0,
          0,
          0
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22241
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-07T10:16Z",
        "createdAt": "2019-05-07T10:16Z",
        "createdBy": "40593887",
        "updatedBy": "40593887",
        "technologies": [
          "Other"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "IFLO Elec Link changes Build for Iteration 1 for testing",
        "reviewType": "INTERNAL",
        "id": 30090257,
        "forumId": 67115,
        "numSubmissions": 0,
        "numRegistrants": 27,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-07T15:37:24.611Z",
        "registrationEndDate": "2019-06-16T15:37:00.000Z",
        "submissionEndDate": "2019-06-16T15:38:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 5,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1090762,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-05-07T15:43:30.503Z",
          "scheduledEndTime": "2019-05-08T15:43:00.000Z",
          "duration": 86400000
        },
        "projectId": 20250,
        "projectName": "NTC changes in IDX",
        "currentPhases": [
          {
            "id": 1090761,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-07T15:37:24.611Z",
            "scheduledEndTime": "2019-06-16T15:37:00.000Z",
            "actualStartTime": "2019-05-07T15:37:24.611Z",
            "fixedStartTime": "2019-05-01T13:00:00.000Z",
            "duration": 3456000000
          },
          {
            "id": 1090763,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-07T15:43:30.503Z",
            "scheduledEndTime": "2019-06-16T15:38:00.000Z",
            "actualStartTime": "2019-05-07T15:43:30.503Z",
            "duration": 3455700000
          }
        ],
        "allPhases": [
          {
            "id": 1090761,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-07T15:37:24.611Z",
            "scheduledEndTime": "2019-06-16T15:37:00.000Z",
            "actualStartTime": "2019-05-07T15:37:24.611Z",
            "fixedStartTime": "2019-05-01T13:00:00.000Z",
            "duration": 3456000000
          },
          {
            "id": 1090762,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-07T15:43:30.503Z",
            "scheduledEndTime": "2019-05-08T15:43:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1090763,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-07T15:43:30.503Z",
            "scheduledEndTime": "2019-06-16T15:38:00.000Z",
            "actualStartTime": "2019-05-07T15:43:30.503Z",
            "duration": 3455700000
          }
        ],
        "prizes": [
          5
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 20250
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-07T10:14Z",
        "createdAt": "2019-05-07T10:14Z",
        "createdBy": "40593887",
        "updatedBy": "40593887",
        "technologies": [
          "Other"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "IFLO Elec Link changes Build for Iteration 1",
        "reviewType": "INTERNAL",
        "id": 30090256,
        "forumId": 67114,
        "numSubmissions": 0,
        "numRegistrants": 14,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-07T15:22:47.544Z",
        "registrationEndDate": "2019-06-16T15:22:00.000Z",
        "submissionEndDate": "2019-06-16T15:31:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 5,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1090746,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-05-07T15:36:37.770Z",
          "scheduledEndTime": "2019-05-08T15:36:00.000Z",
          "duration": 86400000
        },
        "projectId": 20250,
        "projectName": "NTC changes in IDX",
        "currentPhases": [
          {
            "id": 1090745,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-07T15:22:47.544Z",
            "scheduledEndTime": "2019-06-16T15:22:00.000Z",
            "actualStartTime": "2019-05-07T15:22:47.544Z",
            "fixedStartTime": "2019-05-01T13:00:00.000Z",
            "duration": 3456000000
          },
          {
            "id": 1090747,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-07T15:36:37.770Z",
            "scheduledEndTime": "2019-06-16T15:31:00.000Z",
            "actualStartTime": "2019-05-07T15:36:37.770Z",
            "duration": 3455700000
          }
        ],
        "allPhases": [
          {
            "id": 1090745,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-07T15:22:47.544Z",
            "scheduledEndTime": "2019-06-16T15:22:00.000Z",
            "actualStartTime": "2019-05-07T15:22:47.544Z",
            "fixedStartTime": "2019-05-01T13:00:00.000Z",
            "duration": 3456000000
          },
          {
            "id": 1090746,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-07T15:36:37.770Z",
            "scheduledEndTime": "2019-05-08T15:36:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1090747,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-07T15:36:37.770Z",
            "scheduledEndTime": "2019-06-16T15:31:00.000Z",
            "actualStartTime": "2019-05-07T15:36:37.770Z",
            "duration": 3455700000
          }
        ],
        "prizes": [
          5
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 20250
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T13:05Z",
        "createdAt": "2019-05-31T13:01Z",
        "createdBy": "40683241",
        "updatedBy": "40683241",
        "technologies": [
          "Ab Initio"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "Testing of Source Feed_1",
        "reviewType": "INTERNAL",
        "id": 30092269,
        "forumId": 68992,
        "numSubmissions": 0,
        "numRegistrants": 2,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T13:05:58.183Z",
        "registrationEndDate": "2019-06-07T13:05:00.000Z",
        "submissionEndDate": "2019-06-12T22:47:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 212.5,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1105302,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-05-31T22:52:54.388Z",
          "scheduledEndTime": "2019-06-01T22:52:00.000Z",
          "duration": 86400000
        },
        "projectId": 22867,
        "projectName": "COMM-TELKOMSEL-BI20",
        "currentPhases": [
          {
            "id": 1105301,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T13:05:58.183Z",
            "scheduledEndTime": "2019-06-07T13:05:00.000Z",
            "actualStartTime": "2019-05-31T13:05:58.183Z",
            "fixedStartTime": "2019-05-31T05:00:00.000Z",
            "duration": 604800000
          },
          {
            "id": 1105303,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T22:52:54.388Z",
            "scheduledEndTime": "2019-06-12T22:47:00.000Z",
            "actualStartTime": "2019-05-31T22:52:54.388Z",
            "duration": 1036500000
          }
        ],
        "allPhases": [
          {
            "id": 1105301,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T13:05:58.183Z",
            "scheduledEndTime": "2019-06-07T13:05:00.000Z",
            "actualStartTime": "2019-05-31T13:05:58.183Z",
            "fixedStartTime": "2019-05-31T05:00:00.000Z",
            "duration": 604800000
          },
          {
            "id": 1105302,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-31T22:52:54.388Z",
            "scheduledEndTime": "2019-06-01T22:52:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1105303,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T22:52:54.388Z",
            "scheduledEndTime": "2019-06-12T22:47:00.000Z",
            "actualStartTime": "2019-05-31T22:52:54.388Z",
            "duration": 1036500000
          }
        ],
        "prizes": [
          212.5
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22867
          }
        ],
        "isTask": false,
        "environment": "Development",
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T18:19Z",
        "createdAt": "2019-05-31T18:16Z",
        "createdBy": "40683241",
        "updatedBy": "40683241",
        "technologies": [
          "Ab Initio"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "Testing of Fact_DD_MD_Home_Tsel_1",
        "reviewType": "INTERNAL",
        "id": 30092287,
        "forumId": 69010,
        "numSubmissions": 0,
        "numRegistrants": 5,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T18:20:01.248Z",
        "registrationEndDate": "2019-06-07T18:20:00.000Z",
        "submissionEndDate": "2019-06-12T18:20:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 255,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1105440,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-05-31T18:25:00.000Z",
          "scheduledEndTime": "2019-06-01T18:25:00.000Z",
          "duration": 86400000
        },
        "projectId": 22867,
        "projectName": "COMM-TELKOMSEL-BI20",
        "currentPhases": [
          {
            "id": 1105439,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T18:20:01.248Z",
            "scheduledEndTime": "2019-06-07T18:20:00.000Z",
            "actualStartTime": "2019-05-31T18:20:01.248Z",
            "fixedStartTime": "2019-05-31T11:00:00.000Z",
            "duration": 604800000
          }
        ],
        "allPhases": [
          {
            "id": 1105439,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T18:20:01.248Z",
            "scheduledEndTime": "2019-06-07T18:20:00.000Z",
            "actualStartTime": "2019-05-31T18:20:01.248Z",
            "fixedStartTime": "2019-05-31T11:00:00.000Z",
            "duration": 604800000
          },
          {
            "id": 1105440,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-31T18:25:00.000Z",
            "scheduledEndTime": "2019-06-01T18:25:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1105441,
            "phaseType": "Submission",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-31T18:25:00.000Z",
            "scheduledEndTime": "2019-06-12T18:20:00.000Z",
            "duration": 1036500000
          }
        ],
        "prizes": [
          255
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22867
          }
        ],
        "isTask": false,
        "environment": "development",
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T04:35Z",
        "createdAt": "2019-05-29T02:56Z",
        "createdBy": "23272844",
        "updatedBy": "22836556",
        "technologies": [
          "Python"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "LNAM Prediction by Curve Attribute and Vendor Name - Part 2",
        "reviewType": "COMMUNITY",
        "id": 30091925,
        "forumId": 68690,
        "numSubmissions": 0,
        "numRegistrants": 33,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-29T04:35:22.945Z",
        "registrationEndDate": "2019-06-11T04:35:00.000Z",
        "submissionEndDate": "2019-06-12T16:39:00.000Z",
        "platforms": [
          "Linux"
        ],
        "totalPrize": 4250,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1103011,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-12T16:39:00.000Z",
          "scheduledEndTime": "2019-06-14T16:39:00.000Z",
          "duration": 172800000
        },
        "projectId": 16905,
        "projectName": "Quartz Energy | Well Log Attribution",
        "currentPhases": [
          {
            "id": 1103009,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T04:35:22.945Z",
            "scheduledEndTime": "2019-06-11T04:35:00.000Z",
            "actualStartTime": "2019-05-29T04:35:22.945Z",
            "fixedStartTime": "2019-05-29T04:00:00.000Z",
            "duration": 1123200000
          },
          {
            "id": 1103010,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T16:44:32.047Z",
            "scheduledEndTime": "2019-06-12T16:39:00.000Z",
            "actualStartTime": "2019-05-29T16:44:32.047Z",
            "duration": 1209300000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1103009,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T04:35:22.945Z",
            "scheduledEndTime": "2019-06-11T04:35:00.000Z",
            "actualStartTime": "2019-05-29T04:35:22.945Z",
            "fixedStartTime": "2019-05-29T04:00:00.000Z",
            "duration": 1123200000
          },
          {
            "id": 1103010,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T16:44:32.047Z",
            "scheduledEndTime": "2019-06-12T16:39:00.000Z",
            "actualStartTime": "2019-05-29T16:44:32.047Z",
            "duration": 1209300000
          },
          {
            "id": 1103011,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-12T16:39:00.000Z",
            "scheduledEndTime": "2019-06-14T16:39:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1103012,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-14T16:39:00.000Z",
            "scheduledEndTime": "2019-06-15T16:39:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1103013,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-15T16:39:00.000Z",
            "scheduledEndTime": "2019-06-16T04:39:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          2500,
          1250,
          500
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 16905
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T11:43Z",
        "createdAt": "2019-05-23T17:48Z",
        "createdBy": "22005262",
        "updatedBy": "22005262",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "IDEA_GENERATION",
        "name": "\"Jupiter\" Product Popularity Model Ideation Challenge",
        "reviewType": "INTERNAL",
        "id": 30091598,
        "forumId": 678668,
        "numSubmissions": 1,
        "numRegistrants": 29,
        "numSubmitters": 1,
        "registrationStartDate": "2019-05-24T14:39:53.967Z",
        "registrationEndDate": "2019-06-11T13:38:00.000Z",
        "submissionEndDate": "2019-06-11T13:37:00.000Z",
        "totalPrize": 4800,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1100647,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-11T13:37:00.000Z",
          "scheduledEndTime": "2019-06-11T17:37:00.000Z",
          "duration": 14400000
        },
        "projectId": 22765,
        "projectName": "7-eleven Search Optimization",
        "currentPhases": [
          {
            "id": 1100645,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T14:39:53.967Z",
            "scheduledEndTime": "2019-06-11T13:38:00.000Z",
            "actualStartTime": "2019-05-24T14:39:53.967Z",
            "fixedStartTime": "2019-05-24T14:39:53.967Z",
            "duration": 1551540000
          },
          {
            "id": 1100646,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T14:45:52.210Z",
            "scheduledEndTime": "2019-06-11T13:37:00.000Z",
            "actualStartTime": "2019-05-24T14:45:52.210Z",
            "duration": 1551127790
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1100643,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-24T02:35:58.057Z",
            "scheduledEndTime": "2019-05-24T04:10:25.515Z",
            "actualStartTime": "2019-05-24T02:35:58.057Z",
            "actualEndTime": "2019-05-24T04:10:25.515Z",
            "fixedStartTime": "2019-05-24T02:35:58.057Z",
            "duration": 172800000
          },
          {
            "id": 1100644,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-24T04:10:28.142Z",
            "scheduledEndTime": "2019-05-24T14:39:49.717Z",
            "actualStartTime": "2019-05-24T04:10:28.142Z",
            "actualEndTime": "2019-05-24T14:39:49.717Z",
            "duration": 21600000
          },
          {
            "id": 1100645,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T14:39:53.967Z",
            "scheduledEndTime": "2019-06-11T13:38:00.000Z",
            "actualStartTime": "2019-05-24T14:39:53.967Z",
            "fixedStartTime": "2019-05-24T14:39:53.967Z",
            "duration": 1551540000
          },
          {
            "id": 1100646,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T14:45:52.210Z",
            "scheduledEndTime": "2019-06-11T13:37:00.000Z",
            "actualStartTime": "2019-05-24T14:45:52.210Z",
            "duration": 1551127790
          },
          {
            "id": 1100647,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T13:37:00.000Z",
            "scheduledEndTime": "2019-06-11T17:37:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1100648,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T17:37:00.000Z",
            "scheduledEndTime": "2019-06-17T17:37:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1100649,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-17T17:37:00.000Z",
            "scheduledEndTime": "2019-06-22T17:37:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          2000,
          1200,
          800,
          500,
          300
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T21:08Z",
        "createdAt": "2019-05-31T20:58Z",
        "createdBy": "22503298",
        "updatedBy": "22503298",
        "technologies": [
          "SCSS",
          "JavaScript",
          "HTML5"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "Topcoder Marketing 3.0 Home Update Prototype First2Finish Challenge",
        "reviewType": "INTERNAL",
        "id": 30092289,
        "forumId": 69012,
        "numSubmissions": 0,
        "numRegistrants": 0,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T22:00:00.000Z",
        "registrationEndDate": "2019-06-11T13:00:00.000Z",
        "submissionEndDate": "2019-06-11T13:00:00.000Z",
        "platforms": [
          "HTML"
        ],
        "totalPrize": 150,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1105451,
          "phaseType": "Registration",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-05-31T22:00:00.000Z",
          "scheduledEndTime": "2019-06-11T13:00:00.000Z",
          "fixedStartTime": "2019-05-31T22:00:00.000Z",
          "duration": 918000000
        },
        "projectId": 22316,
        "projectName": "Topcoder Marketing Website 3.0",
        "currentPhases": [],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1105451,
            "phaseType": "Registration",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-31T22:00:00.000Z",
            "scheduledEndTime": "2019-06-11T13:00:00.000Z",
            "fixedStartTime": "2019-05-31T22:00:00.000Z",
            "duration": 918000000
          },
          {
            "id": 1105452,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-31T22:05:00.000Z",
            "scheduledEndTime": "2019-06-01T22:05:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1105453,
            "phaseType": "Submission",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-31T22:05:00.000Z",
            "scheduledEndTime": "2019-06-11T13:00:00.000Z",
            "duration": 917700000
          }
        ],
        "prizes": [
          150
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T07:18Z",
        "createdAt": "2019-05-28T10:42Z",
        "createdBy": "22736560",
        "updatedBy": "40600453",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WEB_DESIGNS",
        "name": "HCL - Media Library App Design Challenge",
        "reviewType": "INTERNAL",
        "id": 30091868,
        "forumId": 679195,
        "numSubmissions": 1,
        "numRegistrants": 27,
        "numSubmitters": 1,
        "registrationStartDate": "2019-05-29T10:35:52.243Z",
        "registrationEndDate": "2019-06-04T11:59:00.000Z",
        "checkpointSubmissionEndDate": "2019-06-04T12:00:00.000Z",
        "submissionEndDate": "2019-06-11T12:00:00.000Z",
        "totalCheckpointPrize": 500,
        "totalPrize": 2750,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1102595,
          "phaseType": "Checkpoint Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-04T12:00:00.000Z",
          "scheduledEndTime": "2019-06-04T16:00:00.000Z",
          "duration": 14400000
        },
        "projectId": 20868,
        "projectName": "HCL Media Library (BH6)",
        "currentPhases": [
          {
            "id": 1102592,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T10:35:52.243Z",
            "scheduledEndTime": "2019-06-04T11:59:00.000Z",
            "actualStartTime": "2019-05-29T10:35:52.243Z",
            "fixedStartTime": "2019-05-29T10:35:00.000Z",
            "duration": 523440000
          },
          {
            "id": 1102593,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T10:40:19.172Z",
            "scheduledEndTime": "2019-06-04T12:00:00.000Z",
            "actualStartTime": "2019-05-29T10:40:19.172Z",
            "duration": 523200000
          },
          {
            "id": 1102594,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T10:40:51.898Z",
            "scheduledEndTime": "2019-06-11T12:00:00.000Z",
            "actualStartTime": "2019-05-29T10:40:51.898Z",
            "duration": 1128000000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1102590,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T10:31:25.976Z",
            "scheduledEndTime": "2019-05-29T10:32:03.813Z",
            "actualStartTime": "2019-05-29T10:31:25.976Z",
            "actualEndTime": "2019-05-29T10:32:03.813Z",
            "fixedStartTime": "2019-05-29T10:31:25.976Z",
            "duration": 172800000
          },
          {
            "id": 1102591,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T10:32:53.909Z",
            "scheduledEndTime": "2019-05-29T10:35:20.934Z",
            "actualStartTime": "2019-05-29T10:32:53.909Z",
            "actualEndTime": "2019-05-29T10:35:20.934Z",
            "duration": 21600000
          },
          {
            "id": 1102592,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T10:35:52.243Z",
            "scheduledEndTime": "2019-06-04T11:59:00.000Z",
            "actualStartTime": "2019-05-29T10:35:52.243Z",
            "fixedStartTime": "2019-05-29T10:35:00.000Z",
            "duration": 523440000
          },
          {
            "id": 1102593,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T10:40:19.172Z",
            "scheduledEndTime": "2019-06-04T12:00:00.000Z",
            "actualStartTime": "2019-05-29T10:40:19.172Z",
            "duration": 523200000
          },
          {
            "id": 1102594,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T10:40:51.898Z",
            "scheduledEndTime": "2019-06-11T12:00:00.000Z",
            "actualStartTime": "2019-05-29T10:40:51.898Z",
            "duration": 1128000000
          },
          {
            "id": 1102595,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-04T12:00:00.000Z",
            "scheduledEndTime": "2019-06-04T16:00:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1102596,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-04T16:00:00.000Z",
            "scheduledEndTime": "2019-06-06T16:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1102597,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T12:00:00.000Z",
            "scheduledEndTime": "2019-06-11T16:00:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1102598,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T16:00:00.000Z",
            "scheduledEndTime": "2019-06-17T16:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1102599,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-17T16:00:00.000Z",
            "scheduledEndTime": "2019-06-22T16:00:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1700,
          800,
          250
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 20868
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T05:58Z",
        "createdAt": "2019-05-30T05:36Z",
        "createdBy": "40035291",
        "updatedBy": "40035291",
        "technologies": [
          "ReactJS",
          "SCSS"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "Topcoder Connect - Show drawer with summary",
        "reviewType": "INTERNAL",
        "id": 30092040,
        "forumId": 68784,
        "numSubmissions": 1,
        "numRegistrants": 14,
        "numSubmitters": 1,
        "registrationStartDate": "2019-05-30T05:37:58.433Z",
        "registrationEndDate": "2019-06-10T13:37:00.000Z",
        "submissionEndDate": "2019-06-10T13:36:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 250,
        "isPrivate": false,
        "projectId": 18977,
        "projectName": "Connect V3",
        "currentPhases": [
          {
            "id": 1103861,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T05:37:58.433Z",
            "scheduledEndTime": "2019-06-10T13:37:00.000Z",
            "actualStartTime": "2019-05-30T05:37:58.433Z",
            "fixedStartTime": "2019-05-30T05:37:58.433Z",
            "duration": 979200000
          },
          {
            "id": 1103862,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T18:07:12.718Z",
            "scheduledEndTime": "2019-06-01T18:07:00.000Z",
            "actualStartTime": "2019-05-31T18:07:12.718Z",
            "duration": 86400000
          },
          {
            "id": 1103863,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T05:42:28.561Z",
            "scheduledEndTime": "2019-06-10T13:36:00.000Z",
            "actualStartTime": "2019-05-30T05:42:28.561Z",
            "duration": 978871439
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1103861,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T05:37:58.433Z",
            "scheduledEndTime": "2019-06-10T13:37:00.000Z",
            "actualStartTime": "2019-05-30T05:37:58.433Z",
            "fixedStartTime": "2019-05-30T05:37:58.433Z",
            "duration": 979200000
          },
          {
            "id": 1103862,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T18:07:12.718Z",
            "scheduledEndTime": "2019-06-01T18:07:00.000Z",
            "actualStartTime": "2019-05-31T18:07:12.718Z",
            "duration": 86400000
          },
          {
            "id": 1103863,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T05:42:28.561Z",
            "scheduledEndTime": "2019-06-10T13:36:00.000Z",
            "actualStartTime": "2019-05-30T05:42:28.561Z",
            "duration": 978871439
          }
        ],
        "prizes": [
          250
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 18977
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T11:05Z",
        "createdAt": "2019-05-31T10:59Z",
        "createdBy": "40309246",
        "updatedBy": "40309246",
        "technologies": [
          "ReactJS",
          "Node.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "Topcoder - Fix issues with the Header component",
        "reviewType": "INTERNAL",
        "id": 30092207,
        "forumId": 68929,
        "numSubmissions": 0,
        "numRegistrants": 8,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T11:00:30.252Z",
        "registrationEndDate": "2019-06-10T11:00:00.000Z",
        "submissionEndDate": "2019-06-10T11:00:00.000Z",
        "platforms": [
          "NodeJS"
        ],
        "totalPrize": 300,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1104890,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-05-31T11:05:15.525Z",
          "scheduledEndTime": "2019-06-01T11:05:00.000Z",
          "duration": 86400000
        },
        "projectId": 12591,
        "projectName": "community-app-react",
        "currentPhases": [
          {
            "id": 1104889,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:00:30.252Z",
            "scheduledEndTime": "2019-06-10T11:00:00.000Z",
            "actualStartTime": "2019-05-31T11:00:30.252Z",
            "fixedStartTime": "2019-05-31T11:00:00.000Z",
            "duration": 864000000
          },
          {
            "id": 1104891,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:05:15.525Z",
            "scheduledEndTime": "2019-06-10T11:00:00.000Z",
            "actualStartTime": "2019-05-31T11:05:15.525Z",
            "duration": 863700000
          }
        ],
        "allPhases": [
          {
            "id": 1104889,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:00:30.252Z",
            "scheduledEndTime": "2019-06-10T11:00:00.000Z",
            "actualStartTime": "2019-05-31T11:00:30.252Z",
            "fixedStartTime": "2019-05-31T11:00:00.000Z",
            "duration": 864000000
          },
          {
            "id": 1104890,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-31T11:05:15.525Z",
            "scheduledEndTime": "2019-06-01T11:05:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1104891,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:05:15.525Z",
            "scheduledEndTime": "2019-06-10T11:00:00.000Z",
            "actualStartTime": "2019-05-31T11:05:15.525Z",
            "duration": 863700000
          }
        ],
        "prizes": [
          300
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 12591
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T11:28Z",
        "createdAt": "2019-05-19T07:52Z",
        "createdBy": "22736560",
        "updatedBy": "40600453",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WEB_DESIGNS",
        "name": "IIN - API Storefront Portal Design Challenge",
        "reviewType": "INTERNAL",
        "id": 30091081,
        "forumId": 677655,
        "numSubmissions": 1,
        "numRegistrants": 37,
        "numSubmitters": 1,
        "registrationStartDate": "2019-05-28T22:03:35.896Z",
        "registrationEndDate": "2019-06-02T23:59:00.000Z",
        "checkpointSubmissionEndDate": "2019-06-03T00:00:00.000Z",
        "submissionEndDate": "2019-06-10T00:00:00.000Z",
        "totalCheckpointPrize": 500,
        "totalPrize": 2750,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1096945,
          "phaseType": "Checkpoint Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T00:00:00.000Z",
          "scheduledEndTime": "2019-06-03T04:00:00.000Z",
          "duration": 14400000
        },
        "projectId": 22695,
        "projectName": "jpc iin api storefront",
        "currentPhases": [
          {
            "id": 1096942,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T22:03:35.896Z",
            "scheduledEndTime": "2019-06-02T23:59:00.000Z",
            "actualStartTime": "2019-05-28T22:03:35.896Z",
            "fixedStartTime": "2019-05-28T22:00:00.000Z",
            "duration": 438960000
          },
          {
            "id": 1096943,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T22:08:21.127Z",
            "scheduledEndTime": "2019-06-03T00:00:00.000Z",
            "actualStartTime": "2019-05-28T22:08:21.127Z",
            "duration": 438720000
          },
          {
            "id": 1096944,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T22:08:41.110Z",
            "scheduledEndTime": "2019-06-10T00:00:00.000Z",
            "actualStartTime": "2019-05-28T22:08:41.110Z",
            "duration": 1043520000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1096940,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-28T22:00:29.203Z",
            "scheduledEndTime": "2019-05-28T22:00:44.951Z",
            "actualStartTime": "2019-05-28T22:00:29.203Z",
            "actualEndTime": "2019-05-28T22:00:44.951Z",
            "fixedStartTime": "2019-05-28T21:59:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1096941,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-28T22:01:02.127Z",
            "scheduledEndTime": "2019-05-28T22:02:35.102Z",
            "actualStartTime": "2019-05-28T22:01:02.127Z",
            "actualEndTime": "2019-05-28T22:02:35.102Z",
            "duration": 21600000
          },
          {
            "id": 1096942,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T22:03:35.896Z",
            "scheduledEndTime": "2019-06-02T23:59:00.000Z",
            "actualStartTime": "2019-05-28T22:03:35.896Z",
            "fixedStartTime": "2019-05-28T22:00:00.000Z",
            "duration": 438960000
          },
          {
            "id": 1096943,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T22:08:21.127Z",
            "scheduledEndTime": "2019-06-03T00:00:00.000Z",
            "actualStartTime": "2019-05-28T22:08:21.127Z",
            "duration": 438720000
          },
          {
            "id": 1096944,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T22:08:41.110Z",
            "scheduledEndTime": "2019-06-10T00:00:00.000Z",
            "actualStartTime": "2019-05-28T22:08:41.110Z",
            "duration": 1043520000
          },
          {
            "id": 1096945,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T00:00:00.000Z",
            "scheduledEndTime": "2019-06-03T04:00:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1096946,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T04:00:00.000Z",
            "scheduledEndTime": "2019-06-05T04:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1096947,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-10T00:00:00.000Z",
            "scheduledEndTime": "2019-06-10T04:00:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1096948,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-10T04:00:00.000Z",
            "scheduledEndTime": "2019-06-16T04:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1096949,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-16T04:00:00.000Z",
            "scheduledEndTime": "2019-06-21T04:00:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1700,
          800,
          250
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22695
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T04:15Z",
        "createdAt": "2019-05-26T04:05Z",
        "createdBy": "23272844",
        "updatedBy": "8544935",
        "technologies": [
          "MySQL",
          "Python"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Mud Log Image Tagging Challenge - Multi-line Adjustments",
        "reviewType": "INTERNAL",
        "id": 30091707,
        "forumId": 68489,
        "numSubmissions": 5,
        "numRegistrants": 44,
        "numSubmitters": 5,
        "registrationStartDate": "2019-05-26T17:59:47.036Z",
        "registrationEndDate": "2019-06-08T17:59:00.000Z",
        "submissionEndDate": "2019-06-09T18:10:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 4000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101459,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-09T18:10:00.000Z",
          "scheduledEndTime": "2019-06-11T18:10:00.000Z",
          "duration": 172800000
        },
        "projectId": 22217,
        "projectName": "Quartz Energy - Mud Logs v2",
        "currentPhases": [
          {
            "id": 1101457,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-26T17:59:47.036Z",
            "scheduledEndTime": "2019-06-08T17:59:00.000Z",
            "actualStartTime": "2019-05-26T17:59:47.036Z",
            "fixedStartTime": "2019-05-26T04:00:00.000Z",
            "duration": 1123200000
          },
          {
            "id": 1101458,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-26T18:15:33.135Z",
            "scheduledEndTime": "2019-06-09T18:10:00.000Z",
            "actualStartTime": "2019-05-26T18:15:33.135Z",
            "duration": 1209300000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101457,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-26T17:59:47.036Z",
            "scheduledEndTime": "2019-06-08T17:59:00.000Z",
            "actualStartTime": "2019-05-26T17:59:47.036Z",
            "fixedStartTime": "2019-05-26T04:00:00.000Z",
            "duration": 1123200000
          },
          {
            "id": 1101458,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-26T18:15:33.135Z",
            "scheduledEndTime": "2019-06-09T18:10:00.000Z",
            "actualStartTime": "2019-05-26T18:15:33.135Z",
            "duration": 1209300000
          },
          {
            "id": 1101459,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-09T18:10:00.000Z",
            "scheduledEndTime": "2019-06-11T18:10:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1101460,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T18:10:00.000Z",
            "scheduledEndTime": "2019-06-12T18:10:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1101461,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-12T18:10:00.000Z",
            "scheduledEndTime": "2019-06-13T06:10:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          4000
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22217
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T05:40Z",
        "createdAt": "2019-05-30T05:34Z",
        "createdBy": "40035291",
        "updatedBy": "40035291",
        "technologies": [
          "ReactJS",
          "SCSS"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "Topcoder Connect - Show project estimation",
        "reviewType": "INTERNAL",
        "id": 30092039,
        "forumId": 68782,
        "numSubmissions": 8,
        "numRegistrants": 14,
        "numSubmitters": 2,
        "registrationStartDate": "2019-05-30T05:35:20.060Z",
        "registrationEndDate": "2019-06-09T05:35:00.000Z",
        "submissionEndDate": "2019-06-09T05:35:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 100,
        "isPrivate": false,
        "projectId": 18977,
        "projectName": "Connect V3",
        "currentPhases": [
          {
            "id": 1103855,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T05:35:20.060Z",
            "scheduledEndTime": "2019-06-09T05:35:00.000Z",
            "actualStartTime": "2019-05-30T05:35:20.060Z",
            "fixedStartTime": "2019-05-30T05:00:00.000Z",
            "duration": 864000000
          },
          {
            "id": 1103856,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T05:48:56.762Z",
            "scheduledEndTime": "2019-06-01T05:48:00.000Z",
            "actualStartTime": "2019-05-31T05:48:56.762Z",
            "duration": 86400000
          },
          {
            "id": 1103857,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T05:40:55.001Z",
            "scheduledEndTime": "2019-06-09T05:35:00.000Z",
            "actualStartTime": "2019-05-30T05:40:55.001Z",
            "duration": 863700000
          }
        ],
        "allPhases": [
          {
            "id": 1103855,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T05:35:20.060Z",
            "scheduledEndTime": "2019-06-09T05:35:00.000Z",
            "actualStartTime": "2019-05-30T05:35:20.060Z",
            "fixedStartTime": "2019-05-30T05:00:00.000Z",
            "duration": 864000000
          },
          {
            "id": 1103856,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T05:48:56.762Z",
            "scheduledEndTime": "2019-06-01T05:48:00.000Z",
            "actualStartTime": "2019-05-31T05:48:56.762Z",
            "duration": 86400000
          },
          {
            "id": 1103857,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T05:40:55.001Z",
            "scheduledEndTime": "2019-06-09T05:35:00.000Z",
            "actualStartTime": "2019-05-30T05:40:55.001Z",
            "duration": 863700000
          }
        ],
        "prizes": [
          100
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 18977
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T01:46Z",
        "createdAt": "2019-05-27T11:51Z",
        "createdBy": "40600453",
        "updatedBy": "15391415",
        "technologies": [
          "QA"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Topcoder QA Fun Challenge Series 4 - Capturing videos and browser logs",
        "reviewType": "COMMUNITY",
        "id": 30091792,
        "forumId": 68563,
        "numSubmissions": 0,
        "numRegistrants": 0,
        "numSubmitters": 0,
        "registrationStartDate": "2019-06-01T13:00:00.000Z",
        "registrationEndDate": "2019-06-08T13:00:00.000Z",
        "submissionEndDate": "2019-06-08T13:00:00.000Z",
        "platforms": [
          "HTML"
        ],
        "totalPrize": 0,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1102127,
          "phaseType": "Registration",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-01T13:00:00.000Z",
          "scheduledEndTime": "2019-06-08T13:00:00.000Z",
          "fixedStartTime": "2019-06-01T13:00:00.000Z",
          "duration": 604800000
        },
        "projectId": 22241,
        "projectName": "Community FY20",
        "currentPhases": [],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1102127,
            "phaseType": "Registration",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-01T13:00:00.000Z",
            "scheduledEndTime": "2019-06-08T13:00:00.000Z",
            "fixedStartTime": "2019-06-01T13:00:00.000Z",
            "duration": 604800000
          },
          {
            "id": 1102128,
            "phaseType": "Submission",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-01T13:05:00.000Z",
            "scheduledEndTime": "2019-06-08T13:00:00.000Z",
            "duration": 604500000
          },
          {
            "id": 1102129,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-08T13:00:00.000Z",
            "scheduledEndTime": "2019-06-10T13:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1102130,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-10T13:00:00.000Z",
            "scheduledEndTime": "2019-06-11T13:00:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1102131,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T13:00:00.000Z",
            "scheduledEndTime": "2019-06-12T01:00:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          0
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-20T17:10Z",
        "createdAt": "2019-03-06T13:35Z",
        "createdBy": "40140108",
        "updatedBy": "40140108",
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "DEVELOP_MARATHON_MATCH",
        "name": "PAM Wind MM",
        "reviewType": "COMMUNITY",
        "id": 30085523,
        "forumId": 62563,
        "numSubmissions": 36,
        "numRegistrants": 121,
        "numSubmitters": 5,
        "registrationStartDate": "2019-05-20T14:01:06.446Z",
        "registrationEndDate": "2019-06-07T12:59:00.000Z",
        "submissionEndDate": "2019-06-07T13:04:00.000Z",
        "totalPrize": 21000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1058245,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-07T13:04:00.000Z",
          "scheduledEndTime": "2019-06-09T13:04:00.000Z",
          "duration": 172800000
        },
        "projectId": 20693,
        "projectName": "UC 2 - PAM WInd",
        "currentPhases": [
          {
            "id": 1058243,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-20T14:01:06.446Z",
            "scheduledEndTime": "2019-06-07T12:59:00.000Z",
            "actualStartTime": "2019-05-20T14:01:06.446Z",
            "fixedStartTime": "2019-05-20T14:00:00.000Z",
            "duration": 1551533554
          },
          {
            "id": 1058244,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-20T14:09:46.922Z",
            "scheduledEndTime": "2019-06-07T13:04:00.000Z",
            "actualStartTime": "2019-05-20T14:09:46.922Z",
            "duration": 1551300000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1058243,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-20T14:01:06.446Z",
            "scheduledEndTime": "2019-06-07T12:59:00.000Z",
            "actualStartTime": "2019-05-20T14:01:06.446Z",
            "fixedStartTime": "2019-05-20T14:00:00.000Z",
            "duration": 1551533554
          },
          {
            "id": 1058244,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-20T14:09:46.922Z",
            "scheduledEndTime": "2019-06-07T13:04:00.000Z",
            "actualStartTime": "2019-05-20T14:09:46.922Z",
            "duration": 1551300000
          },
          {
            "id": 1058245,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-07T13:04:00.000Z",
            "scheduledEndTime": "2019-06-09T13:04:00.000Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          8000,
          6000,
          4000,
          2000,
          1000
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 20693
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T22:20Z",
        "createdAt": "2019-05-24T16:45Z",
        "createdBy": "22706873",
        "updatedBy": "22706873",
        "technologies": [
          "Meteor.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Thor PDU Mass Commissioning Meteor Code Quality Challenge",
        "reviewType": "COMMUNITY",
        "id": 30091672,
        "forumId": 68462,
        "numSubmissions": 0,
        "numRegistrants": 22,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-30T04:43:09.691Z",
        "registrationEndDate": "2019-06-02T04:43:00.000Z",
        "submissionEndDate": "2019-06-07T04:42:00.000Z",
        "platforms": [
          "NodeJS"
        ],
        "totalPrize": 3000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101171,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-07T04:42:00.000Z",
          "scheduledEndTime": "2019-06-09T04:42:00.000Z",
          "duration": 172800000
        },
        "projectId": 18183,
        "projectName": "Eaton - PDU Mass Commissioning Tool",
        "currentPhases": [
          {
            "id": 1101169,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T04:43:09.691Z",
            "scheduledEndTime": "2019-06-02T04:43:00.000Z",
            "actualStartTime": "2019-05-30T04:43:09.691Z",
            "fixedStartTime": "2019-05-30T04:43:09.691Z",
            "duration": 259200000
          },
          {
            "id": 1101170,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T04:49:24.274Z",
            "scheduledEndTime": "2019-06-07T04:42:00.000Z",
            "actualStartTime": "2019-05-30T04:49:24.274Z",
            "duration": 690815726
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101169,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T04:43:09.691Z",
            "scheduledEndTime": "2019-06-02T04:43:00.000Z",
            "actualStartTime": "2019-05-30T04:43:09.691Z",
            "fixedStartTime": "2019-05-30T04:43:09.691Z",
            "duration": 259200000
          },
          {
            "id": 1101170,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T04:49:24.274Z",
            "scheduledEndTime": "2019-06-07T04:42:00.000Z",
            "actualStartTime": "2019-05-30T04:49:24.274Z",
            "duration": 690815726
          },
          {
            "id": 1101171,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-07T04:42:00.000Z",
            "scheduledEndTime": "2019-06-09T04:42:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1101172,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-09T04:42:00.000Z",
            "scheduledEndTime": "2019-06-10T04:42:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1101173,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-10T04:42:00.000Z",
            "scheduledEndTime": "2019-06-10T16:42:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          2000,
          1000
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 18183
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T11:38Z",
        "createdAt": "2019-05-25T19:37Z",
        "createdBy": "22923055",
        "updatedBy": "23274118",
        "technologies": [
          "ReactJS"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "BT-TOSCA (Hello ReactJS and Weblogic 12c)",
        "reviewType": "INTERNAL",
        "id": 30091705,
        "forumId": 68487,
        "numSubmissions": 6,
        "numRegistrants": 54,
        "numSubmitters": 6,
        "registrationStartDate": "2019-05-25T19:46:30.467Z",
        "registrationEndDate": "2019-06-06T13:46:00.000Z",
        "submissionEndDate": "2019-06-06T13:42:00.000Z",
        "platforms": [
          "HTML"
        ],
        "totalPrize": 450,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101443,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-06T13:42:00.000Z",
          "scheduledEndTime": "2019-06-08T13:42:00.000Z",
          "duration": 172800000
        },
        "projectId": 21580,
        "projectName": "BT - Tosca Framework Design",
        "currentPhases": [
          {
            "id": 1101441,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T19:46:30.467Z",
            "scheduledEndTime": "2019-06-06T13:46:00.000Z",
            "actualStartTime": "2019-05-25T19:46:30.467Z",
            "fixedStartTime": "2019-05-25T19:46:00.000Z",
            "duration": 1015200000
          },
          {
            "id": 1101442,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T19:51:56.837Z",
            "scheduledEndTime": "2019-06-06T13:42:00.000Z",
            "actualStartTime": "2019-05-25T19:51:56.837Z",
            "duration": 1014660000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101441,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T19:46:30.467Z",
            "scheduledEndTime": "2019-06-06T13:46:00.000Z",
            "actualStartTime": "2019-05-25T19:46:30.467Z",
            "fixedStartTime": "2019-05-25T19:46:00.000Z",
            "duration": 1015200000
          },
          {
            "id": 1101442,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T19:51:56.837Z",
            "scheduledEndTime": "2019-06-06T13:42:00.000Z",
            "actualStartTime": "2019-05-25T19:51:56.837Z",
            "duration": 1014660000
          },
          {
            "id": 1101443,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T13:42:00.000Z",
            "scheduledEndTime": "2019-06-08T13:42:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1101444,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-08T13:42:00.000Z",
            "scheduledEndTime": "2019-06-09T13:42:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1101445,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-09T13:42:00.000Z",
            "scheduledEndTime": "2019-06-10T01:42:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          150,
          150,
          150
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 21580
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T11:12Z",
        "createdAt": "2019-05-30T17:34Z",
        "createdBy": "22706873",
        "updatedBy": "22706873",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "APPLICATION_FRONT_END_DESIGN",
        "name": "Talaria Forecasting Web App Design Challenge",
        "reviewType": "INTERNAL",
        "id": 30092118,
        "forumId": 679632,
        "numSubmissions": 1,
        "numRegistrants": 8,
        "numSubmitters": 1,
        "registrationStartDate": "2019-05-31T11:13:00.108Z",
        "registrationEndDate": "2019-06-03T11:13:00.000Z",
        "checkpointSubmissionEndDate": "2019-06-03T11:15:00.000Z",
        "submissionEndDate": "2019-06-06T11:15:00.000Z",
        "totalCheckpointPrize": 500,
        "totalPrize": 2000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1104311,
          "phaseType": "Checkpoint Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T11:15:00.000Z",
          "scheduledEndTime": "2019-06-03T15:15:00.000Z",
          "duration": 14400000
        },
        "projectId": 21925,
        "projectName": " CFO Forecasting",
        "currentPhases": [
          {
            "id": 1104308,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:13:00.108Z",
            "scheduledEndTime": "2019-06-03T11:13:00.000Z",
            "actualStartTime": "2019-05-31T11:13:00.108Z",
            "fixedStartTime": "2019-05-31T04:00:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1104309,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:20:51.161Z",
            "scheduledEndTime": "2019-06-03T11:15:00.000Z",
            "actualStartTime": "2019-05-31T11:20:51.161Z",
            "duration": 258900000
          },
          {
            "id": 1104310,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:20:56.482Z",
            "scheduledEndTime": "2019-06-06T11:15:00.000Z",
            "actualStartTime": "2019-05-31T11:20:56.482Z",
            "duration": 518100000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1104306,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-30T17:40:12.340Z",
            "scheduledEndTime": "2019-05-30T17:40:44.590Z",
            "actualStartTime": "2019-05-30T17:40:12.340Z",
            "actualEndTime": "2019-05-30T17:40:44.590Z",
            "fixedStartTime": "2019-05-30T17:40:12.340Z",
            "duration": 172800000
          },
          {
            "id": 1104307,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-30T22:49:47.107Z",
            "scheduledEndTime": "2019-05-31T02:32:40.595Z",
            "actualStartTime": "2019-05-30T22:49:47.107Z",
            "actualEndTime": "2019-05-31T02:32:40.595Z",
            "duration": 21600000
          },
          {
            "id": 1104308,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:13:00.108Z",
            "scheduledEndTime": "2019-06-03T11:13:00.000Z",
            "actualStartTime": "2019-05-31T11:13:00.108Z",
            "fixedStartTime": "2019-05-31T04:00:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1104309,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:20:51.161Z",
            "scheduledEndTime": "2019-06-03T11:15:00.000Z",
            "actualStartTime": "2019-05-31T11:20:51.161Z",
            "duration": 258900000
          },
          {
            "id": 1104310,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T11:20:56.482Z",
            "scheduledEndTime": "2019-06-06T11:15:00.000Z",
            "actualStartTime": "2019-05-31T11:20:56.482Z",
            "duration": 518100000
          },
          {
            "id": 1104311,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T11:15:00.000Z",
            "scheduledEndTime": "2019-06-03T15:15:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1104312,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T15:15:00.000Z",
            "scheduledEndTime": "2019-06-05T15:15:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1104313,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T11:15:00.000Z",
            "scheduledEndTime": "2019-06-06T15:15:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1104314,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T15:15:00.000Z",
            "scheduledEndTime": "2019-06-12T15:15:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1104315,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-12T15:15:00.000Z",
            "scheduledEndTime": "2019-06-17T15:15:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1300,
          550,
          150
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 21925
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T16:07Z",
        "createdAt": "2019-05-30T15:41Z",
        "createdBy": "22706873",
        "updatedBy": "22706873",
        "technologies": [
          "HTML",
          "JavaScript",
          "CSS",
          "PHP",
          "SQL"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Acme Inc Hub Wordpress Theme Build Code Challenge",
        "reviewType": "COMMUNITY",
        "id": 30092105,
        "forumId": 68839,
        "numSubmissions": 0,
        "numRegistrants": 17,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-30T16:07:27.949Z",
        "registrationEndDate": "2019-06-03T01:07:00.000Z",
        "submissionEndDate": "2019-06-06T09:42:00.000Z",
        "platforms": [
          "Wordpress"
        ],
        "totalPrize": 2100,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1104211,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-06T09:42:00.000Z",
          "scheduledEndTime": "2019-06-08T09:42:00.000Z",
          "duration": 172800000
        },
        "projectId": 22712,
        "projectName": "ITS Dublin Hub Website Development (Word Press)",
        "currentPhases": [
          {
            "id": 1104209,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T16:07:27.949Z",
            "scheduledEndTime": "2019-06-03T01:07:00.000Z",
            "actualStartTime": "2019-05-30T16:07:27.949Z",
            "fixedStartTime": "2019-05-30T04:00:00.000Z",
            "duration": 291600000
          },
          {
            "id": 1104210,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T00:47:41.511Z",
            "scheduledEndTime": "2019-06-06T09:42:00.000Z",
            "actualStartTime": "2019-05-31T00:47:41.511Z",
            "duration": 550500000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1104209,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T16:07:27.949Z",
            "scheduledEndTime": "2019-06-03T01:07:00.000Z",
            "actualStartTime": "2019-05-30T16:07:27.949Z",
            "fixedStartTime": "2019-05-30T04:00:00.000Z",
            "duration": 291600000
          },
          {
            "id": 1104210,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T00:47:41.511Z",
            "scheduledEndTime": "2019-06-06T09:42:00.000Z",
            "actualStartTime": "2019-05-31T00:47:41.511Z",
            "duration": 550500000
          },
          {
            "id": 1104211,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T09:42:00.000Z",
            "scheduledEndTime": "2019-06-08T09:42:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1104212,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-08T09:42:00.000Z",
            "scheduledEndTime": "2019-06-09T09:42:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1104213,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-09T09:42:00.000Z",
            "scheduledEndTime": "2019-06-09T21:42:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          1400,
          700
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22712
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T22:18Z",
        "createdAt": "2019-05-30T22:04Z",
        "createdBy": "151743",
        "updatedBy": "151743",
        "technologies": [
          "C++",
          "JavaScript"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Hercules C++ Spark App - AAMP media player integration with MSE API",
        "reviewType": "COMMUNITY",
        "id": 30092149,
        "forumId": 68344,
        "numSubmissions": 0,
        "numRegistrants": 15,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T07:15:35.804Z",
        "registrationEndDate": "2019-06-06T07:15:00.000Z",
        "submissionEndDate": "2019-06-06T07:16:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 3600,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1104529,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-06T07:16:00.000Z",
          "scheduledEndTime": "2019-06-08T07:16:00.000Z",
          "duration": 172800000
        },
        "projectId": 22517,
        "projectName": "Spark Media",
        "currentPhases": [
          {
            "id": 1104527,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T07:15:35.804Z",
            "scheduledEndTime": "2019-06-06T07:15:00.000Z",
            "actualStartTime": "2019-05-31T07:15:35.804Z",
            "fixedStartTime": "2019-05-30T22:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1104528,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T07:21:16.182Z",
            "scheduledEndTime": "2019-06-06T07:16:00.000Z",
            "actualStartTime": "2019-05-31T07:21:16.182Z",
            "duration": 518100000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1104527,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T07:15:35.804Z",
            "scheduledEndTime": "2019-06-06T07:15:00.000Z",
            "actualStartTime": "2019-05-31T07:15:35.804Z",
            "fixedStartTime": "2019-05-30T22:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1104528,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T07:21:16.182Z",
            "scheduledEndTime": "2019-06-06T07:16:00.000Z",
            "actualStartTime": "2019-05-31T07:21:16.182Z",
            "duration": 518100000
          },
          {
            "id": 1104529,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T07:16:00.000Z",
            "scheduledEndTime": "2019-06-08T07:16:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1104530,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-08T07:16:00.000Z",
            "scheduledEndTime": "2019-06-09T07:16:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1104531,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-09T07:16:00.000Z",
            "scheduledEndTime": "2019-06-09T19:16:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          2400,
          1200
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22517
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T18:03Z",
        "createdAt": "2019-05-31T17:55Z",
        "createdBy": "310233",
        "updatedBy": "310233",
        "technologies": [
          "Java",
          "MySQL"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Service Theater HPE3PAR Extension - Backend Dev Sprint 1",
        "reviewType": "COMMUNITY",
        "id": 30092283,
        "forumId": 67079,
        "numSubmissions": 0,
        "numRegistrants": 15,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T17:58:24.107Z",
        "registrationEndDate": "2019-06-05T17:58:00.000Z",
        "submissionEndDate": "2019-06-05T18:03:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 2000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1105415,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-05T18:03:00.000Z",
          "scheduledEndTime": "2019-06-07T18:03:00.000Z",
          "duration": 172800000
        },
        "projectId": 22005,
        "projectName": "Service  Theater  - Storage Device - 01 ",
        "currentPhases": [
          {
            "id": 1105413,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T17:58:24.107Z",
            "scheduledEndTime": "2019-06-05T17:58:00.000Z",
            "actualStartTime": "2019-05-31T17:58:24.107Z",
            "fixedStartTime": "2019-05-31T14:55:00.000Z",
            "duration": 432000000
          },
          {
            "id": 1105414,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T18:03:11.470Z",
            "scheduledEndTime": "2019-06-05T18:03:00.000Z",
            "actualStartTime": "2019-05-31T18:03:11.470Z",
            "duration": 432000000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1105413,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T17:58:24.107Z",
            "scheduledEndTime": "2019-06-05T17:58:00.000Z",
            "actualStartTime": "2019-05-31T17:58:24.107Z",
            "fixedStartTime": "2019-05-31T14:55:00.000Z",
            "duration": 432000000
          },
          {
            "id": 1105414,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T18:03:11.470Z",
            "scheduledEndTime": "2019-06-05T18:03:00.000Z",
            "actualStartTime": "2019-05-31T18:03:11.470Z",
            "duration": 432000000
          },
          {
            "id": 1105415,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T18:03:00.000Z",
            "scheduledEndTime": "2019-06-07T18:03:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1105416,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-07T18:03:00.000Z",
            "scheduledEndTime": "2019-06-08T18:03:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1105417,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-08T18:03:00.000Z",
            "scheduledEndTime": "2019-06-09T06:03:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          1400,
          600
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22005
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T15:16Z",
        "createdAt": "2019-05-31T15:01Z",
        "createdBy": "40309246",
        "updatedBy": "40309246",
        "technologies": [
          "Angular 2+",
          "Less"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Redwood - Bluesource extract common styles",
        "reviewType": "COMMUNITY",
        "id": 30092273,
        "forumId": 68996,
        "numSubmissions": 0,
        "numRegistrants": 18,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T15:16:54.680Z",
        "registrationEndDate": "2019-06-05T15:16:00.000Z",
        "submissionEndDate": "2019-06-05T15:16:00.000Z",
        "platforms": [
          "NodeJS"
        ],
        "totalPrize": 1200,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1105338,
          "phaseType": "Submission",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-05-31T15:21:00.000Z",
          "scheduledEndTime": "2019-06-05T15:16:00.000Z",
          "duration": 431700000
        },
        "projectId": 21196,
        "projectName": "Wellmark",
        "currentPhases": [
          {
            "id": 1105337,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T15:16:54.680Z",
            "scheduledEndTime": "2019-06-05T15:16:00.000Z",
            "actualStartTime": "2019-05-31T15:16:54.680Z",
            "fixedStartTime": "2019-05-31T15:10:00.000Z",
            "duration": 432000000
          }
        ],
        "allPhases": [
          {
            "id": 1105337,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T15:16:54.680Z",
            "scheduledEndTime": "2019-06-05T15:16:00.000Z",
            "actualStartTime": "2019-05-31T15:16:54.680Z",
            "fixedStartTime": "2019-05-31T15:10:00.000Z",
            "duration": 432000000
          },
          {
            "id": 1105338,
            "phaseType": "Submission",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-05-31T15:21:00.000Z",
            "scheduledEndTime": "2019-06-05T15:16:00.000Z",
            "duration": 431700000
          },
          {
            "id": 1105339,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T15:16:00.000Z",
            "scheduledEndTime": "2019-06-07T15:16:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1105340,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-07T15:16:00.000Z",
            "scheduledEndTime": "2019-06-08T15:16:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1105341,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-08T15:16:00.000Z",
            "scheduledEndTime": "2019-06-09T03:16:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          800,
          400
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 21196
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-28T23:38Z",
        "createdAt": "2019-05-28T10:03Z",
        "createdBy": "22503298",
        "updatedBy": "40694148",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WIREFRAMES",
        "name": "Image Analytics Wireframe Challenge",
        "reviewType": "INTERNAL",
        "id": 30091862,
        "forumId": 679184,
        "numSubmissions": 8,
        "numRegistrants": 18,
        "numSubmitters": 8,
        "registrationStartDate": "2019-05-28T13:04:24.367Z",
        "registrationEndDate": "2019-05-31T13:04:35.462Z",
        "checkpointSubmissionEndDate": "2019-05-31T13:04:51.884Z",
        "submissionEndDate": "2019-06-05T13:04:00.000Z",
        "totalCheckpointPrize": 500,
        "totalPrize": 1550,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1102547,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-05T13:04:00.000Z",
          "scheduledEndTime": "2019-06-05T17:04:00.000Z",
          "duration": 14400000
        },
        "projectId": 22506,
        "projectName": "HPI Image Analytics PoC ? UI Prototype",
        "currentPhases": [
          {
            "id": 1102544,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T13:11:50.079Z",
            "scheduledEndTime": "2019-06-05T13:04:00.000Z",
            "actualStartTime": "2019-05-28T13:11:50.079Z",
            "duration": 690780000
          },
          {
            "id": 1102546,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T15:10:51.636Z",
            "scheduledEndTime": "2019-06-02T15:10:00.000Z",
            "actualStartTime": "2019-05-31T15:10:51.636Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1102540,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-28T10:21:36.180Z",
            "scheduledEndTime": "2019-05-28T10:30:51.566Z",
            "actualStartTime": "2019-05-28T10:21:36.180Z",
            "actualEndTime": "2019-05-28T10:30:51.566Z",
            "fixedStartTime": "2019-05-28T10:21:36.180Z",
            "duration": 172800000
          },
          {
            "id": 1102541,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-28T10:33:06.604Z",
            "scheduledEndTime": "2019-05-28T10:54:47.878Z",
            "actualStartTime": "2019-05-28T10:33:06.604Z",
            "actualEndTime": "2019-05-28T10:54:47.878Z",
            "duration": 21600000
          },
          {
            "id": 1102542,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-28T13:04:24.367Z",
            "scheduledEndTime": "2019-05-31T13:04:35.462Z",
            "actualStartTime": "2019-05-28T13:04:24.367Z",
            "actualEndTime": "2019-05-31T13:04:35.462Z",
            "fixedStartTime": "2019-05-28T13:04:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1102543,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-28T13:11:18.131Z",
            "scheduledEndTime": "2019-05-31T13:04:51.884Z",
            "actualStartTime": "2019-05-28T13:11:18.131Z",
            "actualEndTime": "2019-05-31T13:04:51.884Z",
            "duration": 258780000
          },
          {
            "id": 1102544,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T13:11:50.079Z",
            "scheduledEndTime": "2019-06-05T13:04:00.000Z",
            "actualStartTime": "2019-05-28T13:11:50.079Z",
            "duration": 690780000
          },
          {
            "id": 1102545,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-31T13:05:19.876Z",
            "scheduledEndTime": "2019-05-31T15:10:36.569Z",
            "actualStartTime": "2019-05-31T13:05:19.876Z",
            "actualEndTime": "2019-05-31T15:10:36.569Z",
            "duration": 14400000
          },
          {
            "id": 1102546,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T15:10:51.636Z",
            "scheduledEndTime": "2019-06-02T15:10:00.000Z",
            "actualStartTime": "2019-05-31T15:10:51.636Z",
            "duration": 172800000
          },
          {
            "id": 1102547,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T13:04:00.000Z",
            "scheduledEndTime": "2019-06-05T17:04:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1102548,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T17:04:00.000Z",
            "scheduledEndTime": "2019-06-11T17:04:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1102549,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T17:04:00.000Z",
            "scheduledEndTime": "2019-06-16T17:04:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1000,
          400,
          150
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-27T20:05Z",
        "createdAt": "2019-05-27T00:54Z",
        "createdBy": "22736560",
        "updatedBy": "40694148",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WIDGET_OR_MOBILE_SCREEN_DESIGN",
        "name": "CMS Demonstration Website Design Challenge",
        "reviewType": "INTERNAL",
        "id": 30091715,
        "forumId": 678904,
        "numSubmissions": 17,
        "numRegistrants": 43,
        "numSubmitters": 17,
        "registrationStartDate": "2019-05-27T12:55:16.714Z",
        "registrationEndDate": "2019-05-31T13:08:36.425Z",
        "checkpointSubmissionEndDate": "2019-05-31T13:09:00.771Z",
        "submissionEndDate": "2019-06-05T13:00:00.000Z",
        "totalCheckpointPrize": 500,
        "totalPrize": 2000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101547,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-05T13:00:00.000Z",
          "scheduledEndTime": "2019-06-05T17:00:00.000Z",
          "duration": 14400000
        },
        "projectId": 22680,
        "projectName": "BH6 Demonstration Site",
        "currentPhases": [
          {
            "id": 1101544,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-27T13:00:36.052Z",
            "scheduledEndTime": "2019-06-05T13:00:00.000Z",
            "actualStartTime": "2019-05-27T13:00:36.052Z",
            "duration": 777600000
          },
          {
            "id": 1101546,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T14:52:07.709Z",
            "scheduledEndTime": "2019-06-02T14:52:00.000Z",
            "actualStartTime": "2019-05-31T14:52:07.709Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101540,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-27T12:40:09.766Z",
            "scheduledEndTime": "2019-05-27T12:40:37.216Z",
            "actualStartTime": "2019-05-27T12:40:09.766Z",
            "actualEndTime": "2019-05-27T12:40:37.216Z",
            "fixedStartTime": "2019-05-27T12:38:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1101541,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-27T12:41:20.485Z",
            "scheduledEndTime": "2019-05-27T12:50:41.704Z",
            "actualStartTime": "2019-05-27T12:41:20.485Z",
            "actualEndTime": "2019-05-27T12:50:41.704Z",
            "duration": 21600000
          },
          {
            "id": 1101542,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-27T12:55:16.714Z",
            "scheduledEndTime": "2019-05-31T13:08:36.425Z",
            "actualStartTime": "2019-05-27T12:55:16.714Z",
            "actualEndTime": "2019-05-31T13:08:36.425Z",
            "fixedStartTime": "2019-05-27T12:55:00.000Z",
            "duration": 345840000
          },
          {
            "id": 1101543,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-27T13:00:11.037Z",
            "scheduledEndTime": "2019-05-31T13:09:00.771Z",
            "actualStartTime": "2019-05-27T13:00:11.037Z",
            "actualEndTime": "2019-05-31T13:09:00.771Z",
            "duration": 345600000
          },
          {
            "id": 1101544,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-27T13:00:36.052Z",
            "scheduledEndTime": "2019-06-05T13:00:00.000Z",
            "actualStartTime": "2019-05-27T13:00:36.052Z",
            "duration": 777600000
          },
          {
            "id": 1101545,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-31T13:09:35.122Z",
            "scheduledEndTime": "2019-05-31T14:51:33.290Z",
            "actualStartTime": "2019-05-31T13:09:35.122Z",
            "actualEndTime": "2019-05-31T14:51:33.290Z",
            "duration": 14400000
          },
          {
            "id": 1101546,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T14:52:07.709Z",
            "scheduledEndTime": "2019-06-02T14:52:00.000Z",
            "actualStartTime": "2019-05-31T14:52:07.709Z",
            "duration": 172800000
          },
          {
            "id": 1101547,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T13:00:00.000Z",
            "scheduledEndTime": "2019-06-05T17:00:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1101548,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T17:00:00.000Z",
            "scheduledEndTime": "2019-06-11T17:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1101549,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T17:00:00.000Z",
            "scheduledEndTime": "2019-06-16T17:00:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1300,
          550,
          150
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22680
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T12:11Z",
        "createdAt": "2019-02-11T07:08Z",
        "createdBy": "8544935",
        "updatedBy": "8544935",
        "technologies": [
          ".NET",
          "Docker",
          "Angular 2+",
          "JavaScript",
          "SQL",
          "REST"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Dragonet - Worksheet App Bug Fixes",
        "reviewType": "INTERNAL",
        "id": 30083370,
        "forumId": 60464,
        "numSubmissions": 0,
        "numRegistrants": 27,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-30T13:00:50.714Z",
        "registrationEndDate": "2019-06-05T13:00:00.000Z",
        "submissionEndDate": "2019-06-05T13:00:00.000Z",
        "platforms": [
          "Microsoft Azure"
        ],
        "totalPrize": 1800,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1043307,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-05T13:00:00.000Z",
          "scheduledEndTime": "2019-06-07T13:00:00.000Z",
          "duration": 172800000
        },
        "projectId": 19232,
        "projectName": "CS - POLAR-FOBO Worksheet ",
        "currentPhases": [
          {
            "id": 1043305,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T13:00:50.714Z",
            "scheduledEndTime": "2019-06-05T13:00:00.000Z",
            "actualStartTime": "2019-05-30T13:00:50.714Z",
            "fixedStartTime": "2019-05-30T13:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1043306,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T13:05:59.656Z",
            "scheduledEndTime": "2019-06-05T13:00:00.000Z",
            "actualStartTime": "2019-05-30T13:05:59.656Z",
            "duration": 518100000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1043305,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T13:00:50.714Z",
            "scheduledEndTime": "2019-06-05T13:00:00.000Z",
            "actualStartTime": "2019-05-30T13:00:50.714Z",
            "fixedStartTime": "2019-05-30T13:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1043306,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T13:05:59.656Z",
            "scheduledEndTime": "2019-06-05T13:00:00.000Z",
            "actualStartTime": "2019-05-30T13:05:59.656Z",
            "duration": 518100000
          },
          {
            "id": 1043307,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T13:00:00.000Z",
            "scheduledEndTime": "2019-06-07T13:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1043308,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-07T13:00:00.000Z",
            "scheduledEndTime": "2019-06-08T01:00:00.000Z",
            "duration": 43200000
          },
          {
            "id": 1043309,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-08T01:00:00.000Z",
            "scheduledEndTime": "2019-06-08T13:00:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          1200,
          600
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 19232
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-25T15:45Z",
        "createdAt": "2019-05-25T04:25Z",
        "createdBy": "289521",
        "updatedBy": "40600453",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WIDGET_OR_MOBILE_SCREEN_DESIGN",
        "name": "Firefly Visual IVR App Design Concepts Challenge",
        "reviewType": "INTERNAL",
        "id": 30091684,
        "forumId": 678831,
        "numSubmissions": 21,
        "numRegistrants": 40,
        "numSubmitters": 18,
        "registrationStartDate": "2019-05-25T05:41:56.096Z",
        "registrationEndDate": "2019-05-30T11:06:57.500Z",
        "checkpointSubmissionEndDate": "2019-05-30T10:59:00.000Z",
        "submissionEndDate": "2019-06-05T11:02:00.000Z",
        "totalCheckpointPrize": 500,
        "totalPrize": 2000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101271,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-05T11:02:00.000Z",
          "scheduledEndTime": "2019-06-05T15:02:00.000Z",
          "duration": 14400000
        },
        "projectId": 22793,
        "projectName": "Visual IVR App Design",
        "currentPhases": [
          {
            "id": 1101268,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T05:48:10.716Z",
            "scheduledEndTime": "2019-06-05T11:02:00.000Z",
            "actualStartTime": "2019-05-25T05:48:10.716Z",
            "duration": 969240000
          },
          {
            "id": 1101270,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T03:33:06.346Z",
            "scheduledEndTime": "2019-06-02T03:33:00.000Z",
            "actualStartTime": "2019-05-31T03:33:06.346Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101264,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T05:02:23.057Z",
            "scheduledEndTime": "2019-05-25T05:02:41.763Z",
            "actualStartTime": "2019-05-25T05:02:23.057Z",
            "actualEndTime": "2019-05-25T05:02:41.763Z",
            "fixedStartTime": "2019-05-25T04:56:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1101265,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T05:03:54.716Z",
            "scheduledEndTime": "2019-05-25T05:11:30.096Z",
            "actualStartTime": "2019-05-25T05:03:54.716Z",
            "actualEndTime": "2019-05-25T05:11:30.096Z",
            "duration": 21600000
          },
          {
            "id": 1101266,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T05:41:56.096Z",
            "scheduledEndTime": "2019-05-30T11:06:57.500Z",
            "actualStartTime": "2019-05-25T05:41:56.096Z",
            "actualEndTime": "2019-05-30T11:06:57.500Z",
            "fixedStartTime": "2019-05-25T05:30:00.000Z",
            "duration": 451080000
          },
          {
            "id": 1101267,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T05:45:00.000Z",
            "scheduledEndTime": "2019-05-30T10:59:00.000Z",
            "actualStartTime": "2019-05-25T05:45:00.000Z",
            "duration": 450840000
          },
          {
            "id": 1101268,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T05:48:10.716Z",
            "scheduledEndTime": "2019-06-05T11:02:00.000Z",
            "actualStartTime": "2019-05-25T05:48:10.716Z",
            "duration": 969240000
          },
          {
            "id": 1101269,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-30T11:15:55.913Z",
            "scheduledEndTime": "2019-05-31T03:32:44.459Z",
            "actualStartTime": "2019-05-30T11:15:55.913Z",
            "actualEndTime": "2019-05-31T03:32:44.459Z",
            "duration": 14400000
          },
          {
            "id": 1101270,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T03:33:06.346Z",
            "scheduledEndTime": "2019-06-02T03:33:00.000Z",
            "actualStartTime": "2019-05-31T03:33:06.346Z",
            "duration": 172800000
          },
          {
            "id": 1101271,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T11:02:00.000Z",
            "scheduledEndTime": "2019-06-05T15:02:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1101272,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T15:02:00.000Z",
            "scheduledEndTime": "2019-06-11T15:02:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1101273,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T15:02:00.000Z",
            "scheduledEndTime": "2019-06-16T15:02:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1300,
          550,
          150
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22793
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T08:19Z",
        "createdAt": "2019-05-24T12:10Z",
        "createdBy": "22880988",
        "updatedBy": "40751143",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WEB_DESIGNS",
        "name": "Novus - Mobile Provider Switching Tool Design Challenge",
        "reviewType": "INTERNAL",
        "id": 30091662,
        "forumId": 678794,
        "numSubmissions": 14,
        "numRegistrants": 35,
        "numSubmitters": 14,
        "registrationStartDate": "2019-05-24T20:29:12.055Z",
        "registrationEndDate": "2019-05-29T11:03:15.139Z",
        "checkpointSubmissionEndDate": "2019-05-29T15:51:17.259Z",
        "submissionEndDate": "2019-06-05T09:00:00.000Z",
        "totalCheckpointPrize": 500,
        "totalPrize": 2000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101091,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-05T09:00:00.000Z",
          "scheduledEndTime": "2019-06-05T13:00:00.000Z",
          "duration": 14400000
        },
        "projectId": 22739,
        "projectName": "PR037 - Switching Tool",
        "currentPhases": [
          {
            "id": 1101088,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T05:57:22.126Z",
            "scheduledEndTime": "2019-06-05T09:00:00.000Z",
            "actualStartTime": "2019-05-25T05:57:22.126Z",
            "duration": 961380000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101084,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-24T20:18:55.479Z",
            "scheduledEndTime": "2019-05-24T20:19:23.088Z",
            "actualStartTime": "2019-05-24T20:18:55.479Z",
            "actualEndTime": "2019-05-24T20:19:23.088Z",
            "fixedStartTime": "2019-05-24T20:18:55.479Z",
            "duration": 172800000
          },
          {
            "id": 1101085,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-24T20:22:22.542Z",
            "scheduledEndTime": "2019-05-24T20:27:16.813Z",
            "actualStartTime": "2019-05-24T20:22:22.542Z",
            "actualEndTime": "2019-05-24T20:27:16.813Z",
            "duration": 21600000
          },
          {
            "id": 1101086,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-24T20:29:12.055Z",
            "scheduledEndTime": "2019-05-29T11:03:15.139Z",
            "actualStartTime": "2019-05-24T20:29:12.055Z",
            "actualEndTime": "2019-05-29T11:03:15.139Z",
            "fixedStartTime": "2019-05-24T20:29:12.055Z",
            "duration": 415130065
          },
          {
            "id": 1101087,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-24T20:34:34.516Z",
            "scheduledEndTime": "2019-05-29T15:51:17.259Z",
            "actualStartTime": "2019-05-24T20:34:34.516Z",
            "actualEndTime": "2019-05-29T15:51:17.259Z",
            "duration": 381235133
          },
          {
            "id": 1101088,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T05:57:22.126Z",
            "scheduledEndTime": "2019-06-05T09:00:00.000Z",
            "actualStartTime": "2019-05-25T05:57:22.126Z",
            "duration": 961380000
          },
          {
            "id": 1101089,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T11:04:19.261Z",
            "scheduledEndTime": "2019-05-29T12:41:33.243Z",
            "actualStartTime": "2019-05-29T11:04:19.261Z",
            "actualEndTime": "2019-05-29T12:41:33.243Z",
            "duration": 14400000
          },
          {
            "id": 1101090,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T12:42:18.086Z",
            "scheduledEndTime": "2019-05-31T07:56:09.529Z",
            "actualStartTime": "2019-05-29T12:42:18.086Z",
            "actualEndTime": "2019-05-31T07:56:09.529Z",
            "duration": 172800000
          },
          {
            "id": 1101091,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T09:00:00.000Z",
            "scheduledEndTime": "2019-06-05T13:00:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1101092,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T13:00:00.000Z",
            "scheduledEndTime": "2019-06-11T09:00:00.000Z",
            "duration": 504000000
          },
          {
            "id": 1101093,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-11T09:00:00.000Z",
            "scheduledEndTime": "2019-06-16T09:00:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1300,
          550,
          150
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22739
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-25T08:14Z",
        "createdAt": "2019-05-24T17:16Z",
        "createdBy": "22706873",
        "updatedBy": "22706873",
        "technologies": [
          "ASP.NET Core "
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "Alta Ski  F2F Tasks - Unassigned View",
        "reviewType": "INTERNAL",
        "id": 30091674,
        "forumId": 66771,
        "numSubmissions": 3,
        "numRegistrants": 13,
        "numSubmitters": 1,
        "registrationStartDate": "2019-05-24T18:11:57.782Z",
        "registrationEndDate": "2019-06-04T18:11:00.000Z",
        "submissionEndDate": "2019-06-05T03:10:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 300,
        "isPrivate": false,
        "projectId": 22093,
        "projectName": "TaaS Community for Hoherberg Ski School",
        "currentPhases": [
          {
            "id": 1101183,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T18:11:57.782Z",
            "scheduledEndTime": "2019-06-04T18:11:00.000Z",
            "actualStartTime": "2019-05-24T18:11:57.782Z",
            "fixedStartTime": "2019-05-24T18:11:57.782Z",
            "duration": 950400000
          },
          {
            "id": 1101185,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T03:16:26.085Z",
            "scheduledEndTime": "2019-06-05T03:10:00.000Z",
            "actualStartTime": "2019-05-25T03:16:26.085Z",
            "duration": 950073915
          },
          {
            "id": 1103529,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T09:57:00.340Z",
            "scheduledEndTime": "2019-06-01T09:57:00.000Z",
            "actualStartTime": "2019-05-31T09:57:00.340Z",
            "duration": 86400000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101183,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T18:11:57.782Z",
            "scheduledEndTime": "2019-06-04T18:11:00.000Z",
            "actualStartTime": "2019-05-24T18:11:57.782Z",
            "fixedStartTime": "2019-05-24T18:11:57.782Z",
            "duration": 950400000
          },
          {
            "id": 1101184,
            "phaseType": "Iterative Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-27T15:55:04.036Z",
            "scheduledEndTime": "2019-05-28T14:09:07.595Z",
            "actualStartTime": "2019-05-27T15:55:04.036Z",
            "actualEndTime": "2019-05-28T14:09:07.595Z",
            "duration": 86400000
          },
          {
            "id": 1101185,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T03:16:26.085Z",
            "scheduledEndTime": "2019-06-05T03:10:00.000Z",
            "actualStartTime": "2019-05-25T03:16:26.085Z",
            "duration": 950073915
          },
          {
            "id": 1102763,
            "phaseType": "Iterative Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-28T16:08:52.838Z",
            "scheduledEndTime": "2019-05-30T16:59:54.261Z",
            "actualStartTime": "2019-05-28T16:08:52.838Z",
            "actualEndTime": "2019-05-30T16:59:54.261Z",
            "duration": 86400000
          },
          {
            "id": 1103529,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T09:57:00.340Z",
            "scheduledEndTime": "2019-06-01T09:57:00.000Z",
            "actualStartTime": "2019-05-31T09:57:00.340Z",
            "duration": 86400000
          }
        ],
        "prizes": [
          300
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22093
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T01:13Z",
        "createdAt": "2019-05-30T17:42Z",
        "createdBy": "15763205",
        "updatedBy": "15763205",
        "technologies": [
          "Java"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Hepius - Call Transcription and Sentiment Analysis Challenge",
        "reviewType": "COMMUNITY",
        "id": 30092120,
        "forumId": 68852,
        "numSubmissions": 0,
        "numRegistrants": 28,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-30T17:56:29.383Z",
        "registrationEndDate": "2019-06-01T17:56:00.000Z",
        "submissionEndDate": "2019-06-05T01:09:00.000Z",
        "platforms": [
          "Microsoft Azure"
        ],
        "totalPrize": 2250,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1104337,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-05T01:09:00.000Z",
          "scheduledEndTime": "2019-06-07T01:09:00.000Z",
          "duration": 172800000
        },
        "projectId": 22346,
        "projectName": "Customer Service Call Log Transcription and Analysis",
        "currentPhases": [
          {
            "id": 1104335,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T17:56:29.383Z",
            "scheduledEndTime": "2019-06-01T17:56:00.000Z",
            "actualStartTime": "2019-05-30T17:56:29.383Z",
            "fixedStartTime": "2019-05-30T13:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1104336,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T01:14:01.023Z",
            "scheduledEndTime": "2019-06-05T01:09:00.000Z",
            "actualStartTime": "2019-05-31T01:14:01.023Z",
            "duration": 431700000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1104335,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T17:56:29.383Z",
            "scheduledEndTime": "2019-06-01T17:56:00.000Z",
            "actualStartTime": "2019-05-30T17:56:29.383Z",
            "fixedStartTime": "2019-05-30T13:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1104336,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T01:14:01.023Z",
            "scheduledEndTime": "2019-06-05T01:09:00.000Z",
            "actualStartTime": "2019-05-31T01:14:01.023Z",
            "duration": 431700000
          },
          {
            "id": 1104337,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T01:09:00.000Z",
            "scheduledEndTime": "2019-06-07T01:09:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1104338,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-07T01:09:00.000Z",
            "scheduledEndTime": "2019-06-08T01:09:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1104339,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-08T01:09:00.000Z",
            "scheduledEndTime": "2019-06-08T13:09:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          1500,
          750
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22346
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-28T14:36Z",
        "createdAt": "2019-05-24T17:37Z",
        "createdBy": "22503298",
        "updatedBy": "22503298",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WIREFRAMES",
        "name": "NOVUS Fit Assessment Tool Concept Wireframe Challenge",
        "reviewType": "INTERNAL",
        "id": 30091675,
        "forumId": 678817,
        "numSubmissions": 20,
        "numRegistrants": 26,
        "numSubmitters": 9,
        "registrationStartDate": "2019-05-25T13:14:37.501Z",
        "registrationEndDate": "2019-05-30T13:29:00.838Z",
        "checkpointSubmissionEndDate": "2019-05-30T15:09:13.512Z",
        "submissionEndDate": "2019-06-04T13:59:00.000Z",
        "totalCheckpointPrize": 500,
        "totalPrize": 2000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101203,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-04T13:59:00.000Z",
          "scheduledEndTime": "2019-06-04T17:59:00.000Z",
          "duration": 14400000
        },
        "projectId": 22665,
        "projectName": "PR035 - Fit Assessment Tool",
        "currentPhases": [
          {
            "id": 1101200,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T14:04:04.274Z",
            "scheduledEndTime": "2019-06-04T13:59:00.000Z",
            "actualStartTime": "2019-05-25T14:04:04.274Z",
            "duration": 863700000
          },
          {
            "id": 1101202,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T17:24:30.181Z",
            "scheduledEndTime": "2019-06-01T17:24:00.000Z",
            "actualStartTime": "2019-05-30T17:24:30.181Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101196,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T11:54:37.545Z",
            "scheduledEndTime": "2019-05-25T11:55:30.238Z",
            "actualStartTime": "2019-05-25T11:54:37.545Z",
            "actualEndTime": "2019-05-25T11:55:30.238Z",
            "fixedStartTime": "2019-05-25T05:24:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1101197,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T11:59:19.870Z",
            "scheduledEndTime": "2019-05-25T12:07:49.916Z",
            "actualStartTime": "2019-05-25T11:59:19.870Z",
            "actualEndTime": "2019-05-25T12:07:49.916Z",
            "duration": 21600000
          },
          {
            "id": 1101198,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T13:14:37.501Z",
            "scheduledEndTime": "2019-05-30T13:29:00.838Z",
            "actualStartTime": "2019-05-25T13:14:37.501Z",
            "actualEndTime": "2019-05-30T13:29:00.838Z",
            "fixedStartTime": "2019-05-25T13:00:00.000Z",
            "duration": 432000000
          },
          {
            "id": 1101199,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T14:03:18.165Z",
            "scheduledEndTime": "2019-05-30T15:09:13.512Z",
            "actualStartTime": "2019-05-25T14:03:18.165Z",
            "actualEndTime": "2019-05-30T15:09:13.512Z",
            "duration": 432000000
          },
          {
            "id": 1101200,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T14:04:04.274Z",
            "scheduledEndTime": "2019-06-04T13:59:00.000Z",
            "actualStartTime": "2019-05-25T14:04:04.274Z",
            "duration": 863700000
          },
          {
            "id": 1101201,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-30T14:04:32.037Z",
            "scheduledEndTime": "2019-05-30T17:24:13.124Z",
            "actualStartTime": "2019-05-30T14:04:32.037Z",
            "actualEndTime": "2019-05-30T17:24:13.124Z",
            "duration": 14400000
          },
          {
            "id": 1101202,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T17:24:30.181Z",
            "scheduledEndTime": "2019-06-01T17:24:00.000Z",
            "actualStartTime": "2019-05-30T17:24:30.181Z",
            "duration": 172800000
          },
          {
            "id": 1101203,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-04T13:59:00.000Z",
            "scheduledEndTime": "2019-06-04T17:59:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1101204,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-04T17:59:00.000Z",
            "scheduledEndTime": "2019-06-10T17:59:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1101205,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-10T17:59:00.000Z",
            "scheduledEndTime": "2019-06-15T17:59:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1300,
          550,
          150
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T04:15Z",
        "createdAt": "2019-05-28T15:00Z",
        "createdBy": "22776011",
        "updatedBy": "8544935",
        "technologies": [
          ".NET",
          "Xamarin"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "RCS Mobile - Xamarin Tablet App Prototype Part 2",
        "reviewType": "COMMUNITY",
        "id": 30091901,
        "forumId": 68392,
        "numSubmissions": 0,
        "numRegistrants": 29,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-28T15:05:21.988Z",
        "registrationEndDate": "2019-06-03T15:05:00.000Z",
        "submissionEndDate": "2019-06-04T02:40:00.000Z",
        "platforms": [
          "Android",
          "iOS"
        ],
        "totalPrize": 2700,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1102841,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-04T02:40:00.000Z",
          "scheduledEndTime": "2019-06-06T02:40:00.000Z",
          "duration": 172800000
        },
        "projectId": 22130,
        "projectName": "ABB - RCS Mobile",
        "currentPhases": [
          {
            "id": 1102839,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T15:05:21.988Z",
            "scheduledEndTime": "2019-06-03T15:05:00.000Z",
            "actualStartTime": "2019-05-28T15:05:21.988Z",
            "fixedStartTime": "2019-05-28T15:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1102840,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T02:45:37.695Z",
            "scheduledEndTime": "2019-06-04T02:40:00.000Z",
            "actualStartTime": "2019-05-29T02:45:37.695Z",
            "duration": 518100000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1102839,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T15:05:21.988Z",
            "scheduledEndTime": "2019-06-03T15:05:00.000Z",
            "actualStartTime": "2019-05-28T15:05:21.988Z",
            "fixedStartTime": "2019-05-28T15:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1102840,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T02:45:37.695Z",
            "scheduledEndTime": "2019-06-04T02:40:00.000Z",
            "actualStartTime": "2019-05-29T02:45:37.695Z",
            "duration": 518100000
          },
          {
            "id": 1102841,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-04T02:40:00.000Z",
            "scheduledEndTime": "2019-06-06T02:40:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1102842,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T02:40:00.000Z",
            "scheduledEndTime": "2019-06-07T02:40:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1102843,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-07T02:40:00.000Z",
            "scheduledEndTime": "2019-06-07T14:40:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          1800,
          900
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22130
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T16:32Z",
        "createdAt": "2019-05-31T15:36Z",
        "createdBy": "23124329",
        "updatedBy": "23124329",
        "technologies": [
          "Swagger",
          "Node.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Topcoder v5 Lookup API | Implement CRUD endpoints for Countries and Education Institutions",
        "reviewType": "COMMUNITY",
        "id": 30092274,
        "forumId": 68997,
        "numSubmissions": 0,
        "numRegistrants": 18,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T16:06:38.694Z",
        "registrationEndDate": "2019-06-03T16:06:00.000Z",
        "submissionEndDate": "2019-06-03T16:27:00.000Z",
        "platforms": [
          "NodeJS"
        ],
        "totalPrize": 1500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1105349,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T16:27:00.000Z",
          "scheduledEndTime": "2019-06-05T16:27:00.000Z",
          "duration": 172800000
        },
        "projectId": 16527,
        "projectName": "PD Member Profile",
        "currentPhases": [
          {
            "id": 1105347,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T16:06:38.694Z",
            "scheduledEndTime": "2019-06-03T16:06:00.000Z",
            "actualStartTime": "2019-05-31T16:06:38.694Z",
            "fixedStartTime": "2019-05-31T16:00:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1105348,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T16:32:27.727Z",
            "scheduledEndTime": "2019-06-03T16:27:00.000Z",
            "actualStartTime": "2019-05-31T16:32:27.727Z",
            "duration": 258900000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1105347,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T16:06:38.694Z",
            "scheduledEndTime": "2019-06-03T16:06:00.000Z",
            "actualStartTime": "2019-05-31T16:06:38.694Z",
            "fixedStartTime": "2019-05-31T16:00:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1105348,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T16:32:27.727Z",
            "scheduledEndTime": "2019-06-03T16:27:00.000Z",
            "actualStartTime": "2019-05-31T16:32:27.727Z",
            "duration": 258900000
          },
          {
            "id": 1105349,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T16:27:00.000Z",
            "scheduledEndTime": "2019-06-05T16:27:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1105350,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T16:27:00.000Z",
            "scheduledEndTime": "2019-06-06T16:27:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1105351,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T16:27:00.000Z",
            "scheduledEndTime": "2019-06-07T04:27:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          1000,
          500
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 16527
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T05:13Z",
        "createdAt": "2019-05-31T05:04Z",
        "createdBy": "22836556",
        "updatedBy": "22836556",
        "technologies": [
          "Node.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Topcoder Member Service - Member Stats Elasticsearch Index",
        "reviewType": "COMMUNITY",
        "id": 30092160,
        "forumId": 68471,
        "numSubmissions": 0,
        "numRegistrants": 17,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T05:13:48.398Z",
        "registrationEndDate": "2019-06-03T05:13:00.000Z",
        "submissionEndDate": "2019-06-03T15:42:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 800,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1104607,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T15:42:00.000Z",
          "scheduledEndTime": "2019-06-04T15:42:00.000Z",
          "duration": 86400000
        },
        "projectId": 16527,
        "projectName": "PD Member Profile",
        "currentPhases": [
          {
            "id": 1104605,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T05:13:48.398Z",
            "scheduledEndTime": "2019-06-03T05:13:00.000Z",
            "actualStartTime": "2019-05-31T05:13:48.398Z",
            "fixedStartTime": "2019-05-31T04:19:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1104606,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T15:42:40.294Z",
            "scheduledEndTime": "2019-06-03T15:42:00.000Z",
            "actualStartTime": "2019-05-31T15:42:40.294Z",
            "duration": 259200000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1104605,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T05:13:48.398Z",
            "scheduledEndTime": "2019-06-03T05:13:00.000Z",
            "actualStartTime": "2019-05-31T05:13:48.398Z",
            "fixedStartTime": "2019-05-31T04:19:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1104606,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T15:42:40.294Z",
            "scheduledEndTime": "2019-06-03T15:42:00.000Z",
            "actualStartTime": "2019-05-31T15:42:40.294Z",
            "duration": 259200000
          },
          {
            "id": 1104607,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T15:42:00.000Z",
            "scheduledEndTime": "2019-06-04T15:42:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1104608,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-04T15:42:00.000Z",
            "scheduledEndTime": "2019-06-05T03:42:00.000Z",
            "duration": 43200000
          },
          {
            "id": 1104609,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T03:42:00.000Z",
            "scheduledEndTime": "2019-06-05T15:42:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          500,
          300
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 16527
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T15:40Z",
        "createdAt": "2019-05-29T10:52Z",
        "createdBy": "22706873",
        "updatedBy": "22706873",
        "technologies": [
          "ASP.NET Core ",
          "SQL Server",
          "API"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Hoherberg Ski School Priority Bug Fixes Part 2 Code Challenge",
        "reviewType": "COMMUNITY",
        "id": 30091973,
        "forumId": 68305,
        "numSubmissions": 0,
        "numRegistrants": 26,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-29T11:03:17.698Z",
        "registrationEndDate": "2019-05-31T11:05:13.541Z",
        "submissionEndDate": "2019-06-03T15:35:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 2700,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1103347,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T15:35:00.000Z",
          "scheduledEndTime": "2019-06-05T15:35:00.000Z",
          "duration": 172800000
        },
        "projectId": 22093,
        "projectName": "TaaS Community for Hoherberg Ski School",
        "currentPhases": [
          {
            "id": 1103346,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T15:40:24.620Z",
            "scheduledEndTime": "2019-06-03T15:35:00.000Z",
            "actualStartTime": "2019-05-29T15:40:24.620Z",
            "duration": 431700000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1103345,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T11:03:17.698Z",
            "scheduledEndTime": "2019-05-31T11:05:13.541Z",
            "actualStartTime": "2019-05-29T11:03:17.698Z",
            "actualEndTime": "2019-05-31T11:05:13.541Z",
            "fixedStartTime": "2019-05-29T11:03:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1103346,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T15:40:24.620Z",
            "scheduledEndTime": "2019-06-03T15:35:00.000Z",
            "actualStartTime": "2019-05-29T15:40:24.620Z",
            "duration": 431700000
          },
          {
            "id": 1103347,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T15:35:00.000Z",
            "scheduledEndTime": "2019-06-05T15:35:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1103348,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T15:35:00.000Z",
            "scheduledEndTime": "2019-06-06T15:35:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1103349,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T15:35:00.000Z",
            "scheduledEndTime": "2019-06-07T03:35:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          1800,
          900
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22093
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T13:44Z",
        "createdAt": "2019-05-26T17:26Z",
        "createdBy": "22742079",
        "updatedBy": "22742079",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WEB_DESIGNS",
        "name": "FAST - The Daily Planet - Website and Infographic Design Concept Challenge",
        "reviewType": "INTERNAL",
        "id": 30091711,
        "forumId": 678885,
        "numSubmissions": 12,
        "numRegistrants": 28,
        "numSubmitters": 12,
        "registrationStartDate": "2019-05-26T19:08:52.999Z",
        "registrationEndDate": "2019-05-28T15:32:52.523Z",
        "checkpointSubmissionEndDate": "2019-05-28T15:29:21.394Z",
        "submissionEndDate": "2019-06-03T15:30:00.000Z",
        "totalCheckpointPrize": 250,
        "totalPrize": 1550,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101509,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T15:30:00.000Z",
          "scheduledEndTime": "2019-06-03T19:30:00.000Z",
          "duration": 14400000
        },
        "projectId": 22798,
        "projectName": "NewsCorp Concept Design",
        "currentPhases": [
          {
            "id": 1101506,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-26T19:14:23.256Z",
            "scheduledEndTime": "2019-06-03T15:30:00.000Z",
            "actualStartTime": "2019-05-26T19:14:23.256Z",
            "duration": 677796744
          },
          {
            "id": 1101508,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T17:12:57.061Z",
            "scheduledEndTime": "2019-05-30T17:12:00.000Z",
            "actualStartTime": "2019-05-28T17:12:57.061Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101502,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-26T18:31:17.398Z",
            "scheduledEndTime": "2019-05-26T18:42:46.352Z",
            "actualStartTime": "2019-05-26T18:31:17.398Z",
            "actualEndTime": "2019-05-26T18:42:46.352Z",
            "fixedStartTime": "2019-05-26T18:31:17.398Z",
            "duration": 172800000
          },
          {
            "id": 1101503,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-26T18:44:16.616Z",
            "scheduledEndTime": "2019-05-26T19:05:51.430Z",
            "actualStartTime": "2019-05-26T18:44:16.616Z",
            "actualEndTime": "2019-05-26T19:05:51.430Z",
            "duration": 21600000
          },
          {
            "id": 1101504,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-26T19:08:52.999Z",
            "scheduledEndTime": "2019-05-28T15:32:52.523Z",
            "actualStartTime": "2019-05-26T19:08:52.999Z",
            "actualEndTime": "2019-05-28T15:32:52.523Z",
            "fixedStartTime": "2019-05-26T19:08:00.000Z",
            "duration": 159720000
          },
          {
            "id": 1101505,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-26T19:13:42.504Z",
            "scheduledEndTime": "2019-05-28T15:29:21.394Z",
            "actualStartTime": "2019-05-26T19:13:42.504Z",
            "actualEndTime": "2019-05-28T15:29:21.394Z",
            "duration": 159300000
          },
          {
            "id": 1101506,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-26T19:14:23.256Z",
            "scheduledEndTime": "2019-06-03T15:30:00.000Z",
            "actualStartTime": "2019-05-26T19:14:23.256Z",
            "duration": 677796744
          },
          {
            "id": 1101507,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-28T15:29:39.488Z",
            "scheduledEndTime": "2019-05-28T17:12:41.899Z",
            "actualStartTime": "2019-05-28T15:29:39.488Z",
            "actualEndTime": "2019-05-28T17:12:41.899Z",
            "duration": 14400000
          },
          {
            "id": 1101508,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-28T17:12:57.061Z",
            "scheduledEndTime": "2019-05-30T17:12:00.000Z",
            "actualStartTime": "2019-05-28T17:12:57.061Z",
            "duration": 172800000
          },
          {
            "id": 1101509,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T15:30:00.000Z",
            "scheduledEndTime": "2019-06-03T19:30:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1101510,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T19:30:00.000Z",
            "scheduledEndTime": "2019-06-09T19:30:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1101511,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-09T19:30:00.000Z",
            "scheduledEndTime": "2019-06-14T19:30:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1000,
          400,
          150
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22798
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T05:20Z",
        "createdAt": "2019-05-25T08:14Z",
        "createdBy": "15391415",
        "updatedBy": "15391415",
        "technologies": [
          "Android"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "BUG_HUNT",
        "name": "Live Well Android Mobile App Testing Challenge",
        "reviewType": "COMMUNITY",
        "id": 30091693,
        "forumId": 68477,
        "numSubmissions": 10,
        "numRegistrants": 39,
        "numSubmitters": 10,
        "registrationStartDate": "2019-05-25T15:11:17.702Z",
        "registrationEndDate": "2019-05-26T15:18:24.039Z",
        "submissionEndDate": "2019-06-03T15:09:00.000Z",
        "platforms": [
          "Android"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101339,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T15:09:00.000Z",
          "scheduledEndTime": "2019-06-05T15:09:00.000Z",
          "duration": 172800000
        },
        "projectId": 22246,
        "projectName": "Pulse",
        "currentPhases": [
          {
            "id": 1101338,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T18:24:11.672Z",
            "scheduledEndTime": "2019-06-03T15:09:00.000Z",
            "actualStartTime": "2019-05-25T18:24:11.672Z",
            "duration": 765948328
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101335,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T11:32:55.789Z",
            "scheduledEndTime": "2019-05-25T13:41:15.625Z",
            "actualStartTime": "2019-05-25T11:32:55.789Z",
            "actualEndTime": "2019-05-25T13:41:15.625Z",
            "fixedStartTime": "2019-05-25T10:00:00.000Z",
            "duration": 3600000
          },
          {
            "id": 1101336,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T13:41:52.069Z",
            "scheduledEndTime": "2019-05-25T15:09:44.132Z",
            "actualStartTime": "2019-05-25T13:41:52.069Z",
            "actualEndTime": "2019-05-25T15:09:44.132Z",
            "duration": 3600000
          },
          {
            "id": 1101337,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T15:11:17.702Z",
            "scheduledEndTime": "2019-05-26T15:18:24.039Z",
            "actualStartTime": "2019-05-25T15:11:17.702Z",
            "actualEndTime": "2019-05-26T15:18:24.039Z",
            "fixedStartTime": "2019-05-25T14:41:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1101338,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T18:24:11.672Z",
            "scheduledEndTime": "2019-06-03T15:09:00.000Z",
            "actualStartTime": "2019-05-25T18:24:11.672Z",
            "duration": 765948328
          },
          {
            "id": 1101339,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T15:09:00.000Z",
            "scheduledEndTime": "2019-06-05T15:09:00.000Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          500
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22246
          }
        ],
        "reliabilityBonus": 0,
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T04:00Z",
        "createdAt": "2019-05-28T05:57Z",
        "createdBy": "15050434",
        "updatedBy": "15050434",
        "technologies": [
          "SQL"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Topcoder - Generalize Way To Convert Informix Schema To PostgreSQL Schema",
        "reviewType": "COMMUNITY",
        "id": 30091826,
        "forumId": 68595,
        "numSubmissions": 0,
        "numRegistrants": 26,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-29T14:24:42.466Z",
        "registrationEndDate": "2019-05-31T14:32:49.832Z",
        "submissionEndDate": "2019-06-03T14:25:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 450,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1102317,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T14:25:00.000Z",
          "scheduledEndTime": "2019-06-05T14:25:00.000Z",
          "duration": 172800000
        },
        "projectId": 17138,
        "projectName": "TC - Challenge Engine Maintenance",
        "currentPhases": [
          {
            "id": 1102316,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T14:30:15.677Z",
            "scheduledEndTime": "2019-06-03T14:25:00.000Z",
            "actualStartTime": "2019-05-29T14:30:15.677Z",
            "duration": 431700000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1102315,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T14:24:42.466Z",
            "scheduledEndTime": "2019-05-31T14:32:49.832Z",
            "actualStartTime": "2019-05-29T14:24:42.466Z",
            "actualEndTime": "2019-05-31T14:32:49.832Z",
            "fixedStartTime": "2019-05-28T13:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1102316,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T14:30:15.677Z",
            "scheduledEndTime": "2019-06-03T14:25:00.000Z",
            "actualStartTime": "2019-05-29T14:30:15.677Z",
            "duration": 431700000
          },
          {
            "id": 1102317,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T14:25:00.000Z",
            "scheduledEndTime": "2019-06-05T14:25:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1102318,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T14:25:00.000Z",
            "scheduledEndTime": "2019-06-06T14:25:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1102319,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T14:25:00.000Z",
            "scheduledEndTime": "2019-06-07T02:25:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          300,
          150
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 17138
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T11:04Z",
        "createdAt": "2019-05-31T00:17Z",
        "createdBy": "22736560",
        "updatedBy": "40600453",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WEB_DESIGNS",
        "name": "FAST - Heuristic Evaluation & Competitive Assessment Challenge",
        "reviewType": "INTERNAL",
        "id": 30092150,
        "forumId": 679692,
        "numSubmissions": 1,
        "numRegistrants": 28,
        "numSubmitters": 1,
        "registrationStartDate": "2019-05-31T02:47:10.377Z",
        "registrationEndDate": "2019-06-03T14:00:00.000Z",
        "submissionEndDate": "2019-06-03T14:00:00.000Z",
        "totalPrize": 5250,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1104543,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T14:00:00.000Z",
          "scheduledEndTime": "2019-06-03T18:00:00.000Z",
          "duration": 14400000
        },
        "projectId": 22858,
        "projectName": "NW Heuristic Evaluation and Competitive Assessment",
        "currentPhases": [
          {
            "id": 1104541,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T02:47:10.377Z",
            "scheduledEndTime": "2019-06-03T14:00:00.000Z",
            "actualStartTime": "2019-05-31T02:47:10.377Z",
            "fixedStartTime": "2019-05-31T02:47:00.000Z",
            "duration": 299580000
          },
          {
            "id": 1104542,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T02:57:51.115Z",
            "scheduledEndTime": "2019-06-03T14:00:00.000Z",
            "actualStartTime": "2019-05-31T02:57:51.115Z",
            "duration": 298980000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1104539,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-31T02:36:33.364Z",
            "scheduledEndTime": "2019-05-31T02:36:58.051Z",
            "actualStartTime": "2019-05-31T02:36:33.364Z",
            "actualEndTime": "2019-05-31T02:36:58.051Z",
            "fixedStartTime": "2019-05-31T02:36:33.364Z",
            "duration": 172800000
          },
          {
            "id": 1104540,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-31T02:37:50.463Z",
            "scheduledEndTime": "2019-05-31T02:40:35.708Z",
            "actualStartTime": "2019-05-31T02:37:50.463Z",
            "actualEndTime": "2019-05-31T02:40:35.708Z",
            "duration": 21600000
          },
          {
            "id": 1104541,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T02:47:10.377Z",
            "scheduledEndTime": "2019-06-03T14:00:00.000Z",
            "actualStartTime": "2019-05-31T02:47:10.377Z",
            "fixedStartTime": "2019-05-31T02:47:00.000Z",
            "duration": 299580000
          },
          {
            "id": 1104542,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T02:57:51.115Z",
            "scheduledEndTime": "2019-06-03T14:00:00.000Z",
            "actualStartTime": "2019-05-31T02:57:51.115Z",
            "duration": 298980000
          },
          {
            "id": 1104543,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T14:00:00.000Z",
            "scheduledEndTime": "2019-06-03T18:00:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1104544,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T18:00:00.000Z",
            "scheduledEndTime": "2019-06-09T18:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1104545,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-09T18:00:00.000Z",
            "scheduledEndTime": "2019-06-14T18:00:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          2000,
          1500,
          1000,
          500,
          250
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22858
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T12:27Z",
        "createdAt": "2019-05-31T11:30Z",
        "createdBy": "23124329",
        "updatedBy": "23124329",
        "technologies": [
          "AWS",
          "Gitlab",
          "Node.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Topcoder MM Processor | Automate deployments to Amazon S3",
        "reviewType": "COMMUNITY",
        "id": 30092222,
        "forumId": 68945,
        "numSubmissions": 0,
        "numRegistrants": 11,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-31T12:15:14.999Z",
        "registrationEndDate": "2019-06-03T12:15:00.000Z",
        "submissionEndDate": "2019-06-03T12:22:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 900,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1104987,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T12:22:00.000Z",
          "scheduledEndTime": "2019-06-05T12:22:00.000Z",
          "duration": 172800000
        },
        "projectId": 17138,
        "projectName": "TC - Challenge Engine Maintenance",
        "currentPhases": [
          {
            "id": 1104985,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T12:15:14.999Z",
            "scheduledEndTime": "2019-06-03T12:15:00.000Z",
            "actualStartTime": "2019-05-31T12:15:14.999Z",
            "fixedStartTime": "2019-05-31T12:00:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1104986,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T12:27:04.966Z",
            "scheduledEndTime": "2019-06-03T12:22:00.000Z",
            "actualStartTime": "2019-05-31T12:27:04.966Z",
            "duration": 258900000
          }
        ],
        "allPhases": [
          {
            "id": 1104985,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T12:15:14.999Z",
            "scheduledEndTime": "2019-06-03T12:15:00.000Z",
            "actualStartTime": "2019-05-31T12:15:14.999Z",
            "fixedStartTime": "2019-05-31T12:00:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1104986,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-31T12:27:04.966Z",
            "scheduledEndTime": "2019-06-03T12:22:00.000Z",
            "actualStartTime": "2019-05-31T12:27:04.966Z",
            "duration": 258900000
          },
          {
            "id": 1104987,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T12:22:00.000Z",
            "scheduledEndTime": "2019-06-05T12:22:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1104988,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T12:22:00.000Z",
            "scheduledEndTime": "2019-06-06T12:22:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1104989,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T12:22:00.000Z",
            "scheduledEndTime": "2019-06-07T00:22:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          600,
          300
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 17138
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T09:14Z",
        "createdAt": "2019-05-19T10:16Z",
        "createdBy": "22736560",
        "updatedBy": "22736560",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WIDGET_OR_MOBILE_SCREEN_DESIGN",
        "name": "Cycle Time Mobile App Design Challenge",
        "reviewType": "INTERNAL",
        "id": 30091082,
        "forumId": 677656,
        "numSubmissions": 18,
        "numRegistrants": 54,
        "numSubmitters": 15,
        "registrationStartDate": "2019-05-19T12:02:13.695Z",
        "registrationEndDate": "2019-05-26T11:59:41.969Z",
        "checkpointSubmissionEndDate": "2019-05-26T12:02:19.971Z",
        "submissionEndDate": "2019-06-03T12:00:00.000Z",
        "totalCheckpointPrize": 500,
        "totalPrize": 2750,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1096967,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T12:00:00.000Z",
          "scheduledEndTime": "2019-06-03T16:00:00.000Z",
          "duration": 14400000
        },
        "projectId": 22619,
        "projectName": "Mobile",
        "currentPhases": [
          {
            "id": 1096964,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-19T12:07:50.112Z",
            "scheduledEndTime": "2019-06-03T12:00:00.000Z",
            "actualStartTime": "2019-05-19T12:07:50.112Z",
            "duration": 1295589888
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1096960,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-19T11:30:13.286Z",
            "scheduledEndTime": "2019-05-19T11:30:30.045Z",
            "actualStartTime": "2019-05-19T11:30:13.286Z",
            "actualEndTime": "2019-05-19T11:30:30.045Z",
            "fixedStartTime": "2019-05-19T11:30:13.286Z",
            "duration": 172800000
          },
          {
            "id": 1096961,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-19T11:30:48.013Z",
            "scheduledEndTime": "2019-05-19T12:01:21.799Z",
            "actualStartTime": "2019-05-19T11:30:48.013Z",
            "actualEndTime": "2019-05-19T12:01:21.799Z",
            "duration": 21600000
          },
          {
            "id": 1096962,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-19T12:02:13.695Z",
            "scheduledEndTime": "2019-05-26T11:59:41.969Z",
            "actualStartTime": "2019-05-19T12:02:13.695Z",
            "actualEndTime": "2019-05-26T11:59:41.969Z",
            "fixedStartTime": "2019-05-19T12:02:13.695Z",
            "duration": 604824307
          },
          {
            "id": 1096963,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-19T12:07:16.297Z",
            "scheduledEndTime": "2019-05-26T12:02:19.971Z",
            "actualStartTime": "2019-05-19T12:07:16.297Z",
            "actualEndTime": "2019-05-26T12:02:19.971Z",
            "duration": 604469859
          },
          {
            "id": 1096964,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-19T12:07:50.112Z",
            "scheduledEndTime": "2019-06-03T12:00:00.000Z",
            "actualStartTime": "2019-05-19T12:07:50.112Z",
            "duration": 1295589888
          },
          {
            "id": 1096965,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-26T12:02:52.327Z",
            "scheduledEndTime": "2019-05-26T19:39:12.979Z",
            "actualStartTime": "2019-05-26T12:02:52.327Z",
            "actualEndTime": "2019-05-26T19:39:12.979Z",
            "duration": 14400000
          },
          {
            "id": 1096966,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-26T19:39:40.806Z",
            "scheduledEndTime": "2019-05-30T09:02:40.301Z",
            "actualStartTime": "2019-05-26T19:39:40.806Z",
            "actualEndTime": "2019-05-30T09:02:40.301Z",
            "duration": 274879194
          },
          {
            "id": 1096967,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T12:00:00.000Z",
            "scheduledEndTime": "2019-06-03T16:00:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1096968,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T16:00:00.000Z",
            "scheduledEndTime": "2019-06-09T16:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1096969,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-09T16:00:00.000Z",
            "scheduledEndTime": "2019-06-14T16:00:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1700,
          800,
          250
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22619
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-31T17:52Z",
        "createdAt": "2019-05-29T11:11Z",
        "createdBy": "22880988",
        "updatedBy": "22880988",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WEB_DESIGNS",
        "name": "Marathon Match Promotions Banners Design Challenge",
        "reviewType": "INTERNAL",
        "id": 30091975,
        "forumId": 679398,
        "numSubmissions": 15,
        "numRegistrants": 21,
        "numSubmitters": 9,
        "registrationStartDate": "2019-05-29T12:34:56.498Z",
        "registrationEndDate": "2019-05-31T12:59:58.813Z",
        "checkpointSubmissionEndDate": "2019-05-31T13:00:22.637Z",
        "submissionEndDate": "2019-06-03T11:59:00.000Z",
        "totalCheckpointPrize": 250,
        "totalPrize": 1150,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1103373,
          "phaseType": "Screening",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T11:59:00.000Z",
          "scheduledEndTime": "2019-06-03T15:59:00.000Z",
          "duration": 14400000
        },
        "projectId": 22249,
        "projectName": "Rodeo II",
        "currentPhases": [
          {
            "id": 1103370,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T00:13:52.581Z",
            "scheduledEndTime": "2019-06-03T11:59:00.000Z",
            "actualStartTime": "2019-05-30T00:13:52.581Z",
            "duration": 387967419
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1103366,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T12:24:45.192Z",
            "scheduledEndTime": "2019-05-29T12:25:07.303Z",
            "actualStartTime": "2019-05-29T12:24:45.192Z",
            "actualEndTime": "2019-05-29T12:25:07.303Z",
            "fixedStartTime": "2019-05-29T12:24:45.192Z",
            "duration": 172800000
          },
          {
            "id": 1103367,
            "phaseType": "Specification Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T12:27:07.938Z",
            "scheduledEndTime": "2019-05-29T12:32:54.037Z",
            "actualStartTime": "2019-05-29T12:27:07.938Z",
            "actualEndTime": "2019-05-29T12:32:54.037Z",
            "duration": 21600000
          },
          {
            "id": 1103368,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T12:34:56.498Z",
            "scheduledEndTime": "2019-05-31T12:59:58.813Z",
            "actualStartTime": "2019-05-29T12:34:56.498Z",
            "actualEndTime": "2019-05-31T12:59:58.813Z",
            "fixedStartTime": "2019-05-29T12:34:56.498Z",
            "duration": 163468572
          },
          {
            "id": 1103369,
            "phaseType": "Checkpoint Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-29T12:48:55.812Z",
            "scheduledEndTime": "2019-05-31T13:00:22.637Z",
            "actualStartTime": "2019-05-29T12:48:55.812Z",
            "actualEndTime": "2019-05-31T13:00:22.637Z",
            "duration": 128767419
          },
          {
            "id": 1103370,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T00:13:52.581Z",
            "scheduledEndTime": "2019-06-03T11:59:00.000Z",
            "actualStartTime": "2019-05-30T00:13:52.581Z",
            "duration": 387967419
          },
          {
            "id": 1103371,
            "phaseType": "Checkpoint Screening",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-31T13:00:40.514Z",
            "scheduledEndTime": "2019-05-31T17:03:25.121Z",
            "actualStartTime": "2019-05-31T13:00:40.514Z",
            "actualEndTime": "2019-05-31T17:03:25.121Z",
            "duration": 14400000
          },
          {
            "id": 1103372,
            "phaseType": "Checkpoint Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-31T17:03:39.667Z",
            "scheduledEndTime": "2019-05-31T17:34:55.468Z",
            "actualStartTime": "2019-05-31T17:03:39.667Z",
            "actualEndTime": "2019-05-31T17:34:55.468Z",
            "duration": 172800000
          },
          {
            "id": 1103373,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T11:59:00.000Z",
            "scheduledEndTime": "2019-06-03T15:59:00.000Z",
            "duration": 14400000
          },
          {
            "id": 1103374,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T15:59:00.000Z",
            "scheduledEndTime": "2019-06-09T15:59:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1103375,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-09T15:59:00.000Z",
            "scheduledEndTime": "2019-06-14T15:59:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          750,
          250,
          150
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 22249
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T07:26Z",
        "createdAt": "2019-05-29T15:58Z",
        "createdBy": "22923055",
        "updatedBy": "22923055",
        "technologies": [
          "Angular 2+",
          "REST"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Hestia-CC Integration - IV | Import, Edit, Update and history functions",
        "reviewType": "COMMUNITY",
        "id": 30091997,
        "forumId": 68760,
        "numSubmissions": 0,
        "numRegistrants": 27,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-30T07:20:19.722Z",
        "registrationEndDate": "2019-06-03T05:20:00.000Z",
        "submissionEndDate": "2019-06-03T07:26:00.000Z",
        "platforms": [
          "NodeJS"
        ],
        "totalPrize": 1200,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1103537,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T07:26:00.000Z",
          "scheduledEndTime": "2019-06-04T01:26:00.000Z",
          "duration": 64800000
        },
        "projectId": 21639,
        "projectName": "Hestia Control Center Design (Flat File Project)",
        "currentPhases": [
          {
            "id": 1103535,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T07:20:19.722Z",
            "scheduledEndTime": "2019-06-03T05:20:00.000Z",
            "actualStartTime": "2019-05-30T07:20:19.722Z",
            "fixedStartTime": "2019-05-30T07:20:00.000Z",
            "duration": 338400000
          },
          {
            "id": 1103536,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T07:26:34.713Z",
            "scheduledEndTime": "2019-06-03T07:26:00.000Z",
            "actualStartTime": "2019-05-30T07:26:34.713Z",
            "duration": 345600000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1103535,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T07:20:19.722Z",
            "scheduledEndTime": "2019-06-03T05:20:00.000Z",
            "actualStartTime": "2019-05-30T07:20:19.722Z",
            "fixedStartTime": "2019-05-30T07:20:00.000Z",
            "duration": 338400000
          },
          {
            "id": 1103536,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-30T07:26:34.713Z",
            "scheduledEndTime": "2019-06-03T07:26:00.000Z",
            "actualStartTime": "2019-05-30T07:26:34.713Z",
            "duration": 345600000
          },
          {
            "id": 1103537,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T07:26:00.000Z",
            "scheduledEndTime": "2019-06-04T01:26:00.000Z",
            "duration": 64800000
          },
          {
            "id": 1103538,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-04T01:26:00.000Z",
            "scheduledEndTime": "2019-06-04T19:26:00.000Z",
            "duration": 64800000
          },
          {
            "id": 1103539,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-04T19:26:00.000Z",
            "scheduledEndTime": "2019-06-05T07:26:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          800,
          400
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 21639
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-27T07:40Z",
        "createdAt": "2019-05-25T05:03Z",
        "createdBy": "15763205",
        "updatedBy": "23274118",
        "technologies": [
          "Python",
          "Data Science"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Sandesh - Forecasting Model Challenge - Proof of Concept",
        "reviewType": "INTERNAL",
        "id": 30091690,
        "forumId": 68474,
        "numSubmissions": 1,
        "numRegistrants": 92,
        "numSubmitters": 1,
        "registrationStartDate": "2019-05-25T05:56:36.756Z",
        "registrationEndDate": "2019-05-31T05:58:16.338Z",
        "submissionEndDate": "2019-06-03T07:13:00.000Z",
        "platforms": [
          "AWS"
        ],
        "totalPrize": 3800,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1101315,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T07:13:00.000Z",
          "scheduledEndTime": "2019-06-06T07:13:00.000Z",
          "duration": 259200000
        },
        "projectId": 21925,
        "projectName": " CFO Forecasting",
        "currentPhases": [
          {
            "id": 1101314,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T07:18:24.497Z",
            "scheduledEndTime": "2019-06-03T07:13:00.000Z",
            "actualStartTime": "2019-05-25T07:18:24.497Z",
            "duration": 777300000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1101313,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-25T05:56:36.756Z",
            "scheduledEndTime": "2019-05-31T05:58:16.338Z",
            "actualStartTime": "2019-05-25T05:56:36.756Z",
            "actualEndTime": "2019-05-31T05:58:16.338Z",
            "fixedStartTime": "2019-05-24T13:00:00.000Z",
            "duration": 518400000
          },
          {
            "id": 1101314,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-25T07:18:24.497Z",
            "scheduledEndTime": "2019-06-03T07:13:00.000Z",
            "actualStartTime": "2019-05-25T07:18:24.497Z",
            "duration": 777300000
          },
          {
            "id": 1101315,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T07:13:00.000Z",
            "scheduledEndTime": "2019-06-06T07:13:00.000Z",
            "duration": 259200000
          },
          {
            "id": 1101316,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T07:13:00.000Z",
            "scheduledEndTime": "2019-06-06T07:14:00.000Z",
            "duration": 60000
          },
          {
            "id": 1101317,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-06T07:14:00.000Z",
            "scheduledEndTime": "2019-06-06T07:15:00.000Z",
            "duration": 60000
          }
        ],
        "prizes": [
          2000,
          1000,
          500,
          200,
          100
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 21925
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-30T16:53Z",
        "createdAt": "2019-05-23T20:18Z",
        "createdBy": "22763515",
        "updatedBy": "8547899",
        "technologies": [
          "Python",
          "Data Science"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "UMDF Reasonable Cost Model Code Challenge",
        "reviewType": "INTERNAL",
        "id": 30091600,
        "forumId": 68397,
        "numSubmissions": 0,
        "numRegistrants": 85,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-24T02:26:41.580Z",
        "registrationEndDate": "2019-06-03T02:26:00.000Z",
        "submissionEndDate": "2019-06-03T02:39:00.000Z",
        "platforms": [
          "Linux"
        ],
        "totalPrize": 7000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1100667,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-03T02:39:00.000Z",
          "scheduledEndTime": "2019-06-05T02:39:00.000Z",
          "duration": 172800000
        },
        "projectId": 21999,
        "projectName": "HP-BEL-MDF-Reasonable Cost Model",
        "currentPhases": [
          {
            "id": 1100665,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T02:26:41.580Z",
            "scheduledEndTime": "2019-06-03T02:26:00.000Z",
            "actualStartTime": "2019-05-24T02:26:41.580Z",
            "fixedStartTime": "2019-05-24T00:00:00.000Z",
            "duration": 864000000
          },
          {
            "id": 1100666,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T02:44:19.629Z",
            "scheduledEndTime": "2019-06-03T02:39:00.000Z",
            "actualStartTime": "2019-05-24T02:44:19.629Z",
            "duration": 863700000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1100665,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T02:26:41.580Z",
            "scheduledEndTime": "2019-06-03T02:26:00.000Z",
            "actualStartTime": "2019-05-24T02:26:41.580Z",
            "fixedStartTime": "2019-05-24T00:00:00.000Z",
            "duration": 864000000
          },
          {
            "id": 1100666,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-24T02:44:19.629Z",
            "scheduledEndTime": "2019-06-03T02:39:00.000Z",
            "actualStartTime": "2019-05-24T02:44:19.629Z",
            "duration": 863700000
          },
          {
            "id": 1100667,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-03T02:39:00.000Z",
            "scheduledEndTime": "2019-06-05T02:39:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1100668,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T02:39:00.000Z",
            "scheduledEndTime": "2019-06-05T03:39:00.000Z",
            "duration": 3600000
          },
          {
            "id": 1100669,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T03:39:00.000Z",
            "scheduledEndTime": "2019-06-05T04:39:00.000Z",
            "duration": 3600000
          }
        ],
        "prizes": [
          4000,
          2000,
          1000
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 21999
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T04:15Z",
        "createdAt": "2019-04-29T02:56Z",
        "createdBy": "22748790",
        "updatedBy": "8544935",
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "DEVELOP_MARATHON_MATCH",
        "name": "Detecting Wheezing Sounds for Asthma",
        "reviewType": "COMMUNITY",
        "id": 30089301,
        "forumId": 66208,
        "numSubmissions": 248,
        "numRegistrants": 130,
        "numSubmitters": 18,
        "registrationStartDate": "2019-05-03T13:01:35.811Z",
        "registrationEndDate": "2019-06-02T23:59:00.000Z",
        "submissionEndDate": "2019-06-02T23:59:00.000Z",
        "totalPrize": 16000,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1084411,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-02T23:59:00.000Z",
          "scheduledEndTime": "2019-06-13T12:55:00.000Z",
          "duration": 910560000
        },
        "projectId": 16955,
        "projectName": "TC3 FY19 PayGo Project",
        "currentPhases": [
          {
            "id": 1084409,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-03T13:01:35.811Z",
            "scheduledEndTime": "2019-06-02T23:59:00.000Z",
            "actualStartTime": "2019-05-03T13:01:35.811Z",
            "fixedStartTime": "2019-05-03T13:01:00.000Z",
            "duration": 2631480000
          },
          {
            "id": 1084410,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-03T13:06:31.271Z",
            "scheduledEndTime": "2019-06-02T23:59:00.000Z",
            "actualStartTime": "2019-05-03T13:06:31.271Z",
            "duration": 2631180000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1084409,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-03T13:01:35.811Z",
            "scheduledEndTime": "2019-06-02T23:59:00.000Z",
            "actualStartTime": "2019-05-03T13:01:35.811Z",
            "fixedStartTime": "2019-05-03T13:01:00.000Z",
            "duration": 2631480000
          },
          {
            "id": 1084410,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-03T13:06:31.271Z",
            "scheduledEndTime": "2019-06-02T23:59:00.000Z",
            "actualStartTime": "2019-05-03T13:06:31.271Z",
            "duration": 2631180000
          },
          {
            "id": 1084411,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-02T23:59:00.000Z",
            "scheduledEndTime": "2019-06-13T12:55:00.000Z",
            "duration": 910560000
          }
        ],
        "prizes": [
          8000,
          4000,
          2000,
          1000,
          1000
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 16955
          }
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "updatedAt": "2019-05-29T06:23Z",
        "createdAt": "2019-05-29T05:36Z",
        "createdBy": "22923055",
        "updatedBy": "22923055",
        "technologies": [
          "ReactJS"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "BT-TOSCA Architecture - I | Application structure & Audit log events",
        "reviewType": "INTERNAL",
        "id": 30091944,
        "forumId": 68709,
        "numSubmissions": 0,
        "numRegistrants": 24,
        "numSubmitters": 0,
        "registrationStartDate": "2019-05-29T05:53:34.149Z",
        "registrationEndDate": "2019-06-02T13:00:00.000Z",
        "submissionEndDate": "2019-06-02T13:29:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 1100,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 1103141,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-06-02T13:29:00.000Z",
          "scheduledEndTime": "2019-06-04T13:29:00.000Z",
          "duration": 172800000
        },
        "projectId": 21580,
        "projectName": "BT - Tosca Framework Design",
        "currentPhases": [
          {
            "id": 1103139,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T05:53:34.149Z",
            "scheduledEndTime": "2019-06-02T13:00:00.000Z",
            "actualStartTime": "2019-05-29T05:53:34.149Z",
            "fixedStartTime": "2019-05-29T05:53:00.000Z",
            "duration": 371220000
          },
          {
            "id": 1103140,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T06:23:22.643Z",
            "scheduledEndTime": "2019-06-02T13:29:00.000Z",
            "actualStartTime": "2019-05-29T06:23:22.643Z",
            "duration": 371160000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 1103139,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T05:53:34.149Z",
            "scheduledEndTime": "2019-06-02T13:00:00.000Z",
            "actualStartTime": "2019-05-29T05:53:34.149Z",
            "fixedStartTime": "2019-05-29T05:53:00.000Z",
            "duration": 371220000
          },
          {
            "id": 1103140,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-05-29T06:23:22.643Z",
            "scheduledEndTime": "2019-06-02T13:29:00.000Z",
            "actualStartTime": "2019-05-29T06:23:22.643Z",
            "duration": 371160000
          },
          {
            "id": 1103141,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-02T13:29:00.000Z",
            "scheduledEndTime": "2019-06-04T13:29:00.000Z",
            "duration": 172800000
          },
          {
            "id": 1103142,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-04T13:29:00.000Z",
            "scheduledEndTime": "2019-06-05T13:29:00.000Z",
            "duration": 86400000
          },
          {
            "id": 1103143,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-06-05T13:29:00.000Z",
            "scheduledEndTime": "2019-06-06T01:29:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          800,
          300
        ],
        "events": [
          {
            "eventId": 3451,
            "eventName": "2019 Topcoder(R) Open",
            "projectId": 21580
          }
        ],
        "isTask": false,
        "isRegistered": false
      }
    ]
  },
  "version": "v3"
};

export const submitSuccessResponse = {
  "req":
  {
    "method": "POST",
    "url": "https://api.topcoder-dev.com/v5/submissions",
    "headers":
    {
      "user-agent": "node-superagent/3.8.3",
      "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJjb3BpbG90IiwiYWRtaW5pc3RyYXRvciJdLCJpc3MiOiJodHRwczovL2FwaS50b3Bjb2Rlci1kZXYuY29tIiwiaGFuZGxlIjoibWVzcyIsImV4cCI6MTU2NTAyNzk3MiwidXNlcklkIjoiMzA1Mzg0IiwiaWF0IjoxNTY1MDI3MzcyLCJlbWFpbCI6Im1lc3NAYXBwaXJpby5jb20iLCJqdGkiOiI3YzM3NjM0ZS1mNjE5LTRhMTEtYTE2ZS03NTBkY2NjNzAxZDcifQ.8O86O-oLyxt1-ZCRu3eny8KEVFe61wg-Jt5D-6U_r7w"
    }
  },
  "header": {
    "date": "Mon, 05 Aug 2019 17:52:55 GMT",
    "content-type": "application/json; charset=utf-8",
    "content-length": "373",
    "connection": "close",
    "access-control-allow-origin": "*",
    "etag": "W/\"175-ps2/11lwQrX39AE9dDjPCdrZgtg\"",
    "x-powered-by": "Express",
    "x-ratelimit-limit": "0",
    "x-ratelimit-remaining": "0",
    "x-ratelimit-reset": "0"
  },
  "status": 200,
  "text": {
    "id": "315febb3-245d-48bc-8551-4418d3fc2c9c",
    "type": "Contest Submission",
    "url": "https://topcoder-dev-submissions-dmz.s3.amazonaws.com/315febb3-245d-48bc-8551-4418d3fc2c9c.zip",
    "memberId": 305384,
    "challengeId": 30052924,
    "created": "2019-08-05T17:52:55.354Z",
    "updated": "2019-08-05T17:52:55.354Z",
    "createdBy": "mess",
    "updatedBy": "mess",
    "submissionPhaseId": 753869,
    "fileType": "zip"
  }
};

export const validChallengeDetails = {
  "subTrack": "FIRST_2_FINISH",
  "challengeTitle": "F2F Challenge - 1001",
  "challengeId": 30052924,
  "projectId": 7572,
  "forumId": 31139,
  "detailedRequirements": "Test",
  "reviewScorecardId": 30001600,
  "numberOfCheckpointsPrizes": 0,
  "postingDate": "2018-09-03T15:32:18.767Z",
  "registrationEndDate": "2020-09-13T15:31:00.000Z",
  "submissionEndDate": "2020-10-01T15:34:00.000Z",
  "reviewType": "INTERNAL",
  "forumLink": "https://apps.topcoder.com/forums/?module=Category&categoryID=31139",
  "appealsEndDate": "2018-09-04T15:40:00.000Z",
  "currentStatus": "Active",
  "challengeCommunity": "develop",
  "directUrl": "https://www.topcoder.com/direct/contest/detail.action?projectId=30052924",
  "prizes": [
    15
  ],
  "terms": [
    {
      "termsOfUseId": 20704,
      "role": "Primary Screener",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Reviewer",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 21193,
      "role": "Submitter",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Terms for TopCoder Competitions v2.1",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Aggregator",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Specification Reviewer",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Final Reviewer",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20794,
      "role": "Manager",
      "agreeabilityType": "Non-electronically-agreeable",
      "title": "Approved OR Managers - TopCoder Technical Team",
      "url": "http://www.topcoder.com"
    },
    {
      "termsOfUseId": 20893,
      "role": "Copilot",
      "agreeabilityType": "Non-electronically-agreeable",
      "title": "TopCoder Master Services Agreement",
      "url": "http://www.topcoder.com/wiki/download/attachments/35129137/Member+Master+Agreement+v0020409.pdf"
    }
  ],
  "finalSubmissionGuidelines": "test",
  "technologies": [
    "Other"
  ],
  "platforms": [
    "Other"
  ],
  "currentPhaseName": "Submission",
  "currentPhaseRemainingTime": 38539955,
  "currentPhaseEndDate": "2020-10-01T15:34:00.000Z",
  "registrants": [
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-01-29T18:47:08.000Z",
      "submissionDate": "2019-01-29T18:48:53.000Z",
      "handle": "KriegBaer"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-09-05T20:25:52.000Z",
      "submissionDate": "2019-01-31T06:18:10.000Z",
      "handle": "lazybaer"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-09-19T21:04:16.000Z",
      "handle": "yichen"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-09-27T07:20:24.000Z",
      "submissionDate": "2019-07-13T10:44:29.000Z",
      "handle": "pshah_manager"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-12T09:58:07.000Z",
      "submissionDate": "2019-07-10T10:13:49.000Z",
      "handle": "mess"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-16T07:43:26.000Z",
      "handle": "bop_t1"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-25T16:06:32.000Z",
      "submissionDate": "2018-10-25T17:11:26.000Z",
      "handle": "jcori"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-31T00:20:03.000Z",
      "submissionDate": "2018-10-31T00:21:00.000Z",
      "handle": "TestAccount1"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-06T08:55:35.000Z",
      "submissionDate": "2019-03-06T08:57:27.000Z",
      "handle": "somethin-dev"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-15T17:40:59.000Z",
      "handle": 12345678
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-19T19:48:01.000Z",
      "handle": "ACRush"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-21T08:55:53.000Z",
      "handle": "huanner"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-04-08T11:46:06.000Z",
      "handle": "direct_user"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-04-29T05:10:04.000Z",
      "submissionDate": "2019-07-08T15:20:21.000Z",
      "handle": "easteregg"
    }
  ],
  "phases": [
    {
      "duration": 64022381233,
      "actualStartTime": "2018-09-03T15:32:18.767Z",
      "scheduledStartTime": "2018-09-03T15:32:18.767Z",
      "phaseId": 753867,
      "scheduledEndTime": "2020-09-13T15:31:00.000Z",
      "fixedStartTime": "2018-09-03T15:32:18.767Z",
      "type": "Registration",
      "status": "Open"
    },
    {
      "duration": 86400000,
      "scheduledStartTime": "2018-09-03T15:40:18.874Z",
      "phaseId": 753868,
      "scheduledEndTime": "2018-09-04T15:40:00.000Z",
      "type": "Iterative Review",
      "status": "Scheduled"
    },
    {
      "duration": 65577281126,
      "actualStartTime": "2018-09-03T15:40:18.874Z",
      "scheduledStartTime": "2018-09-03T15:40:18.874Z",
      "phaseId": 753869,
      "scheduledEndTime": "2020-10-01T15:34:00.000Z",
      "type": "Submission",
      "status": "Open"
    }
  ],
  "submissions": [
    {
      "submitter": "somethin-dev",
      "submitterId": 40154560,
      "submissions": [
        {
          "submissionId": 207083,
          "submissionStatus": "Active",
          "submissionTime": "2019-03-06T08:57:27.000Z"
        },
        {
          "submissionId": 207082,
          "submissionStatus": "Active",
          "submissionTime": "2019-03-06T08:57:13.000Z"
        }
      ]
    },
    {
      "submitter": "easteregg",
      "submitterId": 40036043,
      "submissions": [
        {
          "submissionId": 207787,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-08T15:20:21.000Z"
        },
        {
          "submissionId": 207786,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-08T15:20:21.000Z"
        }
      ]
    },
    {
      "submitter": "KriegBaer",
      "submitterId": 40051753,
      "submissions": [
        {
          "submissionId": 206672,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-29T18:48:53.000Z"
        }
      ]
    },
    {
      "submitter": "lazybaer",
      "submitterId": 23225544,
      "submissions": [
        {
          "submissionId": 206711,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-31T06:18:10.000Z"
        },
        {
          "submissionId": 206710,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-30T19:42:37.000Z"
        },
        {
          "submissionId": 206670,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-29T15:55:11.000Z"
        },
        {
          "submissionId": 206669,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-29T15:52:48.000Z"
        },
        {
          "submissionId": 205856,
          "submissionStatus": "Active",
          "submissionTime": "2018-11-02T19:56:32.000Z"
        }
      ]
    },
    {
      "submitter": "TestAccount1",
      "submitterId": 40157096,
      "submissions": [
        {
          "submissionId": 205855,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-31T00:21:00.000Z"
        }
      ]
    },
    {
      "submitter": "mess",
      "submitterId": 305384,
      "submissions": [
        {
          "submissionId": 207804,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-10T10:13:49.000Z"
        },
        {
          "submissionId": 207803,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-10T10:12:04.000Z"
        },
        {
          "submissionId": 207802,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-10T10:09:29.000Z"
        },
        {
          "submissionId": 206540,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-17T08:01:22.000Z"
        },
        {
          "submissionId": 205851,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T14:43:48.000Z"
        }
      ]
    },
    {
      "submitter": "pshah_manager",
      "submitterId": 40152856,
      "submissions": [
        {
          "submissionId": 207950,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-13T10:44:29.000Z"
        },
        {
          "submissionId": 207252,
          "submissionStatus": "Active",
          "submissionTime": "2019-04-15T01:22:36.000Z"
        }
      ]
    },
    {
      "submitter": "jcori",
      "submitterId": 40029484,
      "submissions": [
        {
          "submissionId": 205854,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T17:11:26.000Z"
        },
        {
          "submissionId": 205853,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T17:00:42.000Z"
        },
        {
          "submissionId": 205852,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T16:08:23.000Z"
        }
      ]
    }
  ],
  "checkpoints": [

  ],
  "numberOfRegistrants": 14,
  "numberOfSubmissions": 21,
  "numberOfSubmitters": 8
}

export const unregisteredChallengeDetails = {
  "subTrack": "FIRST_2_FINISH",
  "challengeTitle": "F2F Challenge - 1001",
  "challengeId": 30052925,
  "projectId": 7572,
  "forumId": 31139,
  "detailedRequirements": "Test",
  "reviewScorecardId": 30001600,
  "numberOfCheckpointsPrizes": 0,
  "postingDate": "2018-09-03T15:32:18.767Z",
  "registrationEndDate": "2020-09-13T15:31:00.000Z",
  "submissionEndDate": "2020-10-01T15:34:00.000Z",
  "reviewType": "INTERNAL",
  "forumLink": "https://apps.topcoder.com/forums/?module=Category&categoryID=31139",
  "appealsEndDate": "2018-09-04T15:40:00.000Z",
  "currentStatus": "Active",
  "challengeCommunity": "develop",
  "directUrl": "https://www.topcoder.com/direct/contest/detail.action?projectId=30052924",
  "prizes": [
    15
  ],
  "terms": [
    {
      "termsOfUseId": 20704,
      "role": "Primary Screener",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Reviewer",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 21193,
      "role": "Submitter",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Terms for TopCoder Competitions v2.1",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Aggregator",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Specification Reviewer",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Final Reviewer",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20794,
      "role": "Manager",
      "agreeabilityType": "Non-electronically-agreeable",
      "title": "Approved OR Managers - TopCoder Technical Team",
      "url": "http://www.topcoder.com"
    },
    {
      "termsOfUseId": 20893,
      "role": "Copilot",
      "agreeabilityType": "Non-electronically-agreeable",
      "title": "TopCoder Master Services Agreement",
      "url": "http://www.topcoder.com/wiki/download/attachments/35129137/Member+Master+Agreement+v0020409.pdf"
    }
  ],
  "finalSubmissionGuidelines": "test",
  "technologies": [
    "Other"
  ],
  "platforms": [
    "Other"
  ],
  "currentPhaseName": "Submission",
  "currentPhaseRemainingTime": 38539955,
  "currentPhaseEndDate": "2020-10-01T15:34:00.000Z",
  "registrants": [
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-01-29T18:47:08.000Z",
      "submissionDate": "2019-01-29T18:48:53.000Z",
      "handle": "KriegBaer"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-09-05T20:25:52.000Z",
      "submissionDate": "2019-01-31T06:18:10.000Z",
      "handle": "lazybaer"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-09-19T21:04:16.000Z",
      "handle": "yichen"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-09-27T07:20:24.000Z",
      "submissionDate": "2019-07-13T10:44:29.000Z",
      "handle": "pshah_manager"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-16T07:43:26.000Z",
      "handle": "bop_t1"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-25T16:06:32.000Z",
      "submissionDate": "2018-10-25T17:11:26.000Z",
      "handle": "jcori"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-31T00:20:03.000Z",
      "submissionDate": "2018-10-31T00:21:00.000Z",
      "handle": "TestAccount1"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-06T08:55:35.000Z",
      "submissionDate": "2019-03-06T08:57:27.000Z",
      "handle": "somethin-dev"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-15T17:40:59.000Z",
      "handle": 12345678
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-19T19:48:01.000Z",
      "handle": "ACRush"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-21T08:55:53.000Z",
      "handle": "huanner"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-04-08T11:46:06.000Z",
      "handle": "direct_user"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-04-29T05:10:04.000Z",
      "submissionDate": "2019-07-08T15:20:21.000Z",
      "handle": "easteregg"
    }
  ],
  "phases": [
    {
      "duration": 64022381233,
      "actualStartTime": "2018-09-03T15:32:18.767Z",
      "scheduledStartTime": "2018-09-03T15:32:18.767Z",
      "phaseId": 753867,
      "scheduledEndTime": "2020-09-13T15:31:00.000Z",
      "fixedStartTime": "2018-09-03T15:32:18.767Z",
      "type": "Registration",
      "status": "Open"
    },
    {
      "duration": 86400000,
      "scheduledStartTime": "2018-09-03T15:40:18.874Z",
      "phaseId": 753868,
      "scheduledEndTime": "2018-09-04T15:40:00.000Z",
      "type": "Iterative Review",
      "status": "Scheduled"
    },
    {
      "duration": 65577281126,
      "actualStartTime": "2018-09-03T15:40:18.874Z",
      "scheduledStartTime": "2018-09-03T15:40:18.874Z",
      "phaseId": 753869,
      "scheduledEndTime": "2020-10-01T15:34:00.000Z",
      "type": "Submission",
      "status": "Open"
    }
  ],
  "submissions": [
    {
      "submitter": "somethin-dev",
      "submitterId": 40154560,
      "submissions": [
        {
          "submissionId": 207083,
          "submissionStatus": "Active",
          "submissionTime": "2019-03-06T08:57:27.000Z"
        },
        {
          "submissionId": 207082,
          "submissionStatus": "Active",
          "submissionTime": "2019-03-06T08:57:13.000Z"
        }
      ]
    },
    {
      "submitter": "easteregg",
      "submitterId": 40036043,
      "submissions": [
        {
          "submissionId": 207787,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-08T15:20:21.000Z"
        },
        {
          "submissionId": 207786,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-08T15:20:21.000Z"
        }
      ]
    },
    {
      "submitter": "KriegBaer",
      "submitterId": 40051753,
      "submissions": [
        {
          "submissionId": 206672,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-29T18:48:53.000Z"
        }
      ]
    },
    {
      "submitter": "lazybaer",
      "submitterId": 23225544,
      "submissions": [
        {
          "submissionId": 206711,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-31T06:18:10.000Z"
        },
        {
          "submissionId": 206710,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-30T19:42:37.000Z"
        },
        {
          "submissionId": 206670,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-29T15:55:11.000Z"
        },
        {
          "submissionId": 206669,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-29T15:52:48.000Z"
        },
        {
          "submissionId": 205856,
          "submissionStatus": "Active",
          "submissionTime": "2018-11-02T19:56:32.000Z"
        }
      ]
    },
    {
      "submitter": "TestAccount1",
      "submitterId": 40157096,
      "submissions": [
        {
          "submissionId": 205855,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-31T00:21:00.000Z"
        }
      ]
    },
    {
      "submitter": "mess",
      "submitterId": 305384,
      "submissions": [
        {
          "submissionId": 207804,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-10T10:13:49.000Z"
        },
        {
          "submissionId": 207803,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-10T10:12:04.000Z"
        },
        {
          "submissionId": 207802,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-10T10:09:29.000Z"
        },
        {
          "submissionId": 206540,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-17T08:01:22.000Z"
        },
        {
          "submissionId": 205851,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T14:43:48.000Z"
        }
      ]
    },
    {
      "submitter": "pshah_manager",
      "submitterId": 40152856,
      "submissions": [
        {
          "submissionId": 207950,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-13T10:44:29.000Z"
        },
        {
          "submissionId": 207252,
          "submissionStatus": "Active",
          "submissionTime": "2019-04-15T01:22:36.000Z"
        }
      ]
    },
    {
      "submitter": "jcori",
      "submitterId": 40029484,
      "submissions": [
        {
          "submissionId": 205854,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T17:11:26.000Z"
        },
        {
          "submissionId": 205853,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T17:00:42.000Z"
        },
        {
          "submissionId": 205852,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T16:08:23.000Z"
        }
      ]
    }
  ],
  "checkpoints": [

  ],
  "numberOfRegistrants": 14,
  "numberOfSubmissions": 21,
  "numberOfSubmitters": 8
}

export const closedForSubmissionChallengeDetails = {
  "subTrack": "FIRST_2_FINISH",
  "challengeTitle": "F2F Challenge - 1001",
  "challengeId": 30052926,
  "projectId": 7572,
  "forumId": 31139,
  "detailedRequirements": "Test",
  "reviewScorecardId": 30001600,
  "numberOfCheckpointsPrizes": 0,
  "postingDate": "2018-09-03T15:32:18.767Z",
  "registrationEndDate": "2020-09-13T15:31:00.000Z",
  "submissionEndDate": "2020-10-01T15:34:00.000Z",
  "reviewType": "INTERNAL",
  "forumLink": "https://apps.topcoder.com/forums/?module=Category&categoryID=31139",
  "appealsEndDate": "2018-09-04T15:40:00.000Z",
  "currentStatus": "Active",
  "challengeCommunity": "develop",
  "directUrl": "https://www.topcoder.com/direct/contest/detail.action?projectId=30052924",
  "prizes": [
    15
  ],
  "terms": [
    {
      "termsOfUseId": 20704,
      "role": "Primary Screener",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Reviewer",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 21193,
      "role": "Submitter",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Terms for TopCoder Competitions v2.1",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Aggregator",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Specification Reviewer",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20704,
      "role": "Final Reviewer",
      "agreeabilityType": "Electronically-agreeable",
      "title": "Standard Reviewer Terms v1.0",
      "url": ""
    },
    {
      "termsOfUseId": 20794,
      "role": "Manager",
      "agreeabilityType": "Non-electronically-agreeable",
      "title": "Approved OR Managers - TopCoder Technical Team",
      "url": "http://www.topcoder.com"
    },
    {
      "termsOfUseId": 20893,
      "role": "Copilot",
      "agreeabilityType": "Non-electronically-agreeable",
      "title": "TopCoder Master Services Agreement",
      "url": "http://www.topcoder.com/wiki/download/attachments/35129137/Member+Master+Agreement+v0020409.pdf"
    }
  ],
  "finalSubmissionGuidelines": "test",
  "technologies": [
    "Other"
  ],
  "platforms": [
    "Other"
  ],
  "currentPhaseName": "Submission",
  "currentPhaseRemainingTime": 38539955,
  "currentPhaseEndDate": "2020-10-01T15:34:00.000Z",
  "registrants": [
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-01-29T18:47:08.000Z",
      "submissionDate": "2019-01-29T18:48:53.000Z",
      "handle": "KriegBaer"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-09-05T20:25:52.000Z",
      "submissionDate": "2019-01-31T06:18:10.000Z",
      "handle": "lazybaer"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-09-19T21:04:16.000Z",
      "handle": "yichen"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-09-27T07:20:24.000Z",
      "submissionDate": "2019-07-13T10:44:29.000Z",
      "handle": "pshah_manager"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-12T09:58:07.000Z",
      "submissionDate": "2019-07-10T10:13:49.000Z",
      "handle": "mess"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-16T07:43:26.000Z",
      "handle": "bop_t1"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-25T16:06:32.000Z",
      "submissionDate": "2018-10-25T17:11:26.000Z",
      "handle": "jcori"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2018-10-31T00:20:03.000Z",
      "submissionDate": "2018-10-31T00:21:00.000Z",
      "handle": "TestAccount1"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-06T08:55:35.000Z",
      "submissionDate": "2019-03-06T08:57:27.000Z",
      "handle": "somethin-dev"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-15T17:40:59.000Z",
      "handle": 12345678
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-19T19:48:01.000Z",
      "handle": "ACRush"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-03-21T08:55:53.000Z",
      "handle": "huanner"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-04-08T11:46:06.000Z",
      "handle": "direct_user"
    },
    {
      "reliability": null,
      "colorStyle": "color: #000000",
      "registrationDate": "2019-04-29T05:10:04.000Z",
      "submissionDate": "2019-07-08T15:20:21.000Z",
      "handle": "easteregg"
    }
  ],
  "phases": [
    {
      "duration": 64022381233,
      "actualStartTime": "2018-09-03T15:32:18.767Z",
      "scheduledStartTime": "2018-09-03T15:32:18.767Z",
      "phaseId": 753867,
      "scheduledEndTime": "2020-09-13T15:31:00.000Z",
      "fixedStartTime": "2018-09-03T15:32:18.767Z",
      "type": "Registration",
      "status": "Open"
    },
    {
      "duration": 86400000,
      "scheduledStartTime": "2018-09-03T15:40:18.874Z",
      "phaseId": 753868,
      "scheduledEndTime": "2018-09-04T15:40:00.000Z",
      "type": "Iterative Review",
      "status": "Scheduled"
    },
    {
      "duration": 65577281126,
      "actualStartTime": "2018-09-03T15:40:18.874Z",
      "scheduledStartTime": "2018-09-03T15:40:18.874Z",
      "phaseId": 753869,
      "scheduledEndTime": "2020-10-01T15:34:00.000Z",
      "type": "Submission",
      "status": "Closed"
    }
  ],
  "submissions": [
    {
      "submitter": "somethin-dev",
      "submitterId": 40154560,
      "submissions": [
        {
          "submissionId": 207083,
          "submissionStatus": "Active",
          "submissionTime": "2019-03-06T08:57:27.000Z"
        },
        {
          "submissionId": 207082,
          "submissionStatus": "Active",
          "submissionTime": "2019-03-06T08:57:13.000Z"
        }
      ]
    },
    {
      "submitter": "easteregg",
      "submitterId": 40036043,
      "submissions": [
        {
          "submissionId": 207787,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-08T15:20:21.000Z"
        },
        {
          "submissionId": 207786,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-08T15:20:21.000Z"
        }
      ]
    },
    {
      "submitter": "KriegBaer",
      "submitterId": 40051753,
      "submissions": [
        {
          "submissionId": 206672,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-29T18:48:53.000Z"
        }
      ]
    },
    {
      "submitter": "lazybaer",
      "submitterId": 23225544,
      "submissions": [
        {
          "submissionId": 206711,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-31T06:18:10.000Z"
        },
        {
          "submissionId": 206710,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-30T19:42:37.000Z"
        },
        {
          "submissionId": 206670,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-29T15:55:11.000Z"
        },
        {
          "submissionId": 206669,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-29T15:52:48.000Z"
        },
        {
          "submissionId": 205856,
          "submissionStatus": "Active",
          "submissionTime": "2018-11-02T19:56:32.000Z"
        }
      ]
    },
    {
      "submitter": "TestAccount1",
      "submitterId": 40157096,
      "submissions": [
        {
          "submissionId": 205855,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-31T00:21:00.000Z"
        }
      ]
    },
    {
      "submitter": "mess",
      "submitterId": 305384,
      "submissions": [
        {
          "submissionId": 207804,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-10T10:13:49.000Z"
        },
        {
          "submissionId": 207803,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-10T10:12:04.000Z"
        },
        {
          "submissionId": 207802,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-10T10:09:29.000Z"
        },
        {
          "submissionId": 206540,
          "submissionStatus": "Active",
          "submissionTime": "2019-01-17T08:01:22.000Z"
        },
        {
          "submissionId": 205851,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T14:43:48.000Z"
        }
      ]
    },
    {
      "submitter": "pshah_manager",
      "submitterId": 40152856,
      "submissions": [
        {
          "submissionId": 207950,
          "submissionStatus": "Active",
          "submissionTime": "2019-07-13T10:44:29.000Z"
        },
        {
          "submissionId": 207252,
          "submissionStatus": "Active",
          "submissionTime": "2019-04-15T01:22:36.000Z"
        }
      ]
    },
    {
      "submitter": "jcori",
      "submitterId": 40029484,
      "submissions": [
        {
          "submissionId": 205854,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T17:11:26.000Z"
        },
        {
          "submissionId": 205853,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T17:00:42.000Z"
        },
        {
          "submissionId": 205852,
          "submissionStatus": "Active",
          "submissionTime": "2018-10-25T16:08:23.000Z"
        }
      ]
    }
  ],
  "checkpoints": [

  ],
  "numberOfRegistrants": 14,
  "numberOfSubmissions": 21,
  "numberOfSubmitters": 8
}

export const memberChallengesList = {
  "id": "4da4e65e:16cb911536f:-7b02",
  "result": {
    "success": true,
    "status": 200,
    "metadata": {
      "totalCount": 32,
      "allChallengesCount": 32,
      "myChallengesCount": 32,
      "openChallengesCount": 7,
      "ongoingChallengesCount": 25
    },
    "content": [
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter"
          ],
          "hasUserSubmittedForReview": true,
          "submissions": [
            {
              "id": 208520,
              "submittedAt": "2019-08-18T07:15:41.000Z",
              "status": "Active",
              "challengeId": 30052924,
              "type": "Contest Submission"
            },
            {
              "id": 208521,
              "submittedAt": "2019-08-18T07:30:39.000Z",
              "status": "Active",
              "challengeId": 30052924,
              "type": "Contest Submission"
            },
            {
              "id": 208524,
              "submittedAt": "2019-08-22T16:44:13.000Z",
              "status": "Active",
              "challengeId": 30052924,
              "type": "Contest Submission"
            },
            {
              "id": 208525,
              "submittedAt": "2019-08-22T16:44:50.000Z",
              "status": "Active",
              "challengeId": 30052924,
              "type": "Contest Submission"
            }
          ]
        },
        "updatedAt": "2019-05-07T21:27Z",
        "createdAt": "2018-09-03T15:28Z",
        "createdBy": "23274118",
        "updatedBy": "22838965",
        "technologies": [
          "Other"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "F2F Challenge - 1001",
        "reviewType": "INTERNAL",
        "id": 30052924,
        "forumId": 31139,
        "numSubmissions": 88,
        "numRegistrants": 19,
        "numSubmitters": 10,
        "registrationStartDate": "2018-09-03T15:32:18.767Z",
        "registrationEndDate": "2020-09-13T15:31:00.000Z",
        "submissionEndDate": "2020-10-01T15:34:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 15,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 753868,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-09-03T15:40:18.874Z",
          "scheduledEndTime": "2018-09-04T15:40:00.000Z",
          "duration": 86400000
        },
        "projectId": 7572,
        "currentPhases": [
          {
            "id": 753867,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-09-03T15:32:18.767Z",
            "scheduledEndTime": "2020-09-13T15:31:00.000Z",
            "actualStartTime": "2018-09-03T15:32:18.767Z",
            "fixedStartTime": "2018-09-03T15:32:18.767Z",
            "duration": 64022381233
          },
          {
            "id": 753869,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-09-03T15:40:18.874Z",
            "scheduledEndTime": "2020-10-01T15:34:00.000Z",
            "actualStartTime": "2018-09-03T15:40:18.874Z",
            "duration": 65577281126
          }
        ],
        "allPhases": [
          {
            "id": 753867,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-09-03T15:32:18.767Z",
            "scheduledEndTime": "2020-09-13T15:31:00.000Z",
            "actualStartTime": "2018-09-03T15:32:18.767Z",
            "fixedStartTime": "2018-09-03T15:32:18.767Z",
            "duration": 64022381233
          },
          {
            "id": 753868,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-09-03T15:40:18.874Z",
            "scheduledEndTime": "2018-09-04T15:40:00.000Z",
            "duration": 86400000
          },
          {
            "id": 753869,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-09-03T15:40:18.874Z",
            "scheduledEndTime": "2020-10-01T15:34:00.000Z",
            "actualStartTime": "2018-09-03T15:40:18.874Z",
            "duration": 65577281126
          }
        ],
        "prizes": [
          15
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-03-19T19:45Z",
        "createdAt": "2019-03-19T19:32Z",
        "createdBy": "8547899",
        "updatedBy": "8547899",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "DESIGN_FIRST_2_FINISH",
        "name": "test forum design",
        "reviewType": "INTERNAL",
        "id": 30054692,
        "forumId": 602597,
        "numSubmissions": 0,
        "numRegistrants": 8,
        "numSubmitters": 0,
        "registrationStartDate": "2019-03-19T19:45:55.563Z",
        "registrationEndDate": "2020-03-30T19:45:00.000Z",
        "submissionEndDate": "2020-04-01T21:39:00.000Z",
        "totalPrize": 200,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 764566,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-03-19T21:44:44.588Z",
          "scheduledEndTime": "2020-04-29T21:44:00.000Z",
          "duration": 35164800000
        },
        "projectId": 9616,
        "currentPhases": [
          {
            "id": 764565,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-19T19:45:55.563Z",
            "scheduledEndTime": "2020-03-30T19:45:00.000Z",
            "actualStartTime": "2019-03-19T19:45:55.563Z",
            "fixedStartTime": "2019-03-19T13:00:00.000Z",
            "duration": 32572800000
          },
          {
            "id": 764567,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-19T21:44:44.588Z",
            "scheduledEndTime": "2020-04-01T21:39:00.000Z",
            "actualStartTime": "2019-03-19T21:44:44.588Z",
            "duration": 32745300000
          }
        ],
        "submissionViewable": true,
        "allPhases": [
          {
            "id": 764565,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-19T19:45:55.563Z",
            "scheduledEndTime": "2020-03-30T19:45:00.000Z",
            "actualStartTime": "2019-03-19T19:45:55.563Z",
            "fixedStartTime": "2019-03-19T13:00:00.000Z",
            "duration": 32572800000
          },
          {
            "id": 764566,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-03-19T21:44:44.588Z",
            "scheduledEndTime": "2020-04-29T21:44:00.000Z",
            "duration": 35164800000
          },
          {
            "id": 764567,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-19T21:44:44.588Z",
            "scheduledEndTime": "2020-04-01T21:39:00.000Z",
            "actualStartTime": "2019-03-19T21:44:44.588Z",
            "duration": 32745300000
          }
        ],
        "prizes": [
          200
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-03-19T19:24Z",
        "createdAt": "2019-03-19T19:23Z",
        "createdBy": "8547899",
        "updatedBy": "8547899",
        "technologies": [
          "Other"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "test forum watch 1",
        "reviewType": "INTERNAL",
        "id": 30054690,
        "forumId": 32828,
        "numSubmissions": 6,
        "numRegistrants": 9,
        "numSubmitters": 2,
        "registrationStartDate": "2019-03-19T21:27:08.117Z",
        "registrationEndDate": "2020-03-31T21:27:00.000Z",
        "submissionEndDate": "2020-03-31T21:31:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 45,
        "isPrivate": false,
        "projectId": 6900,
        "currentPhases": [
          {
            "id": 764553,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-19T21:27:08.117Z",
            "scheduledEndTime": "2020-03-31T21:27:00.000Z",
            "actualStartTime": "2019-03-19T21:27:08.117Z",
            "fixedStartTime": "2019-03-19T13:00:00.000Z",
            "duration": 32659200000
          },
          {
            "id": 764554,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-06-06T10:34:40.118Z",
            "scheduledEndTime": "2019-06-07T10:34:00.000Z",
            "actualStartTime": "2019-06-06T10:34:40.118Z",
            "duration": 86400000
          },
          {
            "id": 764555,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-19T21:36:43.921Z",
            "scheduledEndTime": "2020-03-31T21:31:00.000Z",
            "actualStartTime": "2019-03-19T21:36:43.921Z",
            "duration": 32658900000
          }
        ],
        "allPhases": [
          {
            "id": 764553,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-19T21:27:08.117Z",
            "scheduledEndTime": "2020-03-31T21:27:00.000Z",
            "actualStartTime": "2019-03-19T21:27:08.117Z",
            "fixedStartTime": "2019-03-19T13:00:00.000Z",
            "duration": 32659200000
          },
          {
            "id": 764554,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-06-06T10:34:40.118Z",
            "scheduledEndTime": "2019-06-07T10:34:00.000Z",
            "actualStartTime": "2019-06-06T10:34:40.118Z",
            "duration": 86400000
          },
          {
            "id": 764555,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-19T21:36:43.921Z",
            "scheduledEndTime": "2020-03-31T21:31:00.000Z",
            "actualStartTime": "2019-03-19T21:36:43.921Z",
            "duration": 32658900000
          }
        ],
        "prizes": [
          45
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-06-05T09:24Z",
        "createdAt": "2015-07-27T17:10Z",
        "createdBy": "11823846",
        "updatedBy": "8547899",
        "technologies": [
          ".NET"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Code Dev-Env Test",
        "reviewType": "COMMUNITY",
        "id": 30049360,
        "forumId": 28457,
        "numSubmissions": 7,
        "numRegistrants": 22,
        "numSubmitters": 7,
        "registrationStartDate": "2015-07-27T13:00:00.000Z",
        "registrationEndDate": "2019-12-02T14:00:00.000Z",
        "submissionEndDate": "2019-12-02T14:00:00.000Z",
        "platforms": [
          "Android"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 733197,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-12-02T14:00:00.000Z",
          "scheduledEndTime": "2019-12-04T14:00:00.000Z",
          "duration": 172800000
        },
        "projectId": 7572,
        "currentPhases": [
          {
            "id": 733195,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2015-07-27T13:00:00.000Z",
            "scheduledEndTime": "2019-12-02T14:00:00.000Z",
            "actualStartTime": "2015-07-27T13:00:00.000Z",
            "fixedStartTime": "2015-07-27T13:00:00.000Z",
            "duration": 137293200000
          }
        ],
        "allPhases": [
          {
            "id": 733195,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2015-07-27T13:00:00.000Z",
            "scheduledEndTime": "2019-12-02T14:00:00.000Z",
            "actualStartTime": "2015-07-27T13:00:00.000Z",
            "fixedStartTime": "2015-07-27T13:00:00.000Z",
            "duration": 137293200000
          },
          {
            "id": 733196,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2015-07-27T13:05:00.000Z",
            "scheduledEndTime": "2019-12-02T14:00:00.000Z",
            "duration": 137292900000
          },
          {
            "id": 733197,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-12-02T14:00:00.000Z",
            "scheduledEndTime": "2019-12-04T14:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 733198,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-12-04T14:00:00.000Z",
            "scheduledEndTime": "2019-12-05T14:00:00.000Z",
            "duration": 86400000
          },
          {
            "id": 733199,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-12-05T14:00:00.000Z",
            "scheduledEndTime": "2019-12-06T02:00:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-08-21T06:12Z",
        "createdAt": "2019-07-23T14:28Z",
        "createdBy": "151743",
        "updatedBy": "8547899",
        "technologies": [
          "Node.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Accessibility Test NDA Challenge",
        "reviewType": "INTERNAL",
        "id": 30055274,
        "forumId": 30008,
        "numSubmissions": 3,
        "numRegistrants": 6,
        "numSubmitters": 3,
        "registrationStartDate": "2019-07-23T16:54:11.979Z",
        "registrationEndDate": "2019-08-30T16:54:00.000Z",
        "submissionEndDate": "2019-08-31T16:55:00.000Z",
        "platforms": [
          "Android"
        ],
        "totalPrize": 150,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 768499,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-08-31T16:55:00.000Z",
          "scheduledEndTime": "2019-09-02T16:55:00.000Z",
          "duration": 172800000
        },
        "projectId": 10833,
        "currentPhases": [
          {
            "id": 768497,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-23T16:54:11.979Z",
            "scheduledEndTime": "2019-08-30T16:54:00.000Z",
            "actualStartTime": "2019-07-23T16:54:11.979Z",
            "fixedStartTime": "2019-07-23T13:00:00.000Z",
            "duration": 3283200000
          },
          {
            "id": 768498,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-23T17:00:50.141Z",
            "scheduledEndTime": "2019-08-31T16:55:00.000Z",
            "actualStartTime": "2019-07-23T17:00:50.141Z",
            "duration": 3369300000
          }
        ],
        "allPhases": [
          {
            "id": 768497,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-23T16:54:11.979Z",
            "scheduledEndTime": "2019-08-30T16:54:00.000Z",
            "actualStartTime": "2019-07-23T16:54:11.979Z",
            "fixedStartTime": "2019-07-23T13:00:00.000Z",
            "duration": 3283200000
          },
          {
            "id": 768498,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-23T17:00:50.141Z",
            "scheduledEndTime": "2019-08-31T16:55:00.000Z",
            "actualStartTime": "2019-07-23T17:00:50.141Z",
            "duration": 3369300000
          },
          {
            "id": 768499,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-08-31T16:55:00.000Z",
            "scheduledEndTime": "2019-09-02T16:55:00.000Z",
            "duration": 172800000
          },
          {
            "id": 768500,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-09-02T16:55:00.000Z",
            "scheduledEndTime": "2019-09-03T16:55:00.000Z",
            "duration": 86400000
          },
          {
            "id": 768501,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-09-03T16:55:00.000Z",
            "scheduledEndTime": "2019-09-04T04:55:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          100,
          50
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter",
            "Reviewer",
            "Copilot",
            "Approver"
          ],
          "hasUserSubmittedForReview": true,
          "submissions": [
            {
              "id": 207952,
              "submittedAt": "2019-07-13T14:21:46.000Z",
              "status": "Deleted",
              "challengeId": 30055217,
              "type": "Contest Submission"
            },
            {
              "id": 208032,
              "submittedAt": "2019-07-15T18:02:38.000Z",
              "status": "Deleted",
              "challengeId": 30055217,
              "type": "Contest Submission"
            },
            {
              "id": 208033,
              "submittedAt": "2019-07-15T18:34:15.000Z",
              "status": "Deleted",
              "challengeId": 30055217,
              "type": "Contest Submission"
            },
            {
              "id": 208034,
              "submittedAt": "2019-07-15T19:14:25.000Z",
              "status": "Deleted",
              "challengeId": 30055217,
              "type": "Contest Submission"
            },
            {
              "id": 208424,
              "submittedAt": "2019-07-25T06:09:35.000Z",
              "status": "Deleted",
              "challengeId": 30055217,
              "type": "Contest Submission"
            },
            {
              "id": 208485,
              "submittedAt": "2019-08-06T10:49:58.000Z",
              "status": "Deleted",
              "challengeId": 30055217,
              "type": "Contest Submission"
            },
            {
              "id": 208486,
              "submittedAt": "2019-08-07T11:22:03.000Z",
              "status": "Deleted",
              "challengeId": 30055217,
              "type": "Contest Submission"
            },
            {
              "id": 208487,
              "submittedAt": "2019-08-07T11:29:04.000Z",
              "status": "Deleted",
              "challengeId": 30055217,
              "type": "Contest Submission"
            },
            {
              "id": 208488,
              "submittedAt": "2019-08-07T12:37:26.000Z",
              "status": "Active",
              "challengeId": 30055217,
              "type": "Contest Submission"
            },
            {
              "id": 208458,
              "submittedAt": "2019-07-26T13:19:16.000Z",
              "status": "Deleted",
              "challengeId": 30055217,
              "type": "Contest Submission"
            }
          ]
        },
        "updatedAt": "2019-07-10T14:38Z",
        "createdAt": "2019-07-10T14:24Z",
        "createdBy": "23124329",
        "updatedBy": "23225544",
        "technologies": [
          "Other"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Atom Package Dummy Contest",
        "reviewType": "INTERNAL",
        "id": 30055217,
        "forumId": 70826,
        "numSubmissions": 5,
        "numRegistrants": 7,
        "numSubmitters": 5,
        "registrationStartDate": "2019-07-10T16:35:42.916Z",
        "registrationEndDate": "2019-08-31T16:35:00.000Z",
        "submissionEndDate": "2019-08-31T16:42:00.000Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 2,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 768089,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-08-31T16:42:00.000Z",
          "scheduledEndTime": "2019-09-02T16:42:00.000Z",
          "duration": 172800000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 768087,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-10T16:35:42.916Z",
            "scheduledEndTime": "2019-08-31T16:35:00.000Z",
            "actualStartTime": "2019-07-10T16:35:42.916Z",
            "fixedStartTime": "2019-07-10T13:00:00.000Z",
            "duration": 4492800000
          },
          {
            "id": 768088,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-10T16:47:05.569Z",
            "scheduledEndTime": "2019-08-31T16:42:00.000Z",
            "actualStartTime": "2019-07-10T16:47:05.569Z",
            "duration": 4492500000
          }
        ],
        "allPhases": [
          {
            "id": 768087,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-10T16:35:42.916Z",
            "scheduledEndTime": "2019-08-31T16:35:00.000Z",
            "actualStartTime": "2019-07-10T16:35:42.916Z",
            "fixedStartTime": "2019-07-10T13:00:00.000Z",
            "duration": 4492800000
          },
          {
            "id": 768088,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-10T16:47:05.569Z",
            "scheduledEndTime": "2019-08-31T16:42:00.000Z",
            "actualStartTime": "2019-07-10T16:47:05.569Z",
            "duration": 4492500000
          },
          {
            "id": 768089,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-08-31T16:42:00.000Z",
            "scheduledEndTime": "2019-09-02T16:42:00.000Z",
            "duration": 172800000
          },
          {
            "id": 768090,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-09-02T16:42:00.000Z",
            "scheduledEndTime": "2019-09-03T16:42:00.000Z",
            "duration": 86400000
          },
          {
            "id": 768091,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-09-03T16:42:00.000Z",
            "scheduledEndTime": "2019-09-04T04:42:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          1,
          1
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-08-18T06:17Z",
        "createdAt": "2019-07-18T06:12Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "DEVELOP_MARATHON_MATCH",
        "name": "MM-Practice-Challenge-Dev",
        "reviewType": "COMMUNITY",
        "id": 30055245,
        "forumId": 0,
        "numSubmissions": 39,
        "numRegistrants": 6,
        "numSubmitters": 1,
        "registrationStartDate": "2019-07-18T06:15:41.672Z",
        "registrationEndDate": "2019-08-08T07:04:21.242Z",
        "submissionEndDate": "2019-08-18T06:17:09.622Z",
        "totalPrize": 3000,
        "isPrivate": false,
        "projectId": 7377,
        "currentPhases": [
          {
            "id": 768287,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-08-18T06:17:31.853Z",
            "scheduledEndTime": "2019-08-20T06:17:00.000Z",
            "actualStartTime": "2019-08-18T06:17:31.853Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 768285,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-18T06:15:41.672Z",
            "scheduledEndTime": "2019-08-08T07:04:21.242Z",
            "actualStartTime": "2019-07-18T06:15:41.672Z",
            "actualEndTime": "2019-08-08T07:04:21.242Z",
            "fixedStartTime": "2019-07-18T05:45:00.000Z",
            "duration": 1781958328
          },
          {
            "id": 768286,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-18T06:20:19.259Z",
            "scheduledEndTime": "2019-08-18T06:17:09.622Z",
            "actualStartTime": "2019-07-18T06:20:19.259Z",
            "actualEndTime": "2019-08-18T06:17:09.622Z",
            "duration": 2678100000
          },
          {
            "id": 768287,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-08-18T06:17:31.853Z",
            "scheduledEndTime": "2019-08-20T06:17:00.000Z",
            "actualStartTime": "2019-08-18T06:17:31.853Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          2000,
          1000
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-08-05T09:07Z",
        "createdAt": "2019-07-23T14:45Z",
        "createdBy": "151743",
        "updatedBy": "22841596",
        "technologies": [
          ".NET System.Addins"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "Test Without NDA",
        "reviewType": "INTERNAL",
        "id": 30055275,
        "forumId": 30008,
        "numSubmissions": 0,
        "numRegistrants": 3,
        "numSubmitters": 0,
        "registrationStartDate": "2019-07-23T17:35:23.611Z",
        "registrationEndDate": "2019-08-02T17:36:08.883Z",
        "submissionEndDate": "2019-08-05T09:07:33.239Z",
        "platforms": [
          "Android"
        ],
        "totalPrize": 800,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 768506,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-07-26T09:12:12.543Z",
          "scheduledEndTime": "2019-07-27T09:12:00.000Z",
          "duration": 86400000
        },
        "projectId": 10833,
        "currentPhases": [

        ],
        "allPhases": [
          {
            "id": 768505,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-23T17:35:23.611Z",
            "scheduledEndTime": "2019-08-02T17:36:08.883Z",
            "actualStartTime": "2019-07-23T17:35:23.611Z",
            "actualEndTime": "2019-08-02T17:36:08.883Z",
            "fixedStartTime": "2019-07-23T13:00:00.000Z",
            "duration": 864000000
          },
          {
            "id": 768506,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-26T09:12:12.543Z",
            "scheduledEndTime": "2019-07-27T09:12:00.000Z",
            "duration": 86400000
          },
          {
            "id": 768507,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-26T09:12:12.543Z",
            "scheduledEndTime": "2019-08-05T09:07:33.239Z",
            "actualStartTime": "2019-07-26T09:12:12.543Z",
            "actualEndTime": "2019-08-05T09:07:33.239Z",
            "duration": 863700000
          }
        ],
        "prizes": [
          800
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Approver",
            "Submitter",
            "Iterative Reviewer",
            "Copilot"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-07-27T18:38Z",
        "createdAt": "2019-07-17T16:04Z",
        "createdBy": "23124329",
        "updatedBy": "22841596",
        "technologies": [
          "Other"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "F2F Contest to test Playoff",
        "reviewType": "INTERNAL",
        "id": 30055240,
        "numSubmissions": 1,
        "numRegistrants": 4,
        "numSubmitters": 1,
        "registrationStartDate": "2019-07-17T18:34:13.722Z",
        "registrationEndDate": "2019-07-27T18:35:15.980Z",
        "submissionEndDate": "2019-07-27T18:38:52.458Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 1,
        "isPrivate": false,
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 768256,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-19T18:09:23.093Z",
            "scheduledEndTime": "2019-07-20T18:09:00.000Z",
            "actualStartTime": "2019-07-19T18:09:23.093Z",
            "duration": 86400000
          }
        ],
        "allPhases": [
          {
            "id": 768255,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-17T18:34:13.722Z",
            "scheduledEndTime": "2019-07-27T18:35:15.980Z",
            "actualStartTime": "2019-07-17T18:34:13.722Z",
            "actualEndTime": "2019-07-27T18:35:15.980Z",
            "fixedStartTime": "2019-07-17T16:00:00.000Z",
            "duration": 864000000
          },
          {
            "id": 768256,
            "phaseType": "Iterative Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-19T18:09:23.093Z",
            "scheduledEndTime": "2019-07-20T18:09:00.000Z",
            "actualStartTime": "2019-07-19T18:09:23.093Z",
            "duration": 86400000
          },
          {
            "id": 768257,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-17T18:42:35.976Z",
            "scheduledEndTime": "2019-07-27T18:38:52.458Z",
            "actualStartTime": "2019-07-17T18:42:35.976Z",
            "actualEndTime": "2019-07-27T18:38:52.458Z",
            "duration": 863700000
          }
        ],
        "prizes": [
          1
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-07-25T13:01Z",
        "createdAt": "2019-07-19T04:33Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "technologies": [
          "Apache Derby"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Test challenge",
        "reviewType": "COMMUNITY",
        "id": 30055247,
        "numSubmissions": 1,
        "numRegistrants": 1,
        "numSubmitters": 1,
        "registrationStartDate": "2019-07-20T13:01:36.397Z",
        "registrationEndDate": "2019-07-22T13:01:15.523Z",
        "submissionEndDate": "2019-07-25T13:01:14.555Z",
        "platforms": [
          "Beanstalk"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 768302,
          "phaseType": "Appeals",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-07-27T13:01:00.000Z",
          "scheduledEndTime": "2019-07-28T13:01:00.000Z",
          "duration": 86400000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 768301,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-25T13:01:21.686Z",
            "scheduledEndTime": "2019-07-27T13:01:00.000Z",
            "actualStartTime": "2019-07-25T13:01:21.686Z",
            "duration": 172800000
          }
        ],
        "allPhases": [
          {
            "id": 768299,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-20T13:01:36.397Z",
            "scheduledEndTime": "2019-07-22T13:01:15.523Z",
            "actualStartTime": "2019-07-20T13:01:36.397Z",
            "actualEndTime": "2019-07-22T13:01:15.523Z",
            "fixedStartTime": "2019-07-20T13:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 768300,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-20T13:06:25.058Z",
            "scheduledEndTime": "2019-07-25T13:01:14.555Z",
            "actualStartTime": "2019-07-20T13:06:25.058Z",
            "actualEndTime": "2019-07-25T13:01:14.555Z",
            "duration": 431700000
          },
          {
            "id": 768301,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-25T13:01:21.686Z",
            "scheduledEndTime": "2019-07-27T13:01:00.000Z",
            "actualStartTime": "2019-07-25T13:01:21.686Z",
            "duration": 172800000
          },
          {
            "id": 768302,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-27T13:01:00.000Z",
            "scheduledEndTime": "2019-07-28T13:01:00.000Z",
            "duration": 86400000
          },
          {
            "id": 768303,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-28T13:01:00.000Z",
            "scheduledEndTime": "2019-07-29T01:01:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Approver",
            "Reviewer",
            "Copilot",
            "Submitter"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-07-01T02:46Z",
        "createdAt": "2019-07-01T01:58Z",
        "createdBy": "23124329",
        "updatedBy": "23124329",
        "technologies": [
          "ActionScript"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "VSCode Extension Automation 2",
        "reviewType": "INTERNAL",
        "id": 30055164,
        "forumId": 11111,
        "numSubmissions": 3,
        "numRegistrants": 5,
        "numSubmitters": 3,
        "registrationStartDate": "2019-07-01T04:03:40.959Z",
        "registrationEndDate": "2019-07-07T10:03:00.000Z",
        "submissionEndDate": "2019-07-09T14:12:00.000Z",
        "platforms": [
          "AWS"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 767827,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-07-09T14:12:00.000Z",
          "scheduledEndTime": "2019-07-11T14:12:00.000Z",
          "duration": 172800000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 767825,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-01T04:03:40.959Z",
            "scheduledEndTime": "2019-07-07T10:03:00.000Z",
            "actualStartTime": "2019-07-01T04:03:40.959Z",
            "fixedStartTime": "2019-07-01T02:25:00.000Z",
            "duration": 540000000
          },
          {
            "id": 767826,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-01T04:17:19.700Z",
            "scheduledEndTime": "2019-07-09T14:12:00.000Z",
            "actualStartTime": "2019-07-01T04:17:19.700Z",
            "duration": 726900000
          }
        ],
        "allPhases": [
          {
            "id": 767825,
            "phaseType": "Registration",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-01T04:03:40.959Z",
            "scheduledEndTime": "2019-07-07T10:03:00.000Z",
            "actualStartTime": "2019-07-01T04:03:40.959Z",
            "fixedStartTime": "2019-07-01T02:25:00.000Z",
            "duration": 540000000
          },
          {
            "id": 767826,
            "phaseType": "Submission",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-01T04:17:19.700Z",
            "scheduledEndTime": "2019-07-09T14:12:00.000Z",
            "actualStartTime": "2019-07-01T04:17:19.700Z",
            "duration": 726900000
          },
          {
            "id": 767827,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-09T14:12:00.000Z",
            "scheduledEndTime": "2019-07-11T14:12:00.000Z",
            "duration": 172800000
          },
          {
            "id": 767828,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-11T14:12:00.000Z",
            "scheduledEndTime": "2019-07-12T14:12:00.000Z",
            "duration": 86400000
          },
          {
            "id": 767829,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-12T14:12:00.000Z",
            "scheduledEndTime": "2019-07-13T02:12:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "environment": "ab",
        "codeRepo": "ab",
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Copilot",
            "Approver",
            "Reviewer",
            "Post-Mortem Reviewer",
            "Submitter",
            "Post-Mortem Reviewer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-07-06T05:15Z",
        "createdAt": "2019-07-01T02:56Z",
        "createdBy": "23124329",
        "updatedBy": "22841596",
        "technologies": [
          "Other"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "VSCode Extension Dummy Contest 2",
        "reviewType": "INTERNAL",
        "id": 30055165,
        "forumId": 70826,
        "numSubmissions": 0,
        "numRegistrants": 1,
        "numSubmitters": 0,
        "registrationStartDate": "2019-07-01T05:12:54.237Z",
        "registrationEndDate": "2019-07-06T05:15:43.575Z",
        "submissionEndDate": "2019-07-06T05:15:55.347Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 2,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 767837,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-07-06T05:15:55.347Z",
          "scheduledEndTime": "2019-07-08T05:15:00.000Z",
          "duration": 172800000
        },
        "projectId": 7884,
        "currentPhases": [

        ],
        "allPhases": [
          {
            "id": 767835,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-01T05:12:54.237Z",
            "scheduledEndTime": "2019-07-06T05:15:43.575Z",
            "actualStartTime": "2019-07-01T05:12:54.237Z",
            "actualEndTime": "2019-07-06T05:15:43.575Z",
            "fixedStartTime": "2019-07-01T03:01:00.000Z",
            "duration": 432000000
          },
          {
            "id": 767836,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-01T05:17:15.536Z",
            "scheduledEndTime": "2019-07-06T05:15:55.347Z",
            "actualStartTime": "2019-07-01T05:17:15.536Z",
            "actualEndTime": "2019-07-06T05:15:55.347Z",
            "duration": 431700000
          },
          {
            "id": 767837,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-06T05:15:55.347Z",
            "scheduledEndTime": "2019-07-08T05:15:00.000Z",
            "duration": 172800000
          },
          {
            "id": 767838,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-08T05:15:00.000Z",
            "scheduledEndTime": "2019-07-09T05:15:00.000Z",
            "duration": 86400000
          },
          {
            "id": 767839,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-07-09T05:15:00.000Z",
            "scheduledEndTime": "2019-07-09T17:15:00.000Z",
            "duration": 43200000
          },
          {
            "id": 767787,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-06T05:16:00.448Z",
            "scheduledEndTime": "2019-07-10T14:20:25.451Z",
            "actualStartTime": "2019-07-06T05:16:00.448Z",
            "actualEndTime": "2019-07-10T14:20:25.451Z",
            "duration": 86400000
          }
        ],
        "prizes": [
          1,
          1
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Reviewer",
            "Copilot",
            "Post-Mortem Reviewer",
            "Post-Mortem Reviewer",
            "Submitter",
            "Approver"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2019-06-30T15:59Z",
        "createdAt": "2019-06-25T13:51Z",
        "createdBy": "23124329",
        "updatedBy": "22841596",
        "technologies": [
          "Other"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "VSCode Extension Dummy Contest",
        "reviewType": "INTERNAL",
        "id": 30055150,
        "numSubmissions": 2,
        "numRegistrants": 3,
        "numSubmitters": 2,
        "registrationStartDate": "2019-06-25T15:58:31.916Z",
        "registrationEndDate": "2019-06-30T15:59:29.204Z",
        "submissionEndDate": "2019-06-30T15:59:35.700Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 2,
        "isPrivate": false,
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 768101,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-11T14:30:07.756Z",
            "scheduledEndTime": "2019-07-12T14:30:00.000Z",
            "actualStartTime": "2019-07-11T14:30:07.756Z",
            "duration": 86400000
          }
        ],
        "allPhases": [
          {
            "id": 767715,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-06-25T15:58:31.916Z",
            "scheduledEndTime": "2019-06-30T15:59:29.204Z",
            "actualStartTime": "2019-06-25T15:58:31.916Z",
            "actualEndTime": "2019-06-30T15:59:29.204Z",
            "fixedStartTime": "2019-06-25T13:00:00.000Z",
            "duration": 432000000
          },
          {
            "id": 767716,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-06-25T16:04:53.394Z",
            "scheduledEndTime": "2019-06-30T15:59:35.700Z",
            "actualStartTime": "2019-06-25T16:04:53.394Z",
            "actualEndTime": "2019-06-30T15:59:35.700Z",
            "duration": 431700000
          },
          {
            "id": 767717,
            "phaseType": "Review",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-06-30T15:59:38.824Z",
            "scheduledEndTime": "2019-07-10T14:24:27.347Z",
            "actualStartTime": "2019-06-30T15:59:38.824Z",
            "actualEndTime": "2019-07-10T14:24:27.347Z",
            "duration": 172800000
          },
          {
            "id": 767718,
            "phaseType": "Appeals",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-10T14:24:31.022Z",
            "scheduledEndTime": "2019-07-11T14:28:33.521Z",
            "actualStartTime": "2019-07-10T14:24:31.022Z",
            "actualEndTime": "2019-07-11T14:28:33.521Z",
            "duration": 86400000
          },
          {
            "id": 767719,
            "phaseType": "Appeals Response",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-07-11T14:28:36.506Z",
            "scheduledEndTime": "2019-07-11T14:29:28.197Z",
            "actualStartTime": "2019-07-11T14:28:36.506Z",
            "actualEndTime": "2019-07-11T14:29:28.197Z",
            "duration": 43200000
          },
          {
            "id": 768101,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-07-11T14:30:07.756Z",
            "scheduledEndTime": "2019-07-12T14:30:00.000Z",
            "actualStartTime": "2019-07-11T14:30:07.756Z",
            "duration": 86400000
          }
        ],
        "prizes": [
          1,
          1
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter"
          ],
          "hasUserSubmittedForReview": true,
          "submissions": [
            {
              "id": 207520,
              "submittedAt": "2019-06-11T07:08:18.000Z",
              "status": "Active",
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207531,
              "submittedAt": "2019-06-11T07:44:28.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207550,
              "submittedAt": "2019-06-12T03:21:00.000Z",
              "status": "Active",
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207655,
              "submittedAt": "2019-06-12T09:27:19.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207656,
              "submittedAt": "2019-06-12T09:27:32.000Z",
              "status": "Active",
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207657,
              "submittedAt": "2019-06-12T09:28:00.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207684,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207685,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207686,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207690,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207691,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207692,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207693,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207694,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207695,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207697,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            },
            {
              "id": 207700,
              "submittedAt": "2019-06-11T10:15:08.000Z",
              "status": "Active",
              "score": 100,
              "challengeId": 30055071,
              "type": "Contest Submission"
            }
          ]
        },
        "updatedAt": "2019-06-22T09:32Z",
        "createdAt": "2019-05-21T14:42Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "DEVELOP_MARATHON_MATCH",
        "name": "Test-MM-For-Rated-Match",
        "reviewType": "COMMUNITY",
        "id": 30055071,
        "forumId": 33075,
        "numSubmissions": 53,
        "numRegistrants": 8,
        "numSubmitters": 7,
        "registrationStartDate": "2019-05-23T09:31:37.763Z",
        "registrationEndDate": "2019-06-22T00:31:35.923Z",
        "submissionEndDate": "2019-06-22T09:32:58.028Z",
        "totalPrize": 3000,
        "isPrivate": false,
        "projectId": 6900,
        "currentPhases": [
          {
            "id": 767281,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-06-22T09:33:20.137Z",
            "scheduledEndTime": "2019-06-24T09:33:00.000Z",
            "actualStartTime": "2019-06-22T09:33:20.137Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 767279,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-23T09:31:37.763Z",
            "scheduledEndTime": "2019-06-22T00:31:35.923Z",
            "actualStartTime": "2019-05-23T09:31:37.763Z",
            "actualEndTime": "2019-06-22T00:31:35.923Z",
            "fixedStartTime": "2019-05-22T13:00:00.000Z",
            "duration": 2559600000
          },
          {
            "id": 767280,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-05-23T09:37:12.226Z",
            "scheduledEndTime": "2019-06-22T09:32:58.028Z",
            "actualStartTime": "2019-05-23T09:37:12.226Z",
            "actualEndTime": "2019-06-22T09:32:58.028Z",
            "duration": 2591700000
          },
          {
            "id": 767281,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-06-22T09:33:20.137Z",
            "scheduledEndTime": "2019-06-24T09:33:00.000Z",
            "actualStartTime": "2019-06-22T09:33:20.137Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          2000,
          1000
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter"
          ],
          "hasUserSubmittedForReview": true,
          "submissions": [
            {
              "id": 207087,
              "submittedAt": "2019-03-06T11:07:01.000Z",
              "status": "Active",
              "challengeId": 30054675,
              "type": "Contest Submission"
            }
          ]
        },
        "updatedAt": "2019-06-05T09:29Z",
        "createdAt": "2019-02-12T11:29Z",
        "createdBy": "22748790",
        "updatedBy": "22841596",
        "technologies": [
          "Python",
          "Data Science"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "TC3 Code02 - test tutorial #2",
        "reviewType": "INTERNAL",
        "id": 30054675,
        "forumId": 32819,
        "numSubmissions": 5,
        "numRegistrants": 7,
        "numSubmitters": 5,
        "registrationStartDate": "2019-02-12T14:01:03.973Z",
        "registrationEndDate": "2019-03-29T13:01:29.063Z",
        "submissionEndDate": "2019-03-29T13:04:38.849Z",
        "platforms": [
          "Other"
        ],
        "totalPrize": 160,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 764436,
          "phaseType": "Appeals",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2019-03-31T13:04:00.000Z",
          "scheduledEndTime": "2019-04-01T13:04:00.000Z",
          "duration": 86400000
        },
        "projectId": 17898,
        "currentPhases": [
          {
            "id": 764435,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-29T13:04:46.507Z",
            "scheduledEndTime": "2019-03-31T13:04:00.000Z",
            "actualStartTime": "2019-03-29T13:04:46.507Z",
            "duration": 172800000
          }
        ],
        "allPhases": [
          {
            "id": 764433,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-02-12T14:01:03.973Z",
            "scheduledEndTime": "2019-03-29T13:01:29.063Z",
            "actualStartTime": "2019-02-12T14:01:03.973Z",
            "actualEndTime": "2019-03-29T13:01:29.063Z",
            "fixedStartTime": "2019-02-12T14:00:00.000Z",
            "duration": 3884400000
          },
          {
            "id": 764434,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2019-02-12T14:09:25.247Z",
            "scheduledEndTime": "2019-03-29T13:04:38.849Z",
            "actualStartTime": "2019-02-12T14:09:25.247Z",
            "actualEndTime": "2019-03-29T13:04:38.849Z",
            "duration": 3884100000
          },
          {
            "id": 764435,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2019-03-29T13:04:46.507Z",
            "scheduledEndTime": "2019-03-31T13:04:00.000Z",
            "actualStartTime": "2019-03-29T13:04:46.507Z",
            "duration": 172800000
          },
          {
            "id": 764436,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-03-31T13:04:00.000Z",
            "scheduledEndTime": "2019-04-01T13:04:00.000Z",
            "duration": 86400000
          },
          {
            "id": 764437,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2019-04-01T13:04:00.000Z",
            "scheduledEndTime": "2019-04-02T01:04:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          50,
          50,
          50,
          5,
          5
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Copilot",
            "Approver"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-10-14T21:28Z",
        "createdAt": "2018-10-04T20:46Z",
        "createdBy": "305384",
        "updatedBy": "22841596",
        "technologies": [
          "Node.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "test",
        "reviewType": "INTERNAL",
        "id": 30053193,
        "forumId": 31394,
        "numSubmissions": 0,
        "numRegistrants": 0,
        "numSubmitters": 0,
        "registrationStartDate": "2018-10-04T20:45:50.375Z",
        "registrationEndDate": "2018-10-14T20:49:00.000Z",
        "submissionEndDate": "2018-10-14T21:28:48.586Z",
        "totalPrize": 50,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 755490,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-10-04T21:28:38.747Z",
          "scheduledEndTime": "2018-10-05T21:28:00.000Z",
          "duration": 86400000
        },
        "projectId": 10833,
        "currentPhases": [

        ],
        "allPhases": [
          {
            "id": 755489,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-10-04T20:45:50.375Z",
            "scheduledEndTime": "2018-10-14T20:49:00.000Z",
            "fixedStartTime": "2018-10-04T20:45:50.375Z",
            "duration": 864249625
          },
          {
            "id": 755490,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-10-04T21:28:38.747Z",
            "scheduledEndTime": "2018-10-05T21:28:00.000Z",
            "duration": 86400000
          },
          {
            "id": 755491,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-10-04T21:28:38.747Z",
            "scheduledEndTime": "2018-10-14T21:28:48.586Z",
            "actualStartTime": "2018-10-04T21:28:38.747Z",
            "actualEndTime": "2018-10-14T21:28:48.586Z",
            "duration": 864000000
          }
        ],
        "prizes": [
          50
        ],
        "isTask": true,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Approver",
            "Copilot"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-10-14T21:22Z",
        "createdAt": "2018-10-04T20:42Z",
        "createdBy": "305384",
        "updatedBy": "22841596",
        "technologies": [
          "Node.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "test",
        "reviewType": "INTERNAL",
        "id": 30053192,
        "forumId": 31393,
        "numSubmissions": 0,
        "numRegistrants": 0,
        "numSubmitters": 0,
        "registrationStartDate": "2018-10-04T20:41:50.491Z",
        "registrationEndDate": "2018-10-14T20:45:00.000Z",
        "submissionEndDate": "2018-10-14T21:22:47.283Z",
        "totalPrize": 50,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 755484,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-10-04T21:20:31.568Z",
          "scheduledEndTime": "2018-10-05T21:20:00.000Z",
          "duration": 86400000
        },
        "projectId": 10833,
        "currentPhases": [

        ],
        "allPhases": [
          {
            "id": 755483,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-10-04T20:41:50.491Z",
            "scheduledEndTime": "2018-10-14T20:45:00.000Z",
            "fixedStartTime": "2018-10-04T20:41:50.491Z",
            "duration": 864249509
          },
          {
            "id": 755484,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-10-04T21:20:31.568Z",
            "scheduledEndTime": "2018-10-05T21:20:00.000Z",
            "duration": 86400000
          },
          {
            "id": 755485,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-10-04T21:20:31.568Z",
            "scheduledEndTime": "2018-10-14T21:22:47.283Z",
            "actualStartTime": "2018-10-04T21:20:31.568Z",
            "actualEndTime": "2018-10-14T21:22:47.283Z",
            "duration": 864000000
          }
        ],
        "prizes": [
          50
        ],
        "isTask": true,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Approver",
            "Copilot"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-10-14T21:22Z",
        "createdAt": "2018-10-04T20:40Z",
        "createdBy": "305384",
        "updatedBy": "22841596",
        "technologies": [
          "Node.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "FIRST_2_FINISH",
        "name": "test",
        "reviewType": "INTERNAL",
        "id": 30053191,
        "forumId": 31392,
        "numSubmissions": 0,
        "numRegistrants": 0,
        "numSubmitters": 0,
        "registrationStartDate": "2018-10-04T20:40:34.865Z",
        "registrationEndDate": "2018-10-14T20:44:00.000Z",
        "submissionEndDate": "2018-10-14T21:22:43.361Z",
        "totalPrize": 50,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 755478,
          "phaseType": "Iterative Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-10-04T21:20:18.132Z",
          "scheduledEndTime": "2018-10-05T21:20:00.000Z",
          "duration": 86400000
        },
        "projectId": 10833,
        "currentPhases": [

        ],
        "allPhases": [
          {
            "id": 755477,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-10-04T20:40:34.865Z",
            "scheduledEndTime": "2018-10-14T20:44:00.000Z",
            "fixedStartTime": "2018-10-04T20:40:34.865Z",
            "duration": 864265135
          },
          {
            "id": 755478,
            "phaseType": "Iterative Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-10-04T21:20:18.132Z",
            "scheduledEndTime": "2018-10-05T21:20:00.000Z",
            "duration": 86400000
          },
          {
            "id": 755479,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-10-04T21:20:18.132Z",
            "scheduledEndTime": "2018-10-14T21:22:43.361Z",
            "actualStartTime": "2018-10-04T21:20:18.132Z",
            "actualEndTime": "2018-10-14T21:22:43.361Z",
            "duration": 864000000
          }
        ],
        "prizes": [
          50
        ],
        "isTask": true,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-09-30T14:47Z",
        "createdAt": "2018-07-05T14:32Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "technologies": [
          "Node.js"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "MM-Integration-July5th-bySushil-code",
        "reviewType": "COMMUNITY",
        "id": 30052115,
        "forumId": 30416,
        "numSubmissions": 3,
        "numRegistrants": 3,
        "numSubmitters": 3,
        "registrationStartDate": "2018-07-05T14:46:23.263Z",
        "registrationEndDate": "2018-08-31T14:47:09.488Z",
        "submissionEndDate": "2018-09-30T14:47:17.981Z",
        "platforms": [
          "NodeJS"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 749068,
          "phaseType": "Appeals",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-10-02T14:47:00.000Z",
          "scheduledEndTime": "2018-10-03T14:47:00.000Z",
          "duration": 86400000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 749067,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-09-30T14:47:26.194Z",
            "scheduledEndTime": "2018-10-02T14:47:00.000Z",
            "actualStartTime": "2018-09-30T14:47:26.194Z",
            "duration": 172800000
          }
        ],
        "allPhases": [
          {
            "id": 749065,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-07-05T14:46:23.263Z",
            "scheduledEndTime": "2018-08-31T14:47:09.488Z",
            "actualStartTime": "2018-07-05T14:46:23.263Z",
            "actualEndTime": "2018-08-31T14:47:09.488Z",
            "fixedStartTime": "2018-07-05T13:00:00.000Z",
            "duration": 4924800000
          },
          {
            "id": 749066,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-07-05T14:52:07.399Z",
            "scheduledEndTime": "2018-09-30T14:47:17.981Z",
            "actualStartTime": "2018-07-05T14:52:07.399Z",
            "actualEndTime": "2018-09-30T14:47:17.981Z",
            "duration": 7516500000
          },
          {
            "id": 749067,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-09-30T14:47:26.194Z",
            "scheduledEndTime": "2018-10-02T14:47:00.000Z",
            "actualStartTime": "2018-09-30T14:47:26.194Z",
            "duration": 172800000
          },
          {
            "id": 749068,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-10-02T14:47:00.000Z",
            "scheduledEndTime": "2018-10-03T14:47:00.000Z",
            "duration": 86400000
          },
          {
            "id": 749069,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-10-03T14:47:00.000Z",
            "scheduledEndTime": "2018-10-04T02:47:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-09-16T13:01Z",
        "createdAt": "2018-09-11T01:37Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "technologies": [
          "Android"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Test",
        "reviewType": "COMMUNITY",
        "id": 30053002,
        "forumId": 31205,
        "numSubmissions": 1,
        "numRegistrants": 2,
        "numSubmitters": 1,
        "registrationStartDate": "2018-09-11T13:00:29.580Z",
        "registrationEndDate": "2018-09-13T13:01:48.913Z",
        "submissionEndDate": "2018-09-16T13:01:15.688Z",
        "platforms": [
          "Cloud Foundry"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 754304,
          "phaseType": "Appeals",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-09-18T13:01:00.000Z",
          "scheduledEndTime": "2018-09-19T13:01:00.000Z",
          "duration": 86400000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 754303,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-09-16T13:01:34.610Z",
            "scheduledEndTime": "2018-09-18T13:01:00.000Z",
            "actualStartTime": "2018-09-16T13:01:34.610Z",
            "duration": 172800000
          }
        ],
        "allPhases": [
          {
            "id": 754301,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-09-11T13:00:29.580Z",
            "scheduledEndTime": "2018-09-13T13:01:48.913Z",
            "actualStartTime": "2018-09-11T13:00:29.580Z",
            "actualEndTime": "2018-09-13T13:01:48.913Z",
            "fixedStartTime": "2018-09-11T13:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 754302,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-09-11T13:05:23.727Z",
            "scheduledEndTime": "2018-09-16T13:01:15.688Z",
            "actualStartTime": "2018-09-11T13:05:23.727Z",
            "actualEndTime": "2018-09-16T13:01:15.688Z",
            "duration": 431700000
          },
          {
            "id": 754303,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-09-16T13:01:34.610Z",
            "scheduledEndTime": "2018-09-18T13:01:00.000Z",
            "actualStartTime": "2018-09-16T13:01:34.610Z",
            "duration": 172800000
          },
          {
            "id": 754304,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-09-18T13:01:00.000Z",
            "scheduledEndTime": "2018-09-19T13:01:00.000Z",
            "duration": 86400000
          },
          {
            "id": 754305,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-09-19T13:01:00.000Z",
            "scheduledEndTime": "2018-09-20T01:01:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-08-26T12:04Z",
        "createdAt": "2018-05-14T07:43Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "DEVELOP_MARATHON_MATCH",
        "name": "DIRECTMM-TEST14May-Sushil",
        "reviewType": "COMMUNITY",
        "id": 30051904,
        "forumId": 30309,
        "numSubmissions": 2,
        "numRegistrants": 2,
        "numSubmitters": 2,
        "registrationStartDate": "2018-05-14T08:03:50.183Z",
        "registrationEndDate": "2018-05-21T07:04:29.826Z",
        "submissionEndDate": "2018-08-26T12:04:41.839Z",
        "totalPrize": 3000,
        "isPrivate": false,
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 748027,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-08-26T12:04:46.001Z",
            "scheduledEndTime": "2018-08-28T12:04:00.000Z",
            "actualStartTime": "2018-08-26T12:04:46.001Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 748025,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-14T08:03:50.183Z",
            "scheduledEndTime": "2018-05-21T07:04:29.826Z",
            "actualStartTime": "2018-05-14T08:03:50.183Z",
            "actualEndTime": "2018-05-21T07:04:29.826Z",
            "fixedStartTime": "2018-05-14T08:03:50.183Z",
            "duration": 601200000
          },
          {
            "id": 748026,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-14T08:10:26.217Z",
            "scheduledEndTime": "2018-08-26T12:04:41.839Z",
            "actualStartTime": "2018-05-14T08:10:26.217Z",
            "actualEndTime": "2018-08-26T12:04:41.839Z",
            "duration": 8999673783
          },
          {
            "id": 748027,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-08-26T12:04:46.001Z",
            "scheduledEndTime": "2018-08-28T12:04:00.000Z",
            "actualStartTime": "2018-08-26T12:04:46.001Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          2000,
          1000
        ],
        "isTask": false,
        "environment": "",
        "codeRepo": "",
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-08-04T14:44Z",
        "createdAt": "2018-07-05T14:27Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "DEVELOP_MARATHON_MATCH",
        "name": "MM-Integration-July5th-bySushil",
        "reviewType": "COMMUNITY",
        "id": 30052113,
        "forumId": 30415,
        "numSubmissions": 2,
        "numRegistrants": 3,
        "numSubmitters": 2,
        "registrationStartDate": "2018-07-05T14:43:48.091Z",
        "registrationEndDate": "2018-08-04T05:43:25.353Z",
        "submissionEndDate": "2018-08-04T14:44:06.510Z",
        "totalPrize": 3000,
        "isPrivate": false,
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 749045,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-08-04T14:44:13.219Z",
            "scheduledEndTime": "2018-08-06T14:44:00.000Z",
            "actualStartTime": "2018-08-04T14:44:13.219Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 749043,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-07-05T14:43:48.091Z",
            "scheduledEndTime": "2018-08-04T05:43:25.353Z",
            "actualStartTime": "2018-07-05T14:43:48.091Z",
            "actualEndTime": "2018-08-04T05:43:25.353Z",
            "fixedStartTime": "2018-07-05T13:00:00.000Z",
            "duration": 2559600000
          },
          {
            "id": 749044,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-07-05T14:49:01.804Z",
            "scheduledEndTime": "2018-08-04T14:44:06.510Z",
            "actualStartTime": "2018-07-05T14:49:01.804Z",
            "actualEndTime": "2018-08-04T14:44:06.510Z",
            "duration": 2591700000
          },
          {
            "id": 749045,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-08-04T14:44:13.219Z",
            "scheduledEndTime": "2018-08-06T14:44:00.000Z",
            "actualStartTime": "2018-08-04T14:44:13.219Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          2000,
          1000
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-07-05T14:30Z",
        "createdAt": "2018-07-05T14:30Z",
        "createdBy": "8547899",
        "updatedBy": "8547899",
        "status": "ACTIVE",
        "track": "DESIGN",
        "subTrack": "WEB_DESIGNS",
        "name": "MM-Integration-July5th-bySushil-Design",
        "reviewType": "INTERNAL",
        "id": 30052114,
        "forumId": 597685,
        "numSubmissions": 1,
        "numRegistrants": 0,
        "numSubmitters": 1,
        "registrationStartDate": "2018-07-05T20:49:00.000Z",
        "registrationEndDate": "2018-07-08T20:49:00.000Z",
        "submissionEndDate": "2018-07-08T20:49:00.000Z",
        "totalPrize": 1500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 749055,
          "phaseType": "Registration",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-07-05T20:49:00.000Z",
          "scheduledEndTime": "2018-07-08T20:49:00.000Z",
          "fixedStartTime": "2018-07-05T20:00:00.000Z",
          "duration": 259200000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 749054,
            "phaseType": "Specification Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-07-05T14:49:18.195Z",
            "scheduledEndTime": "2018-07-05T20:49:00.000Z",
            "actualStartTime": "2018-07-05T14:49:18.195Z",
            "duration": 21600000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 749053,
            "phaseType": "Specification Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-07-05T14:46:14.838Z",
            "scheduledEndTime": "2018-07-05T14:49:11.033Z",
            "actualStartTime": "2018-07-05T14:46:14.838Z",
            "actualEndTime": "2018-07-05T14:49:11.033Z",
            "fixedStartTime": "2018-07-03T14:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 749054,
            "phaseType": "Specification Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-07-05T14:49:18.195Z",
            "scheduledEndTime": "2018-07-05T20:49:00.000Z",
            "actualStartTime": "2018-07-05T14:49:18.195Z",
            "duration": 21600000
          },
          {
            "id": 749055,
            "phaseType": "Registration",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-07-05T20:49:00.000Z",
            "scheduledEndTime": "2018-07-08T20:49:00.000Z",
            "fixedStartTime": "2018-07-05T20:00:00.000Z",
            "duration": 259200000
          },
          {
            "id": 749056,
            "phaseType": "Submission",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-07-05T20:54:00.000Z",
            "scheduledEndTime": "2018-07-08T20:49:00.000Z",
            "duration": 258900000
          },
          {
            "id": 749057,
            "phaseType": "Screening",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-07-08T20:49:00.000Z",
            "scheduledEndTime": "2018-07-09T00:49:00.000Z",
            "duration": 14400000
          },
          {
            "id": 749058,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-07-09T00:49:00.000Z",
            "scheduledEndTime": "2018-07-15T00:49:00.000Z",
            "duration": 518400000
          },
          {
            "id": 749059,
            "phaseType": "Approval",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-07-15T00:49:00.000Z",
            "scheduledEndTime": "2018-07-20T00:49:00.000Z",
            "duration": 432000000
          }
        ],
        "prizes": [
          1250,
          250
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-05-04T14:30Z",
        "createdAt": "2018-05-03T14:12Z",
        "createdBy": "305384",
        "updatedBy": "22841596",
        "technologies": [
          "API"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "AP Test 05",
        "reviewType": "COMMUNITY",
        "id": 30051812,
        "forumId": 30233,
        "numSubmissions": 0,
        "numRegistrants": 1,
        "numSubmitters": 0,
        "registrationStartDate": "2018-05-03T14:29:32.983Z",
        "registrationEndDate": "2018-05-04T14:30:45.496Z",
        "submissionEndDate": "2018-05-04T14:30:50.936Z",
        "platforms": [
          "AWS"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 747501,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-05-04T14:30:50.936Z",
          "scheduledEndTime": "2018-05-06T14:30:00.000Z",
          "duration": 172800000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 747705,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-05-04T14:31:08.766Z",
            "scheduledEndTime": "2018-05-05T14:31:00.000Z",
            "actualStartTime": "2018-05-04T14:31:08.766Z",
            "duration": 86400000
          }
        ],
        "allPhases": [
          {
            "id": 747499,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-03T14:29:32.983Z",
            "scheduledEndTime": "2018-05-04T14:30:45.496Z",
            "actualStartTime": "2018-05-03T14:29:32.983Z",
            "actualEndTime": "2018-05-04T14:30:45.496Z",
            "fixedStartTime": "2018-05-03T13:00:00.000Z",
            "duration": 86400000
          },
          {
            "id": 747500,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-03T14:34:33.488Z",
            "scheduledEndTime": "2018-05-04T14:30:50.936Z",
            "actualStartTime": "2018-05-03T14:34:33.488Z",
            "actualEndTime": "2018-05-04T14:30:50.936Z",
            "duration": 86100000
          },
          {
            "id": 747501,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-04T14:30:50.936Z",
            "scheduledEndTime": "2018-05-06T14:30:00.000Z",
            "duration": 172800000
          },
          {
            "id": 747502,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-06T14:30:00.000Z",
            "scheduledEndTime": "2018-05-07T14:30:00.000Z",
            "duration": 86400000
          },
          {
            "id": 747503,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-07T14:30:00.000Z",
            "scheduledEndTime": "2018-05-08T02:30:00.000Z",
            "duration": 43200000
          },
          {
            "id": 747705,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-05-04T14:31:08.766Z",
            "scheduledEndTime": "2018-05-05T14:31:00.000Z",
            "actualStartTime": "2018-05-04T14:31:08.766Z",
            "duration": 86400000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "environment": "",
        "codeRepo": "",
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-05-04T13:33Z",
        "createdAt": "2018-05-03T13:16Z",
        "createdBy": "305384",
        "updatedBy": "22841596",
        "technologies": [
          "API"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "AP Test 04",
        "reviewType": "COMMUNITY",
        "id": 30051811,
        "forumId": 30232,
        "numSubmissions": 0,
        "numRegistrants": 0,
        "numSubmitters": 0,
        "registrationStartDate": "2018-05-03T13:33:20.251Z",
        "registrationEndDate": "2018-05-04T13:33:17.458Z",
        "submissionEndDate": "2018-05-04T13:33:22.642Z",
        "platforms": [
          "AWS"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 747491,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-05-04T13:33:22.642Z",
          "scheduledEndTime": "2018-05-06T13:33:00.000Z",
          "duration": 172800000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 747583,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-05-04T13:34:34.334Z",
            "scheduledEndTime": "2018-05-05T13:34:00.000Z",
            "actualStartTime": "2018-05-04T13:34:34.334Z",
            "duration": 86400000
          }
        ],
        "allPhases": [
          {
            "id": 747489,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-03T13:33:20.251Z",
            "scheduledEndTime": "2018-05-04T13:33:17.458Z",
            "actualStartTime": "2018-05-03T13:33:20.251Z",
            "actualEndTime": "2018-05-04T13:33:17.458Z",
            "fixedStartTime": "2018-05-03T13:00:00.000Z",
            "duration": 86400000
          },
          {
            "id": 747490,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-03T13:38:14.354Z",
            "scheduledEndTime": "2018-05-04T13:33:22.642Z",
            "actualStartTime": "2018-05-03T13:38:14.354Z",
            "actualEndTime": "2018-05-04T13:33:22.642Z",
            "duration": 86100000
          },
          {
            "id": 747491,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-04T13:33:22.642Z",
            "scheduledEndTime": "2018-05-06T13:33:00.000Z",
            "duration": 172800000
          },
          {
            "id": 747492,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-06T13:33:00.000Z",
            "scheduledEndTime": "2018-05-07T13:33:00.000Z",
            "duration": 86400000
          },
          {
            "id": 747493,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-07T13:33:00.000Z",
            "scheduledEndTime": "2018-05-08T01:33:00.000Z",
            "duration": 43200000
          },
          {
            "id": 747583,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-05-04T13:34:34.334Z",
            "scheduledEndTime": "2018-05-05T13:34:00.000Z",
            "actualStartTime": "2018-05-04T13:34:34.334Z",
            "duration": 86400000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "environment": "",
        "codeRepo": "",
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-05-02T22:10Z",
        "createdAt": "2018-05-01T21:48Z",
        "createdBy": "305384",
        "updatedBy": "22841596",
        "technologies": [
          "API"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "AP Test 03",
        "reviewType": "COMMUNITY",
        "id": 30051790,
        "forumId": 30228,
        "numSubmissions": 0,
        "numRegistrants": 0,
        "numSubmitters": 0,
        "registrationStartDate": "2018-05-01T22:09:04.896Z",
        "registrationEndDate": "2018-05-02T22:09:22.900Z",
        "submissionEndDate": "2018-05-02T22:10:38.095Z",
        "platforms": [
          "AWS"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 747417,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-05-02T22:10:38.095Z",
          "scheduledEndTime": "2018-05-04T22:10:00.000Z",
          "duration": 172800000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 747461,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-05-02T22:11:24.150Z",
            "scheduledEndTime": "2018-05-03T22:11:00.000Z",
            "actualStartTime": "2018-05-02T22:11:24.150Z",
            "duration": 86400000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 747415,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-01T22:09:04.896Z",
            "scheduledEndTime": "2018-05-02T22:09:22.900Z",
            "actualStartTime": "2018-05-01T22:09:04.896Z",
            "actualEndTime": "2018-05-02T22:09:22.900Z",
            "fixedStartTime": "2018-05-01T21:00:00.000Z",
            "duration": 86400000
          },
          {
            "id": 747416,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-01T22:15:17.631Z",
            "scheduledEndTime": "2018-05-02T22:10:38.095Z",
            "actualStartTime": "2018-05-01T22:15:17.631Z",
            "actualEndTime": "2018-05-02T22:10:38.095Z",
            "duration": 86100000
          },
          {
            "id": 747417,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-02T22:10:38.095Z",
            "scheduledEndTime": "2018-05-04T22:10:00.000Z",
            "duration": 172800000
          },
          {
            "id": 747418,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-04T22:10:00.000Z",
            "scheduledEndTime": "2018-05-05T22:10:00.000Z",
            "duration": 86400000
          },
          {
            "id": 747419,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-05T22:10:00.000Z",
            "scheduledEndTime": "2018-05-06T10:10:00.000Z",
            "duration": 43200000
          },
          {
            "id": 747461,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-05-02T22:11:24.150Z",
            "scheduledEndTime": "2018-05-03T22:11:00.000Z",
            "actualStartTime": "2018-05-02T22:11:24.150Z",
            "duration": 86400000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "environment": "",
        "codeRepo": "",
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-05-02T14:28Z",
        "createdAt": "2018-05-01T20:47Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "technologies": [
          "API"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "AP Test 02",
        "reviewType": "COMMUNITY",
        "id": 30051780,
        "forumId": 30227,
        "numSubmissions": 0,
        "numRegistrants": 1,
        "numSubmitters": 0,
        "registrationStartDate": "2018-05-01T21:28:04.738Z",
        "registrationEndDate": "2018-05-02T14:28:31.673Z",
        "submissionEndDate": "2018-05-02T14:28:42.065Z",
        "platforms": [
          "AWS"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 747407,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-05-02T14:28:42.065Z",
          "scheduledEndTime": "2018-05-04T14:28:00.000Z",
          "duration": 172800000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 747451,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-05-02T14:29:47.569Z",
            "scheduledEndTime": "2018-05-03T14:29:00.000Z",
            "actualStartTime": "2018-05-02T14:29:47.569Z",
            "duration": 86400000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 747405,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-01T21:28:04.738Z",
            "scheduledEndTime": "2018-05-02T14:28:31.673Z",
            "actualStartTime": "2018-05-01T21:28:04.738Z",
            "actualEndTime": "2018-05-02T14:28:31.673Z",
            "fixedStartTime": "2018-05-01T21:00:00.000Z",
            "duration": 61200000
          },
          {
            "id": 747406,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-05-01T21:33:18.453Z",
            "scheduledEndTime": "2018-05-02T14:28:42.065Z",
            "actualStartTime": "2018-05-01T21:33:18.453Z",
            "actualEndTime": "2018-05-02T14:28:42.065Z",
            "duration": 60900000
          },
          {
            "id": 747407,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-02T14:28:42.065Z",
            "scheduledEndTime": "2018-05-04T14:28:00.000Z",
            "duration": 172800000
          },
          {
            "id": 747408,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-04T14:28:00.000Z",
            "scheduledEndTime": "2018-05-05T14:28:00.000Z",
            "duration": 86400000
          },
          {
            "id": 747409,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-05T14:28:00.000Z",
            "scheduledEndTime": "2018-05-06T02:28:00.000Z",
            "duration": 43200000
          },
          {
            "id": 747451,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-05-02T14:29:47.569Z",
            "scheduledEndTime": "2018-05-03T14:29:00.000Z",
            "actualStartTime": "2018-05-02T14:29:47.569Z",
            "duration": 86400000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "environment": "",
        "codeRepo": "",
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-05-17T22:25Z",
        "createdAt": "2018-04-27T19:37Z",
        "createdBy": "8547899",
        "updatedBy": "8547899",
        "technologies": [
          "API"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "AP test",
        "reviewType": "COMMUNITY",
        "id": 30051760,
        "forumId": 30225,
        "numSubmissions": 0,
        "numRegistrants": 2,
        "numSubmitters": 0,
        "registrationStartDate": "2018-04-27T20:00:54.430Z",
        "registrationEndDate": "2018-04-28T20:00:31.694Z",
        "submissionEndDate": "2018-04-28T20:00:39.100Z",
        "platforms": [
          "AWS"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 747387,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-04-28T20:00:39.100Z",
          "scheduledEndTime": "2018-04-30T20:00:00.000Z",
          "duration": 172800000
        },
        "projectId": 7884,
        "currentPhases": [
          {
            "id": 747373,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-04-28T20:02:20.026Z",
            "scheduledEndTime": "2018-04-29T20:02:00.000Z",
            "actualStartTime": "2018-04-28T20:02:20.026Z",
            "duration": 86400000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 747385,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-04-27T20:00:54.430Z",
            "scheduledEndTime": "2018-04-28T20:00:31.694Z",
            "actualStartTime": "2018-04-27T20:00:54.430Z",
            "actualEndTime": "2018-04-28T20:00:31.694Z",
            "fixedStartTime": "2018-04-27T20:00:00.000Z",
            "duration": 86400000
          },
          {
            "id": 747386,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-04-27T20:05:36.070Z",
            "scheduledEndTime": "2018-04-28T20:00:39.100Z",
            "actualStartTime": "2018-04-27T20:05:36.070Z",
            "actualEndTime": "2018-04-28T20:00:39.100Z",
            "duration": 86100000
          },
          {
            "id": 747387,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-04-28T20:00:39.100Z",
            "scheduledEndTime": "2018-04-30T20:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 747388,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-04-30T20:00:00.000Z",
            "scheduledEndTime": "2018-05-01T20:00:00.000Z",
            "duration": 86400000
          },
          {
            "id": 747389,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-05-01T20:00:00.000Z",
            "scheduledEndTime": "2018-05-02T08:00:00.000Z",
            "duration": 43200000
          },
          {
            "id": 747373,
            "phaseType": "Post-Mortem",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-04-28T20:02:20.026Z",
            "scheduledEndTime": "2018-04-29T20:02:00.000Z",
            "actualStartTime": "2018-04-28T20:02:20.026Z",
            "duration": 86400000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "environment": "",
        "codeRepo": "",
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Observer"
          ],
          "hasUserSubmittedForReview": false
        },
        "updatedAt": "2018-04-10T08:52Z",
        "createdAt": "2018-04-05T08:36Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "technologies": [
          "Java"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Sushil's Dev Challenge - Regression Testing",
        "reviewType": "INTERNAL",
        "id": 30051645,
        "forumId": 30164,
        "numSubmissions": 0,
        "numRegistrants": 1,
        "numSubmitters": 0,
        "registrationStartDate": "2018-04-05T08:52:21.371Z",
        "registrationEndDate": "2018-04-07T08:53:23.833Z",
        "submissionEndDate": "2018-04-10T08:52:50.187Z",
        "platforms": [
          "Android"
        ],
        "totalPrize": 500,
        "isPrivate": false,
        "upcomingPhase": {
          "id": 746805,
          "phaseType": "Review",
          "phaseStatus": "Scheduled",
          "scheduledStartTime": "2018-04-10T08:52:50.187Z",
          "scheduledEndTime": "2018-04-12T08:52:00.000Z",
          "duration": 172800000
        },
        "projectId": 7884,
        "currentPhases": [

        ],
        "allPhases": [
          {
            "id": 746803,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-04-05T08:52:21.371Z",
            "scheduledEndTime": "2018-04-07T08:53:23.833Z",
            "actualStartTime": "2018-04-05T08:52:21.371Z",
            "actualEndTime": "2018-04-07T08:53:23.833Z",
            "fixedStartTime": "2018-04-05T04:00:00.000Z",
            "duration": 172800000
          },
          {
            "id": 746804,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2018-04-05T08:57:20.894Z",
            "scheduledEndTime": "2018-04-10T08:52:50.187Z",
            "actualStartTime": "2018-04-05T08:57:20.894Z",
            "actualEndTime": "2018-04-10T08:52:50.187Z",
            "duration": 431700000
          },
          {
            "id": 746805,
            "phaseType": "Review",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-04-10T08:52:50.187Z",
            "scheduledEndTime": "2018-04-12T08:52:00.000Z",
            "duration": 172800000
          },
          {
            "id": 746806,
            "phaseType": "Appeals",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-04-12T08:52:00.000Z",
            "scheduledEndTime": "2018-04-13T08:52:00.000Z",
            "duration": 86400000
          },
          {
            "id": 746807,
            "phaseType": "Appeals Response",
            "phaseStatus": "Scheduled",
            "scheduledStartTime": "2018-04-13T08:52:00.000Z",
            "scheduledEndTime": "2018-04-13T20:52:00.000Z",
            "duration": 43200000
          }
        ],
        "prizes": [
          350,
          150
        ],
        "isTask": false,
        "environment": "",
        "codeRepo": "",
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter",
            "Reviewer"
          ],
          "hasUserSubmittedForReview": true,
          "submissions": [
            {
              "id": 507649,
              "submittedAt": "2015-06-06T11:34:00.000Z",
              "status": "Active",
              "challengeId": 30049290,
              "type": "Contest Submission"
            }
          ]
        },
        "updatedAt": "2018-02-07T09:29Z",
        "createdAt": "2015-06-06T11:08Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "technologies": [
          "iOS"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Fix all JSLint issues",
        "reviewType": "PEER",
        "id": 30049290,
        "forumId": 28444,
        "numSubmissions": 1034,
        "numRegistrants": 1057,
        "numSubmitters": 1034,
        "registrationStartDate": "2015-07-25T04:00:00.000Z",
        "registrationEndDate": "2018-02-07T09:25:21.554Z",
        "submissionEndDate": "2018-02-07T09:40:15.404Z",
        "platforms": [
          "iOS"
        ],
        "totalPrize": 2,
        "isPrivate": false,
        "projectId": 8647,
        "currentPhases": [
          {
            "id": 733067,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-02-07T09:59:13.233Z",
            "scheduledEndTime": "2018-02-09T09:59:00.000Z",
            "actualStartTime": "2018-02-07T09:59:13.233Z",
            "duration": 172800000
          }
        ],
        "allPhases": [
          {
            "id": 733065,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2015-07-25T04:00:00.000Z",
            "scheduledEndTime": "2018-02-07T09:25:21.554Z",
            "actualStartTime": "2015-07-25T04:00:00.000Z",
            "actualEndTime": "2018-02-07T09:25:21.554Z",
            "fixedStartTime": "2015-06-05T13:00:00.000Z",
            "duration": 1382400000
          },
          {
            "id": 733066,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2015-07-25T04:00:00.000Z",
            "scheduledEndTime": "2018-02-07T09:40:15.404Z",
            "actualStartTime": "2015-07-25T04:00:00.000Z",
            "actualEndTime": "2018-02-07T09:40:15.404Z",
            "duration": 8729700000
          },
          {
            "id": 733067,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-02-07T09:59:13.233Z",
            "scheduledEndTime": "2018-02-09T09:59:00.000Z",
            "actualStartTime": "2018-02-07T09:59:13.233Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          1,
          1
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter",
            "Reviewer"
          ],
          "hasUserSubmittedForReview": true,
          "submissionReviewScore": 46.222222646077476,
          "submissions": [
            {
              "id": 508667,
              "submittedAt": "2015-06-08T20:00:48.000Z",
              "status": "Active",
              "challengeId": 30049303,
              "type": "Contest Submission"
            }
          ]
        },
        "updatedAt": "2019-06-05T09:24Z",
        "createdAt": "2015-06-08T19:44Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "technologies": [
          ".NET System.Addins"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Peer Review Load Test 0.7",
        "reviewType": "COMMUNITY",
        "id": 30049303,
        "forumId": 28448,
        "numSubmissions": 395,
        "numRegistrants": 401,
        "numSubmitters": 395,
        "registrationStartDate": "2015-06-08T15:52:11.715Z",
        "registrationEndDate": "2018-02-07T09:21:56.169Z",
        "submissionEndDate": "2018-02-07T09:34:59.181Z",
        "platforms": [
          "Android"
        ],
        "totalPrize": 2,
        "isPrivate": false,
        "projectId": 8647,
        "currentPhases": [
          {
            "id": 733107,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-02-07T09:53:12.087Z",
            "scheduledEndTime": "2018-02-09T09:53:00.000Z",
            "actualStartTime": "2018-02-07T09:53:12.087Z",
            "duration": 172800000
          }
        ],
        "allPhases": [
          {
            "id": 733105,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2015-06-08T15:52:11.715Z",
            "scheduledEndTime": "2018-02-07T09:21:56.169Z",
            "actualStartTime": "2015-06-08T15:52:11.715Z",
            "actualEndTime": "2018-02-07T09:21:56.169Z",
            "fixedStartTime": "2015-06-08T15:52:11.715Z",
            "duration": 432000000
          },
          {
            "id": 733106,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2015-06-08T15:57:52.236Z",
            "scheduledEndTime": "2018-02-07T09:34:59.181Z",
            "actualStartTime": "2015-06-08T15:57:52.236Z",
            "actualEndTime": "2018-02-07T09:34:59.181Z",
            "duration": 431700000
          },
          {
            "id": 733107,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-02-07T09:53:12.087Z",
            "scheduledEndTime": "2018-02-09T09:53:00.000Z",
            "actualStartTime": "2018-02-07T09:53:12.087Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          1,
          1
        ],
        "isTask": false,
        "isRegistered": false
      },
      {
        "userId": 23124329,
        "handle": "callmekatootie",
        "userDetails": {
          "roles": [
            "Submitter",
            "Reviewer"
          ],
          "hasUserSubmittedForReview": true,
          "submissionReviewScore": 51.71428604125977,
          "submissions": [
            {
              "id": 508168,
              "submittedAt": "2015-06-08T19:45:05.000Z",
              "status": "Active",
              "challengeId": 30049301,
              "type": "Contest Submission"
            }
          ]
        },
        "updatedAt": "2019-06-05T09:24Z",
        "createdAt": "2015-06-08T19:21Z",
        "createdBy": "8547899",
        "updatedBy": "22841596",
        "technologies": [
          ".NET"
        ],
        "status": "ACTIVE",
        "track": "DEVELOP",
        "subTrack": "CODE",
        "name": "Peer Review Load Test 0.5",
        "reviewType": "PEER",
        "id": 30049301,
        "forumId": 28446,
        "numSubmissions": 398,
        "numRegistrants": 400,
        "numSubmitters": 398,
        "registrationStartDate": "2015-06-08T15:31:57.456Z",
        "registrationEndDate": "2018-02-07T09:22:54.192Z",
        "submissionEndDate": "2018-02-07T09:34:21.230Z",
        "platforms": [
          "Android"
        ],
        "totalPrize": 2,
        "isPrivate": false,
        "projectId": 8647,
        "currentPhases": [
          {
            "id": 733087,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-02-07T09:51:50.959Z",
            "scheduledEndTime": "2018-02-09T09:51:00.000Z",
            "actualStartTime": "2018-02-07T09:51:50.959Z",
            "duration": 172800000
          }
        ],
        "submissionViewable": false,
        "allPhases": [
          {
            "id": 733085,
            "phaseType": "Registration",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2015-06-08T15:31:57.456Z",
            "scheduledEndTime": "2018-02-07T09:22:54.192Z",
            "actualStartTime": "2015-06-08T15:31:57.456Z",
            "actualEndTime": "2018-02-07T09:22:54.192Z",
            "fixedStartTime": "2015-06-08T15:31:57.456Z",
            "duration": 12572882544
          },
          {
            "id": 733086,
            "phaseType": "Submission",
            "phaseStatus": "Closed",
            "scheduledStartTime": "2015-06-08T15:36:06.939Z",
            "scheduledEndTime": "2018-02-07T09:34:21.230Z",
            "actualStartTime": "2015-06-08T15:36:06.939Z",
            "actualEndTime": "2018-02-07T09:34:21.230Z",
            "duration": 12572633061
          },
          {
            "id": 733087,
            "phaseType": "Review",
            "phaseStatus": "Open",
            "scheduledStartTime": "2018-02-07T09:51:50.959Z",
            "scheduledEndTime": "2018-02-09T09:51:00.000Z",
            "actualStartTime": "2018-02-07T09:51:50.959Z",
            "duration": 172800000
          }
        ],
        "prizes": [
          1,
          1
        ],
        "isTask": false,
        "isRegistered": false
      }
    ]
  },
  "version": "v3"
}

export const submissionDetails = [
  {
    "updatedBy": "mess",
    "created": "2019-08-07T12:37:26.397Z",
    "legacySubmissionId": 208488,
    "isFileSubmission": true,
    "type": "Contest Submission",
    "url": "https://s3.amazonaws.com/topcoder-dev-submissions/2bdbd03a-a84d-467f-87ae-005294eb4f2f.zip",
    "challengeId": 30052924,
    "filename": "submission_1565181445057.zip",
    "createdBy": "mess",
    "review": [
      {
        "score": 100,
        "updatedBy": "maE2maBSv9fRVHjSlC31LFZSq6VhhZqC@clients",
        "reviewerId": "0f969325-1c43-4366-b91c-0b5bb8ff3ec4",
        "submissionId": "2bdbd03a-a84d-467f-87ae-005294eb4f2f",
        "createdBy": "maE2maBSv9fRVHjSlC31LFZSq6VhhZqC@clients",
        "created": "2019-08-07T12:37:31.286Z",
        "scoreCardId": 30001850,
        "typeId": "68c5a381-c8ab-48af-92a7-7a869a4ee6c3",
        "id": "cb33cbf3-183c-4842-9913-e5bdc6ec0d1e",
        "updated": "2019-08-07T12:37:31.286Z"
      }
    ],
    "id": "2bdbd03a-a84d-467f-87ae-005294eb4f2f",
    "submissionPhaseId": 768088,
    "updated": "2019-08-07T12:37:26.397Z",
    "fileType": "zip",
    "memberId": 99998888
  }
];

export const artifactsDetails = {
  artifacts: ["50b917df-5b81-4081-8e20-7fc8a6aabe54", "c56a4180-65aa-42ec-a945-5fd21dec0501"]
}

export const reviewsWithArtifacts = [
  {
    "artifacts": [
      "50b917df-5b81-4081-8e20-7fc8a6aabe54",
      "c56a4180-65aa-42ec-a945-5fd21dec0501"
    ],
    "id": "fed03479-47ba-4c58-b29d-f8d5c7f3bdfc",
    "rev": [{ "score": "100", "created": "Wed, 07 Aug 2019 11:22:10 GMT" }]

  }
]
export const reviewsWithoutArtifacts = [
  {
    "artifacts": [],
    "id": "fed03479-47ba-4c58-b29d-f8d5c7f3bdfc",
    "rev": [{ "score": "100", "created": "Wed, 07 Aug 2019 11:22:10 GMT" }]
  }
]