export const root = '/';


export const landing = '/landing';

export const LANDING_PAGES = {
  about: 'about',
  programs: 'programs',
  advantages: 'advantages',
  coach: 'coach',
  faq: 'faq',
  results: 'results',
};

export const landingAbout = `${landing}/${LANDING_PAGES.about}`;
export const landingPrograms = `${landing}/${LANDING_PAGES.programs}`;
export const landingAdvantages = `${landing}/${LANDING_PAGES.advantages}`;
export const landingCoach = `${landing}/${LANDING_PAGES.coach}`;
export const landingFaq = `${landing}/${LANDING_PAGES.faq}`;
export const landingResults = `${landing}/${LANDING_PAGES.results}`;


export const internal = '/internal';

export const INTERNAL_PAGES = {
  courses: 'courses',
};



export const internalCourses = `${internal}/${INTERNAL_PAGES.courses}`;

export const INTERNAL_COURSES_PAGES = {
  my: 'my',
  all: 'all',
  page: 'page',
};

export const internalCoursesMy = `${internal}/${INTERNAL_PAGES.courses}/${INTERNAL_COURSES_PAGES.my}`;
export const internalCoursesAll = `${internal}/${INTERNAL_PAGES.courses}/${INTERNAL_COURSES_PAGES.all}`;
export const internalCoursesPage = (courseId) =>
  `${internal}/${INTERNAL_PAGES.courses}/${INTERNAL_COURSES_PAGES.page}/${courseId}`;

// export const internalCoursesPageWeek = (courseId, weekIndex) => `${internalCoursesPage(courseId)}/${weekIndex}`;

export default {
    root,


    landing,

    LANDING_PAGES,

    landingAbout,
    landingPrograms,
    landingAdvantages,
    landingCoach,
    landingFaq,
    landingResults,


    internal,

    INTERNAL_PAGES,

    internalCourses,

    INTERNAL_COURSES_PAGES,

    internalCoursesMy,
    internalCoursesAll,
    internalCoursesPage,
}
