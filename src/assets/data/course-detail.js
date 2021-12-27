
export const courseOverviews = [
  // ============================= Course 1 ================================================== //
  {
    id: 1,
    full_description: `<h4>full description demo</h4>`,
    category: {
      _id: 1,
      name: "Lập trình web"
    },
    title: "Khóa học Javascript cho người mới bắt đầu",
    short_description: "Bạn muốn bắt đầu với lập trình web, bạn muốn bắt đầu với javascript. Khóa học này là một lựa chọn tuyệt vời để có một nền tảng vững chắc trước khi bước vào thế giới web ",
    isBestseller: true,
    num_rating: 4,
    rating_detail:{
      amount: 300,//
      stars:[
        0,// 1 sao
        0,//2 sao
        50,//3 sao
        200,//4 sao 
        50,//5 sao
      ]
    },
    num_feedback: 0,
    num_register: 1000000,
    last_update: "03/2021",
    course_img_source: "assets/images/course/course1.png",
    course_img_title: "course-image",
    price: 2000000,
    discount: 90,
    demoProducts: [
      {
        id: 0,
        name: "Máy tính",
        image: "assets/images/course-detail/demo-products/course1-calculator.png",
        description: "Sản phẩm đánh giá học viên thông hiểu javascirpt ở mức cơ bản",
      },
      {
        id: 1,
        name: "Dự báo thời tiết",
        image: "assets/images/course-detail/demo-products/course1-weather.png",
        description: "Sản phẩm đánh giá học viên thông hiểu javascirpt ở mức nâng cao",
      },
      {
        id: 2,
        name: "Đồng hồ kỹ thuật số",
        image: "assets/images/course-detail/demo-products/course1-watch.png",
        description: "Sản phẩm đánh giá học viên thông hiểu javascirpt ở mức cơ bản",
      },
      {
        id: 3,
        name: "Game caro",
        image: "assets/images/course-detail/demo-products/course1-caro-game.png",
        description: "Sản phẩm đánh giá học viên thông hiểu javascirpt ở mức nâng cao",
      }
    ],
    chapters: [
      {
        chapter_id: 1,
        chapter_title: 'chapter 1',
        sum_video_chapter: 3,
        sum_duration_chapter: 1232432,
        videos: [
          {
            video_id: 1,
            video_title: 'video 1',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: true,
          },
          {
            video_id: 2,
            video_title: 'video 2',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=_zN7zK1K6Lo',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: false,
          },
        ],
      },
      {
        chapter_id: 2,
        chapter_title: 'chapter 2',
        sum_video_chapter: 3,
        sum_duration_chapter: 1232432,
        videos: [
          {
            video_id: 1,
            video_title: 'video 1',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: true,
          },
          {
            video_id: 2,
            video_title: 'video 2',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: false,
          },
        ],
      },
    ],
  },

  // ============================= Course 2 ================================================== //
  {
    id: 2,
    full_description: `<h4>full description demo</h4>`,
    category: {
      _id: 1,
      name: "Lập trình web"
    },
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    short_description: "Đi sâu vào và tìm hiểu React.js từ đầu! Tìm hiểu Reactjs, Hooks, Redux, React Routing, Animations, Next.js và hơn thế nữa!",
    isBestseller: true,
    num_rating: 4,
    rating_detail:{
      amount: 300,//
      stars:[
        0,
        0,
        50,
        200,
        50,
      ]
    },
    num_feedback: 0,
    num_register: 1000000,
    last_update: "04/2021",
    course_img_source: "assets/images/course/course2.png",
    course_img_title: "nothing",
    price: 2000000,
    discount: 30,
    demoProducts: [
      {
        id: 0,
        name: "Máy tính",
        image: "assets/images/course-detail/demo-products/course1-calculator.png",
        description: "Sản phẩm đánh giá học viên thông hiểu javascirpt ở mức cơ bản",
      },
      {
        id: 1,
        name: "Dự báo thời tiết",
        image: "assets/images/course-detail/demo-products/course1-weather.png",
        description: "Sản phẩm đánh giá học viên thông hiểu javascirpt ở mức nâng cao",
      },
      {
        id: 2,
        name: "Đồng hồ kỹ thuật số",
        image: "assets/images/course-detail/demo-products/course1-watch.png",
        description: "Sản phẩm đánh giá học viên thông hiểu javascirpt ở mức cơ bản",
      },
      {
        id: 3,
        name: "Game caro",
        image: "assets/images/course-detail/demo-products/course1-caro-game.png",
        description: "Sản phẩm đánh giá học viên thông hiểu javascirpt ở mức nâng cao",
      }
    ],
    chapters: [
      {
        chapter_id: 1,
        chapter_title: 'chapter 1',
        sum_video_chapter: 3,
        sum_duration_chapter: 1232432,
        videos: [
          {
            video_id: 1,
            video_title: 'video 1',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: true,
          },
          {
            video_id: 2,
            video_title: 'video 2',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=_zN7zK1K6Lo',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: false,
          },
        ],
      },
      {
        chapter_id: 2,
        chapter_title: 'chapter 2',
        sum_video_chapter: 3,
        sum_duration_chapter: 1232432,
        videos: [
          {
            video_id: 1,
            video_title: 'video 1',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: true,
          },
          {
            video_id: 2,
            video_title: 'video 2',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: false,
          },
        ],
      },
    ],
  },

  // ============================= Course 3 ================================================== //
  {
    id: 3,
    full_description: `<h4>full description demo</h4>`,
    category: {
      _id: 1,
      name: "Lập trình web"
    },
    title: "Angular - The Complete Guide (2022 Edition)",
    short_description: "Thành thạo Angular 13 (trước đây là 'Angular 2') và xây dựng các ứng dụng web hoạt động, tuyệt vời với phiên bản kế nhiệm của Angular.js",
    isBestseller: false,
    num_rating: 4,
    rating_detail:{
      amount: 300,//
      stars:[
        0,
        0,
        50,
        200,
        50,
      ]
    },
    num_feedback: 0,
    num_register: 1000000,
    last_update: "05/2021",
    course_img_source:  "assets/images/course/course3.png",
    course_img_title: "nothing",
    price: 2000000,
    discount: 90,
    chapters: [
      {
        chapter_id: 1,
        chapter_title: 'chapter 1',
        sum_video_chapter: 3,
        sum_duration_chapter: 1232432,
        videos: [
          {
            video_id: 1,
            video_title: 'video 1',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: true,
          },
          {
            video_id: 2,
            video_title: 'video 2',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: false,
          },
        ],
      },
      {
        chapter_id: 2,
        chapter_title: 'chapter 2',
        sum_video_chapter: 3,
        sum_duration_chapter: 1232432,
        videos: [
          {
            video_id: 1,
            video_title: 'video 1',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: true,
          },
          {
            video_id: 2,
            video_title: 'video 2',
            isLearning: false,
            video_source: 'https://www.youtube.com/watch?v=icyNhGsqsuQ',
            status_completed: 0,
            current_time: 0,
            duration: 21234,
            isPreview: false,
          },
        ],
      },
    ],
  },

  // =============== Course 4 =======================================
  {
    id: 4,
    full_description: '',
    category: {
      _id: 1,
      name: ''
    },
    title: '',
    short_description: '',
    isBestseller: true || false,
    num_rating: 0,
    rating_detail:{
      amount: 0,//
      stars:[
        0,// 1 sao
        0,//2 sao
        0,//3 sao
        0,//4 sao 
        0,//5 sao
      ]
    },
    num_feedback: 0,
    num_register: 0,
    last_update: "03/2021",
    course_img_source: "assets/images/course/course1.png",
    course_img_title: "course-image",
    price: 0,
    discount: 0,
    demoProducts: [
      {
        id: 0,
        name: '',
        image: "assets/images/default.jpeg",
        description: '',
      },
      {
        id: 1,
        name: '',
        image: "assets/images/default.jpeg",
        description: '',
      },
      {
        id: 2,
        name: '',
        image: "assets/images/default.jpeg",
        description: '',
      },
      {
        id: 3,
        name: '',
        image: '',
        description: '',
      }
    ],
    chapters: [
      {
        chapter_id: 1,
        chapter_title: '',
        sum_video_chapter: 0,
        sum_duration_chapter: 0,
        videos: [
          {
            video_id: 1,
            video_title: '',
            isLearning: false || true,
            video_source: '',
            status_completed: 0,
            current_time: 0,
            duration: 0,
            isPreview: 0,
          }
        ]
      }
    ]
  },

  // =============== Course 5 =======================================
  {
    id: 5,
    full_description: '',
    category: {
      _id: 1,
      name: ''
    },
    title: '',
    short_description: '',
    isBestseller: true || false,
    num_rating: 0,
    rating_detail:{
      amount: 0,//
      stars:[
        0,// 1 sao
        0,//2 sao
        0,//3 sao
        0,//4 sao 
        0,//5 sao
      ]
    },
    num_feedback: 0,
    num_register: 0,
    last_update: "03/2021",
    course_img_source: "assets/images/course/course1.png",
    course_img_title: "course-image",
    price: 0,
    discount: 0,
    demoProducts: [
      {
        id: 0,
        name: '',
        image: "assets/images/default.jpeg",
        description: '',
      },
      {
        id: 1,
        name: '',
        image: "assets/images/default.jpeg",
        description: '',
      },
      {
        id: 2,
        name: '',
        image: "assets/images/default.jpeg",
        description: '',
      },
      {
        id: 3,
        name: '',
        image: '',
        description: '',
      }
    ],
    chapters: [
      {
        chapter_id: 1,
        chapter_title: '',
        sum_video_chapter: 0,
        sum_duration_chapter: 0,
        videos: [
          {
            video_id: 1,
            video_title: '',
            isLearning: false || true,
            video_source: '',
            status_completed: 0,
            current_time: 0,
            duration: 0,
            isPreview: 0,
          }
        ]
      }
    ]
  },

  // =============== Course demo =======================================
  {
    id: 0,
    full_description: '',
    category: {
      _id: 1,
      name: ''
    },
    title: '',
    short_description: '',
    isBestseller: true || false,
    num_rating: 0,
    rating_detail:{
      amount: 0,//
      stars:[
        0,// 1 sao
        0,//2 sao
        0,//3 sao
        0,//4 sao 
        0,//5 sao
      ]
    },
    num_feedback: 0,
    num_register: 0,
    last_update: "03/2021",
    course_img_source: "assets/images/course/course1.png",
    course_img_title: "course-image",
    price: 0,
    discount: 0,
    demoProducts: [
      {
        id: 0,
        name: '',
        image: "assets/images/default.jpeg",
        description: '',
      },
      {
        id: 1,
        name: '',
        image: "assets/images/default.jpeg",
        description: '',
      },
      {
        id: 2,
        name: '',
        image: "assets/images/default.jpeg",
        description: '',
      },
      {
        id: 3,
        name: '',
        image: '',
        description: '',
      }
    ],
    chapters: [
      {
        chapter_id: 1,
        chapter_title: '',
        sum_video_chapter: 0,
        sum_duration_chapter: 0,
        videos: [
          {
            video_id: 1,
            video_title: '',
            isLearning: false || true,
            video_source: '',
            status_completed: 0,
            current_time: 0,
            duration: 0,
            isPreview: 0,
          }
        ]
      }
    ]
  },
];
