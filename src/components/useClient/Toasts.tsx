"use client"

import { Toaster } from '../atomic/toaster';
import { Button } from '../atomic/button/button';

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
