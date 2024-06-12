"use client"

import { Toaster } from '../shadcn/toaster';
import { Button } from '../shadcn/button/button';

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
