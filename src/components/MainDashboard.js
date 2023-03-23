import React,{useEffect, useState} from 'react'

function MainDashboard() {

    const [d,setD] = useState("")

    useEffect(() => {
     setTimeout(()=>{
        setD("When we use lazy loading, components are rendered as we navigate. So, we need to have a placeholder for those components until they are loaded. As a solution, React.Suspense was introduced, and it acts as a wrapper for the lazy components.You can wrap a single lazy component, multiple lazy components, or multiple lazy components with different hierarchy levels with React.Suspense. In addition, it accepts a prop named fallback as the placeholder, and you can pass a component or an element for that.")
     },5000)
    }, [])
    
  return (
    <main id="main" className="main">
     <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
   {d ?  <p>
    When we use lazy loading, components are rendered as we navigate. So, we need to have a placeholder for those components until they are loaded. As a solution, React.Suspense was introduced, and it acts as a wrapper for the lazy components.

You can wrap a single lazy component, multiple lazy components, or multiple lazy components with different hierarchy levels with React.Suspense. In addition, it accepts a prop named fallback as the placeholder, and you can pass a component or an element for that.

For example, you can pass the waiting or loading message as the fallback prop, and it will be displayed until the wrapped lazy component is rendered.


As you can see, you need to use both the React.lazy() and React.Suspense features to build a lazy-loading component in React. These features are straightforward and anyone with basic React knowledge can easily use them.

However, sometimes you might face issues due to promise rejections in the React.lazy() function. To overcome such situations, you need to create a React error boundary component and wrap the Suspense components using it.


import ErrorBoundary from "./error.boundary.js";

Dont Use Too Much Lazy Loading
As discussed, lazy loading has many benefits. But overusing it can have a significant negative impact on your applications. So, it is essential to understand when we should use lazy loading and when we should not.

You should not opt for lazy loading if your application has a small bundle size. There is no point in splitting a small bundle into pieces, and it will only increase coding and configuring effort.

Also, there are special application types like e-commerce sites that can be negative impacted by lazy loading. For example, users like to scroll through quickly when searching for items. If you lazy load shopping items, it will break the scrolling speed and result in a bad user experience. So, you should analyze the company’s website usage before using lazy loading.

On the other hand, lazy loading can be a real life-saver in large-scale projects. Projects with large bundle sizes take a significant amount of time for the initial load, and it is a significant drawback in terms of user experience. So, think of application requirements, scale, and current performance of the application before choosing lazy loading.

Conclusion
This article discussed what lazy loading is, how we can implement it in React, and the pros and cons we should know before using it. I hope this article helped you improve your knowledge of React lazy loading.

Thank you for reading.

The Syncfusion Essential Studio for React suite offers over 70 high-performance, lightweight, modular, and responsive UI components in a single package. It’s the only suite you’ll ever need to construct a complete app.

If you have questions, you can contact us through our support forum, support portal, or feedback portal. We are always happy to assist you!

Related Blogs
Optimize Next.js App Bundle and Improve Its Performance
Top 7 React Animation Libraries in 2022
Recoil: the Future of State Management for React?
Vue Composition API vs. React Hooks
What is Memoization in React?
Tags:
lazy loading, productivity, React, Web Development
Chameera Dulanga
CHAMEERA DULANGA
Software engineer with more than 3 years of working experience in React, Angular, Node.js, Serverless, and AWS. Recognized as an AWS Community Builder for 2022. Tech Blogger since 2019 with 120+ articles.
 More Posts
You must be logged in to post a comment.
    </p> :""}
    </main>
  )
}

export default MainDashboard