"use client"

<<<<<<<< HEAD:src/useClient/Toasts.tsx
<<<<<<< HEAD:src/useClient/Toasts.tsx
import { Toaster } from '../components/shadcn/toaster';
import { Button } from '../components/shadcn/button/button';
=======
import { Toaster } from '../atomic/toaster';
import { Button } from '../atomic/button/button';
>>>>>>> 6e60b80 (updated folder structure from shadcn to atomoic):src/components/useClient/Toasts.tsx
========
import { Toaster } from './atomic/toaster';
import { Button } from './atomic/button/button';
>>>>>>>> 1c7c77e (updated component structure and route direction):src/components/Toasts.tsx

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
