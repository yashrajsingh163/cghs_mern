import React,{useState} from 'react'

function WithError(WrappedComponent) {
    return function ErrorBoundary(props) {
        const [error, setError] = useState(null);
      
        if (error) {
          return <div>An error occurred: {error.toString()}</div>;
        }
      
        try {
            {console.log("called")}
          return <WrappedComponent {...props} />;
        } catch (err) {
            {console.log("called error")}
          setError(err);
        }
    }
}

export default WithError