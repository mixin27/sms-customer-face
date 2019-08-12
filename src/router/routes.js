import Root from "../layouts";
import Home from "../pages/home";
import Service from "../pages/service";
import News from "../pages/news";
import About from "../pages/about";
import Contact from "../pages/contact";
import FeedBack from "../pages/feedback";

export default [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/service",
        exact: true,
        component: Service
      },
      {
        path: "/news",
        exact: true,
        component: News
      },
      {
        path: "/about",
        exact: true,
        component: About
      },
      {
        path: "/feedback",
        exact: true,
        component: FeedBack
      },
      {
        path: "/contact",
        exact: true,
        component: Contact
      }
    ]
  }
];
