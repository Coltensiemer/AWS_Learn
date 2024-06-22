"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/atomic/button/button';

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);

    // Redirect after a delay (e.g., 5 seconds)
    const redirectTimer = setTimeout(() => { 
      setRedirecting(true);
      router.back(); // Redirect to previous page
    }, 1000000); // Delay in milliseconds (10 seconds)

    // Clear the timer when the component unmounts or if the user navigates away manually
    return () => clearTimeout(redirectTimer);
  }, [error, router]);

  // Show a message indicating redirection is in progress
  if (redirecting) {
    return <div>Redirecting...</div>;
  }

  // Show the error message and a button to retry
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={() => router.back()}>Try again</Button>
    </div>
  );
}
