
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useAuthorization = (roles: string) => {
 
  const router = useRouter();

  useEffect(() => {
    if (roles !== "admin") {
        
      router.push('/');
      
    }
  }, []);

  return null;
}


export default useAuthorization;
