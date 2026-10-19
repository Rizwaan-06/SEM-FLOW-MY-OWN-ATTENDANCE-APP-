# SemFlow

SemFlow is an offline-first academic planner built with Expo, React Native, and SQLite. The public starter contains no personal course, attendance, timetable, training schedule, or GPA records.

## Run on Android

1. Install Expo Go on your Android phone.
2. Run `npm install` in this folder if dependencies are not present.
3. Run `npm start` and scan the QR code with Expo Go. Keep the phone and development computer on the same network.

The project also supports `npm run android` when an Android emulator and Android SDK are configured.

## Screens

- Today: date-based class check-ins, progress, and four daily LeetCode problems.
- Attendance: overall, course, and training attendance views.
- Schedule: date and week navigation.
- Practice: daily queue and topic roadmap.
- Diary: homework tracking and reminders.
- GPA: expected grade and GPA planning.

The app stores check-ins, completed problems, and homework locally in SQLite on the device.
