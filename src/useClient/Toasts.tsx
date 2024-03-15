"use client"

import { Toaster } from '../components/ui/toaster';
import { Button } from '../components/ui/button';

export default function SuccessfulToast() {
//@ts-ignore
  const { toast } = Toaster();
  return(
	
<Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
