import React, { useEffect, useState } from "react";

export function withUID(WrappedComponent: any) {
  return function UIDLoader(props: any) {
    const [uid, setUid] = useState<string | null>(null);

    useEffect(() => {
      const loadedUid = localStorage.getItem("user_uid");
      if (loadedUid) {
        setUid(loadedUid);
      } else {
        const intervalId = setInterval(() => {
          const retryUid = localStorage.getItem("user_uid");
          if (retryUid) {
            setUid(retryUid);
            clearInterval(intervalId);
          }
        }, 1000);

        // Clear the interval if the component is unmounted
        return () => clearInterval(intervalId);
      }
    }, []);

    if (!uid) return null; // or some loading indicator

    return <WrappedComponent {...props} uid={uid} />;
  };
}
