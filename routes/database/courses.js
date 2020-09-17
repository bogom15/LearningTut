var lessons = require('./lessons');

const courses = [{
    title: 'Introduction to angular',
    courseDescription: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.',
    courseImage: '/images/man.png',
    lessons: lessons.businessPlanningLessons
}, {
    title: 'Introduction to nodejs',
    courseDescription: 'As an asynchronous event driven JavaScript runtime, Node.js is designed to build scalable network applications.',
    courseImage: '/images/list.png',
    lessons: lessons.introductionToNodejsLessons
}, {
    title: 'Introduction to java',
    courseDescription: 'Java is a general-purpose programming language that is class-based which means you build once and run everywhere!',
    courseImage: '/images/learning.png',
    lessons: lessons.introductionToJavaLessons
}, {
    title: 'Introduction to react',
    courseDescription: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
    courseImage: '/images/test.png',
    lessons: lessons.introductionToReactLessons
}, {
    title: 'Introduction to vue',
    courseDescription: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. ',
    courseImage: '/images/presentation.png',
    lessons: lessons.introductionToVueLessons
}, {
    title: 'Introduction to kotlin',
    courseDescription: 'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.',
    courseImage: '/images/brainstorm.png',
    lessons: lessons.introductionToKotlinLessons
}];

module.exports = courses;